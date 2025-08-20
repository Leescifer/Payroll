const Payroll = require('../model/payroll.model');
const Employee = require('../model/employee.model');

// Generate payroll
exports.generate = async (req, res) => {
    try {
        const { employeeId, month } = req.body;

        const employee = await Employee.findById(employeeId);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        const grossSalary = employee.baseSalary;
        const deductions = employee.deductions;
        const netSalary = grossSalary - deductions;

        const payroll = await Payroll.create({
            employee: employee._id,
            month,
            grossSalary,
            deductions,
            netSalary
        });

        res.status(201).json({
            status: 'Success',
            data: payroll
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'Internal Server Error',
            message: error.message
        });
    }
};

// List all payrolls
exports.index = async (req, res) => {
    try {
        const payrolls = await Payroll.find().populate("employee");
        res.status(200).json({
            status: 'Success',
            data: payrolls
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'Internal Server Error',
            message: error.message
        });
    }
};

// Mark payroll as paid
exports.markAsPaid = async (req, res) => {
    try {
        const payroll = await Payroll.findByIdAndUpdate(
            req.params.id,
            { paid: true },
            { new: true }
        );

        if (!payroll) {
            return res.status(404).json({ error: 'Payroll not found' });
        }

        res.status(200).json({
            status: 'Success',
            data: payroll
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'Internal Server Error',
            message: error.message
        });
    }
};
