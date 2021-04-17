const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "18042001",
	database: "foodsitedata",
});

connection.connect(function (err) {
	err ? console.log(err) : console.log(connection);
});

app.get("/api/products", (req, res) => {
	var sql = "SELECT * FROM products";
	connection.query(sql, function (err, results) {
		if (err) throw err;
		res.json({ news: results });
	});
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(4000, () => console.log("App listening on port 4000"));
