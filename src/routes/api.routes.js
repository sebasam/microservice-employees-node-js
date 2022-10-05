const express = require('express')
const router = express.Router()
const employee = require('./employee.routes')
const department = require('./department.routes')

router.use('/employees', employee)
router.use('/departments', department)

module.exports = router