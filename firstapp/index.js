let express = require("express");

let app = express();

app.get("/", (req, res) => res.send("I am the server"));

app.listen(3000, () => console.log("Start listening"));