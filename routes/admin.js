const express = require("express");
const router = express.Router();

router.get("/add-pro", (req, res, next) => {
  console.log("The add product page!");
  res.send(
    "<form action='/admin/add-pro' method='POST'><input type='text' name='title' placeholder='product name'><input type='number' name='size' placeholder='product size'><button type='submit'>add pro</button></form>"
  );
});
router.post("/add-pro", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;
