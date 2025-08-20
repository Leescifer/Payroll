const Employee = require('../model/payroll.model');

exports.index = async (req, res) => {
    try {
        const employees = await Employee.find();

        res.status(200).json({
            status: "Success",
            data: employees
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "Internal Server Error",
            message: error.message
        });
    }
}

exports.show = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            res.status(404).json({
                error: 'Employee not found'
            });
        }

        res.status(200).json({
            status: 'Success',
            data: employee
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "Internal Server Error",
            message: error.message
        });
    }
}

exports.store = async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        const savedEmployee = await newEmployee.save();

        res.status(201).json({
            status: 'Success',
            data: savedEmployee
        });

    } catch (error) {

        console.error(error);
        res.status(500).json({
            status: "Internal Server Error",
            message: error.message
        });

    }
}

exports.update = async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedEmployee) {
            res.status(404).json({
                message: 'Employee not found'
            });
        }

        res.status(201).json({
            status: 'Employee updated successfully',
            data: updatedEmployee
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "Internal Server Error",
            message: error.message
        });
    }
}

exports.destroy = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) {
            return res.status(404).json({
                message: 'Task not found'
            });
        };

        res.status(200).json({
            message: 'Task deleted successfully',
            data: deletedEmployee
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}