const Payroll = require("../models/Payroll");
const Employee = require("../models/Employee");

// Generate Payroll for an Employee
exports.generatePayroll = async (req, res) => {
    try {
        const { employeeId, month } = req.body;
        const employee = await Employee.findById(employeeId);

        if (!employee) return res.status(404).json({ error: "Employee not found" });

        const grossSalary = employee.baseSalary + employee.allowances;
        const deductions = employee.deductions;
        const netSalary = grossSalary - deductions;

        const payroll = await Payroll.create({
            employee: employee._id,
            month,
            grossSalary,
            deductions,
            netSalary
        });

        res.status(201).json(payroll);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get Payroll Records
exports.getPayrolls = async (req, res) => {
    try {
        const payrolls = await Payroll.find().populate("employee");
        res.json(payrolls);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mark Payroll as Paid
exports.markAsPaid = async (req, res) => {
    try {
        const payroll = await Payroll.findByIdAndUpdate(req.params.id, { paid: true }, { new: true });
        res.json(payroll);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
