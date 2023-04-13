const app = require("./app");
const mongoose = require("mongoose");
const { PORT, DB } = require("./constants.js");

//TODO
// mongoose
//   .connect(DB)
//   .then(() => console.log("Database connection successful"))
//   .catch((err) => console.log("Database connection failed", err));

app.listen(PORT, () => console.log(`App running on port ${PORT}...`));
