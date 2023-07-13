const express = require("express");
const router = express.Router();
const fs = require("fs");
router.get("/", (req, res, next) => {
  fs.readFile("./msg.txt", (err, data) => {
    if (err) {
      data = "No such data";
    }
    res.send(
      `${data}<form onsubmit="document.getElementById('user').value=localStorage.getItem('username')"  action="/" method="POST"><input type="text" id="msg" name="message"><input type="hidden" id="user" name="username"><button type="submit">send</button></form>`
    );
  });
});

router.post("/", (req, res, next) => {
  fs.writeFile(
    "msg.txt",
    `${req.body.username} : ${req.body.message}`,
    { flag: "a" },
    (err) => (err ? console.log(err) : res.redirect("/"))
  );
});

module.exports = router;
