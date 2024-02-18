const express = require("express");
const {createTiming,getTimings} = require("../controller/Timings");
const router = express.Router();


router.post('/create', createTiming);
router.post("/fetch",getTimings);


module.exports = router;