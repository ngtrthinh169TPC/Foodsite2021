const config = require("../configs/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
	host: config.HOST,
	dialect: config.dialect,
	operatorsAliases: false,

	pool: {
		max: config.pool.max,
		min: config.pool.min,
		acquire: config.pool.acquire,
		idle: config.pool.idle,
	},
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.account = require("../dataModels/account.model.js")(sequelize, Sequelize);
db.role = require("../dataModels/role.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.account, {
	through: "accountRoles",
	foreignKey: "roleId",
	otherKey: "accountId",
});
db.account.belongsToMany(db.role, {
	through: "accountRoles",
	foreignKey: "accountId",
	otherKey: "roleId",
});

db.ROLES = ["customer", "employee", "manager", "admin"];

module.exports = db;
