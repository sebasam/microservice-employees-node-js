const express = require('express')
const router = express.Router()
const { validateFields } = require('./../middlewares/validationResult')
const { createDepartment } = require('./../controllers/deparment.controller')
const { departments } = require('./../middlewares/validationBody')

router.post('/', departments, validateFields, createDepartment)

module.exports = router