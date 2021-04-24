const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
// const dbConfig = require("./server/configs/db.config");

const app = express();

var corsOptions = {
	origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./server/dataModels");
const role = db.role;

db.sequelize.sync();
// Only use when we need to initialise something
// db.sequelize.sync({ force: true }).then(() => {
// 	console.log("Drop and Resync Database with { force: true }");
// 	initial();
// });

// function initial() {
// 	role.create({
// 		id: 1,
// 		name: "customer",
// 	});

// 	role.create({
// 		id: 2,
// 		name: "employee",
// 	});

// 	role.create({
// 		id: 3,
// 		name: "manager",
// 	});

// 	role.create({
// 		id: 4,
// 		name: "admin",
// 	});
// }

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "18042001",
	database: "foodsitedata",
});

connection.connect(function (err) {
	err ? console.log(err) : console.log(connection);
});

app.get("/", (req, res) => res.send("hello sucker"));

app.get("/api/products/data", (req, res) => {
	var sql = "SELECT * FROM products";
	connection.query(sql, function (err, results) {
		if (err) throw err;
		res.json({ products: results });
	});
});

app.get("/api/test", (req, res) => {
	res.json({ message: "Ducking message" });
});

require("./server/requests/account.request")(app);

app.listen(4000, () => console.log("Server.js is listening to port 4000"));
