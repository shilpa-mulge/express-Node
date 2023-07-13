const express = require("express");

const router = express.Router();
const path = require("path");
router.get("/contactUs", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "Views", "contactus.html"));
});

router.post("/contactUs", (req, res, next) => {
  res.redirect("/success");
});
module.exports = router;
