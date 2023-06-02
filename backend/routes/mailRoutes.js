const express = require("express");
const router = express.Router();

const { sendEmail } = require("../controllers/mailControllers");

router.post("/", sendEmail); // Change the route to "/"

module.exports = router;