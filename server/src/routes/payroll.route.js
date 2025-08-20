const express = require("express");
const router = express.Router();
const payrollController = require("../controller/payroll.controller");

router.post("/generate", payrollController.generate);
router.get("/", payrollController.index);
router.put("/:id/pay", payrollController.markAsPaid);

module.exports = router;