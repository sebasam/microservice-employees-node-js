const express = require('express')
const router = express.Router()
const { createEmployee, getEmployees, getEmployeesById, deleteEmployee, updateEmployee } = require('./../controllers/employees.controller')
const { validateFields } = require('./../middlewares/validationResult')
const { employees, myUpdate } = require('./../middlewares/validationBody')

router.post('/', employees, validateFields, createEmployee)

router.get('/', getEmployees)

router.get('/:id', getEmployeesById)

router.delete('/delete/:id', deleteEmployee)

router.put('/update/:id', myUpdate, validateFields, updateEmployee)

module.exports = router