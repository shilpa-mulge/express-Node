const express = require("express");

const router = express.Router();
const controller = require("../controllers/controller");
router.get("/contactUs", controller.getContactController);

router.post("/contactUs", controller.postContactController);
module.exports = router;
