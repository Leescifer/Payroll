const Payroll = require('../model/payroll.model');
const Employee = require('../model/payroll.model');


exports.generate = async (req, res) => {
    try {
        const {
            employeeId, month
        } = req.body;
        const employee = await Employee.findById(employeeId);

        if (!employee) {
            return res.status(404).json({
                error: 'Employee not found'
            });
        }

        const grossSalary = employee.baseSalary + employee.allowances;
        const deductions = employee.deductions;
        const netSalary = employee.netSalary;

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

    }
}