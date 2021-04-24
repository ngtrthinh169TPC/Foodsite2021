const verifyRegister = require("../middleware/verifyRegister");
const controller = require("../controllers/account.controller");

module.exports = function (app) {
	app.post(
		"/api/account/register",
		[
			verifyRegister.checkDuplicateUsernameOrEmail,
			verifyRegister.checkRolesExisted,
		],
		controller.register
	);
};
