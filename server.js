const express = require("express");
const https = require("https");
const fs = require("fs");

const app = express();
app.use(express.static(__dirname));

const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
};

https.createServer(options, app).listen(3000, () => {
    console.log("Servidor HTTPS en https://localhost:3000");
});
