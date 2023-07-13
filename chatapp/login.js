const express = require("express");
const router = express.Router();
router.get("/login", (req, res, next) => {
  res.send(
    `<form  action="/login-page" onsubmit="localStorage.setItem('username', document.getElementById('username').value)" method="POST"> <input id="username" type="text" name="username"> <button type="submit">login</button></form>`
  );
});

router.post("/login-page", (req, res, next) => {
  res.redirect("/");
});
module.exports = router;
