const db = require("../dataModels");
const config = require("../configs/key.config");
const Account = db.account;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.register = (req, res) => {
	// Save new Account to Database
	Account.create({
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
	})
		.then((account) => {
			if (req.body.roles) {
				Role.findAll({
					where: {
						name: {
							[Op.or]: req.body.roles,
						},
					},
				}).then((roles) => {
					account.setRoles(roles).then(() => {
						res.send({
							message:
								"Account was registered with specific role successfully!",
						});
					});
				});
			} else {
				// customer role = 1
				account.setRoles([1]).then(() => {
					res.send({
						message: "Customer Account was registered successfully!",
					});
				});
			}
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

exports.login = (req, res) => {
	Account.findOne({
		where: {
			username: req.body.username,
		},
	})
		.then((account) => {
			if (!account) {
				return res.status(404).send({ message: "Account is not exist." });
			}

			var passwordIsValid = bcrypt.compareSync(
				req.body.password,
				account.password
			);

			if (!passwordIsValid) {
				return res.status(401).send({
					accessToken: null,
					message: "Invalid Password.",
				});
			}

			var token = jwt.sign({ id: account.id }, config.secret, {
				expiresIn: 86400, // 24 hours
			});

			var authorities = [];
			account.getRoles().then((roles) => {
				for (let i = 0; i < roles.length; i++) {
					authorities.push("ROLE:" + roles[i].name.toUpperCase());
				}
				res.status(200).send({
					id: account.id,
					username: account.username,
					email: account.email,
					roles: authorities,
					accessToken: token,
				});
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
