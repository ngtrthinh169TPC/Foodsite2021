module.exports = {
	HOST: "localhost",
	USER: "root",
	PASSWORD: "18042001",
	DB: "foodsitedata",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
