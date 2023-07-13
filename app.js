const http = require("http");
const express = require("express");
const path = require("path");
const app = express();
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const bodyParser = require("body-parser");
const contactRouter = require("./routes/contactus");
const controller = require("./controllers/controller");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRouter);
app.use(shopRouter);
app.use(contactRouter);
app.use("/success", (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, "Views", "success.html"));
});
app.use(controller.getStatusController);
/* const server = http.createServer(app);
server.listen(3000); */
app.listen(3000);
