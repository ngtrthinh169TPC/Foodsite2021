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
