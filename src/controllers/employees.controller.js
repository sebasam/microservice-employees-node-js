const { Empleado, Departamento } = require('./../models')


const createEmployee = async(req, res, next) => {
    const { nif, nombre, apellido1, apellido2, codigo_departamento } = req.body
    try {
        const department = await Departamento.findByPk(codigo_departamento)
        console.log(department + "holaaaaaa")
        if(department === null) return res.status(400).json({
            msg: 'Department doesnt exist!'
        })
        const employee = await Empleado.create({
            nif: nif,
            nombre: nombre,
            apellido1: apellido1,
            apellido2: apellido2,
            codigo_departamento: codigo_departamento
        })
        if(!employee) return res.status(400).json({
            msg: 'Worker is already exist!'
        })
        let name = `${ employee.nombre } ${ employee.apellido1 } ${ employee.apellido2 !== null ? employee.apellido2 : '' }`
        return res.status(201).json({
            msg: 'New worker created!',
            codigo: employee.id,
            nombre_completo: name.trim(),
            codigo_departamento: codigo_departamento
        })
    } catch (error) {
        next(error)
    }
}

const getEmployees = async(req, res, next) => {
    try {
        const list = await Empleado.findAll()
        return res.status(200).json({
            msg: 'Our Workers',
            list
        })
    } catch (error) {
        next(error)
    }
}

const getEmployeesById = async(req, res, next) => {
    const id = req.params.id
    try {
        const worker = await Empleado.findOne({ where: { id: id } })
        if(worker === null) return res.status(404).json({
            msg: 'This ID doesnt belong to any worker'
        })
        let name = `${ worker.nombre } ${ worker.apellido1 } ${ worker.apellido2 !== null ? worker.apellido2 : '' }`
        return res.status(200).json({
            codigo: worker.id,
            nif: worker.nif,
            nombre: name.trim(),
            codigo_departamento: worker.codigo_departamento

        })
    } catch (error) {
        next(error)
    }
}

const deleteEmployee = async(req, res, next) => {
    const { id } = req.params
    try {
        const deleted = await Empleado.destroy({ where: { id } })
        if(!deleted) return res.status(404).json({
            msg: 'Not found any worker'
        })
        return res.status(200).json({
            msg: 'worker has been deleted!'
        })
    } catch (error) {
        next(error)
    }
}

const updateEmployee = async(req, res, next) => {
    const { id } = req.params
    const { nif, codigo_departamento } = req.body
    try {
        if(nif === null && codigo_departamento === null) return res.status(404).json({
            msg: 'There arent any content to update'
        })
        const update = await Empleado.update({
            nif: nif,
            codigo_departamento: codigo_departamento
        },
        {
            where: {
                id
            }
        }
        )
        if(update != 0) return res.status(200).json({
            msg: 'Worker updated!'
        })
        return res.status(404).json({
            msg: 'There arent any worker to update'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createEmployee,
    getEmployees,
    getEmployeesById,
    deleteEmployee,
    updateEmployee
}