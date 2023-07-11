const http = require("http");
const express = require("express");
const app = express();
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRouter);
app.use("/shop", shopRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>page not Found</h1>");
});
/* const server = http.createServer(app);
server.listen(3000); */
app.listen(3000);
