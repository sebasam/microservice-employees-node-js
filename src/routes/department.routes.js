const express = require('express')
const router = express.Router()
const { validateFields } = require('./../middlewares/validationResult')
const { createDepartment, deleteDepartment, getDepartments } = require('./../controllers/deparment.controller')
const { departments } = require('./../middlewares/validationBody')

router.post('/', departments, validateFields, createDepartment)

router.get('/', getDepartments)

router.delete('/:id', deleteDepartment)

module.exports = router