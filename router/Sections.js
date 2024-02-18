const express = require("express");
const {createSections,getSections} = require("../controller/Sections");
const router = express.Router();


router.post('/create', createSections);
router.get("/fetch",getSections);


module.exports = router;