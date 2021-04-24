const db = require("../dataModels");
const ROLES = db.ROLES;
const Account = db.account;

checkDuplicateUsernameOrEmail = (req, res, next) => {
	// Username
	Account.findOne({
		where: {
			username: req.body.username,
		},
	}).then((account) => {
		if (account) {
			res.status(400).send({
				message: "Failed. Username is already in used.",
			});
			return;
		}

		// Email
		Account.findOne({
			where: {
				email: req.body.email,
			},
		}).then((account) => {
			if (account) {
				res.status(400).send({
					message: "Failed. Email is already in used.",
				});
				return;
			}

			next();
		});
	});
};

checkRolesExisted = (req, res, next) => {
	if (req.body.roles) {
		for (let i = 0; i < req.body.roles.length; i++) {
			if (!ROLES.includes(req.body.roles[i])) {
				res.status(400).send({
					message: 'Failed. Role "' + req.body.roles[i] + '" does not exist.',
				});
				return;
			}
		}
	}

	next();
};

const verifyRegister = {
	checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
	checkRolesExisted: checkRolesExisted,
};

module.exports = verifyRegister;
