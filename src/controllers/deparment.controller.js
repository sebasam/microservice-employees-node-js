const AppError = require('../errors/appErrors')
const { Departamento } = require('./../models')

const createDepartment = async(req, res, next) => {
    const { nombre, presupuesto } = req.body
    try {
        const department = await Departamento.create({
            nombre: nombre,
            presupuesto: presupuesto
        })
        if(!department) return new AppError('Ups, this deparment is already exist!', 400, 'Field Department Error')
        return res.status(201).json({
            msg: 'Department created successfully',
            codigo: department.id,
            nombre: `${department.nombre}`
        })
    } catch (error) {
        next(error)
    }
}

const getDepartments = async(req, res, next) => {
    try {
        const list = await Departamento.findAll()
        return res.status(200).json({
            msg: 'Departments',
            list
        })
    } catch (error) {
        next(error)
    }
}

const deleteDepartment = async(req, res, next) => {
    const { id } = req.params
    try {
        const deleted = await Departamento.destroy({ where: { id } })
        if(!deleted) return res.status(404).json({
            msg: 'Not found any department'
        })
        return res.status(200).json({
            msg: 'department has been deleted!'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createDepartment,
    getDepartments,
    deleteDepartment
}