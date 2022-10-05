const { body } = require('express-validator')

const departments = [
    body('nombre', 'The name cannot be empty and must be a string').isString({ min: 4 }).notEmpty().trim(),
    body('presupuesto', 'Budget cannot be empty and must be type double').isNumeric().notEmpty().escape()
]

const employees = [
    body('nif', 'NIF is unique value and it must be a string').isString({ min: 4 }).trim().notEmpty(),
    body('nombre', 'The name cannot be empty and must be a string').isString({ min: 5 }).trim().notEmpty(),
    body('apellido1', 'The lastname1 cannot be empty and it must be a string').isString({ min: 5 }).trim().notEmpty(),
    body('apellido2', 'The lastname2 must be a string').isString({ min: 5 }).trim().optional(),
    body('codigo_departamento', 'Code department must be a number and it cannot be empty').isNumeric().notEmpty().escape()
]

const myUpdate = [
    body('nif', 'NIF is unique value and it must be a string').isString({ min: 4 }).trim().optional(),
    body('codigo_departamento', 'Code department must be a number and it cannot be empty').isNumeric().optional().escape()
]
module.exports = {
    departments,
    employees,
    myUpdate
}