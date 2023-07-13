const express = require("express");
const router = express.Router();
const path = require("path");
//const rootDir = require("../util/path");
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "Views", "add-product.html"));
  //res.sendFile(path.join(rootDir, "Views", "add-product.html"));
});
router.post("/add-product", (req, res, next) => {
  res.redirect("/");
});
module.exports = router;
