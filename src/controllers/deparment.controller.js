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

module.exports = {
    createDepartment
}