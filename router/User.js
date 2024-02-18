const express = require("express");
const {signup,signIn} = require("../controller/User");
const router = express.Router();


router.post('/signup', signup);
router.post("/login",signIn);


module.exports = router;