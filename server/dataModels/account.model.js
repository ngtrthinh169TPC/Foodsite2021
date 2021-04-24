module.exports = (sequelize, Sequelize) => {
	const Account = sequelize.define("accounts", {
		username: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING,
		},
		password: {
			type: Sequelize.STRING,
		},
	});

	return Account;
};
