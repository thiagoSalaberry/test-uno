"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 2000;
app.use(express.json());
app.get("/", function (req, res) {
    res.json("Corriendo gracias al comando start");
});
app.listen(port, function () {
    console.log("Server running on http://localhost:".concat(port));
});
