const mongoose = require('mongoose');

const PayrollSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    month: {
        type: String,
        required: true
    },
    netIncome: {
        type: Number,
        required: true
    },
    grossSalary: {
        type: Number,
        required: true
    },
    deductions: {
        type: Number,
        default: 0
    },
    netSalary: {
        type: Number,
        required: true
    },
    paid: {
        type: Boolean,
        default: false
    },


}, { timestamps: true });

module.exports = mongoose.model("Payroll", PayrollSchema);