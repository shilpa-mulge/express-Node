const http = require("http");

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const login = require("./chatapp/login");
const msg = require("./chatapp/msg");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(login);
app.use(msg);

app.listen(3000);
