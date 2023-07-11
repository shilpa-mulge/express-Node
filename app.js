const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/add-pro", (req, res, next) => {
  console.log("The add product page!");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title' placeholder='product name'><input type='number' name='size' placeholder='product size'><button type='submit'>add pro</button></form>"
  );
});
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  console.log("in the another middleware!");
  res.send("<h1>Hello from express!</h1>");
});
/* const server = http.createServer(app);
server.listen(3000); */
app.listen(3000);
