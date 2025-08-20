const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [
            true,
            'Full Name is reuired'
        ]
    },
    baseSalary: {
        type: Number,
        required: [
            true,
            'Base Salary is reuired'

        ]
    },
    deductions: {
        type: Number,
        required: [
            true,
            'Deductions is required'
        ]
    }
}, {
    timestamps: true
});

modulde.exports = mongoose.model("Employee", EmployeeSchema)
