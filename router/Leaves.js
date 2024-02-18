const express = require("express");
const {createLeave,getLeaves} = require("../controller/Leaves");
const router = express.Router();


router.post('/create', createLeave);
router.get("/fetch",getLeaves);



module.exports = router;