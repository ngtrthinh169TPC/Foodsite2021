const mysql = require("mysql");
const config = require("../configs/db.config");

const connection = mysql.createConnection({
	host: config.HOST,
	user: config.USER,
	password: config.PASSWORD,
	database: config.DB,
});

connection.connect(function (err) {
	err ? console.log(err) : console.log(connection);
});

module.exports = function (app) {
	app.get("/api/data/products", (req, res) => {
		var sql = "SELECT * FROM products";
		connection.query(sql, function (err, results) {
			if (err) throw err;
			res.json({ products: results });
		});
	});

	app.get("/api/data/productlines", (req, res) => {
		var sql = "SELECT * FROM productlines";
		connection.query(sql, function (err, results) {
			if (err) throw err;
			res.json({ productlines: results });
		});
	});
};
