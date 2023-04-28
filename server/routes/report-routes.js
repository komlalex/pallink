 const express = require("express");
 const router = express.Router();
const {makeReport} = require("../controllers/report-controllers")

router.post("/add", makeReport);







 module.exports = router;