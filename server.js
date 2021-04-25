const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

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

app.get("/", (req, res) => res.send("hello sucker"));

app.get("/api/test", (req, res) => {
	res.json({ message: "Ducking message" });
});

require("./server/requests/data.request")(app);
require("./server/requests/account.request")(app);

app.listen(4000, () => console.log("Server.js is listening to port 4000"));
