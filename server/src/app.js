const express = require('express');
const cors = require('cors');
const EmployeeRouter = require('./routes/employee.route')
const PayrollRouter = require('./routes/payroll.route')
const connectDB = require('./config/db.config')

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/api/employee', EmployeeRouter);
app.use('/api/payroll', PayrollRouter);

app.get('/', (req, res) => {
    res.send('Hello World')
})

module.exports = app;