const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full Name is required']
    },
    baseSalary: {
        type: Number,
        required: [true, 'Base Salary is required']
    },
    deductions: {
        type: Number,
        required: [true, 'Deductions are required']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Employee", EmployeeSchema);
