const express = require("express");
const router = express.Router();

const { sendEmail } = require("../controllers/mailControllers");

router.post("/email", sendEmail);

module.exports = router;