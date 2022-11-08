import { Router } from 'express'

import { 
    getEmployees,
    getEmployee,
    createEmployees, 
    updateEmployees, 
    deleteEmployees 
} from '../controllers/employees.controller.js'


const router = Router()

router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)
router.post('/employees', createEmployees)
router.patch('/employees/:id', updateEmployees)
// put ES PARA CAMBIAR TODO Y patch ES PARCIALMENTE, MEJOR DICHO ALGUNOS CAMPOS
router.delete('/employees/:id', deleteEmployees)

export default router