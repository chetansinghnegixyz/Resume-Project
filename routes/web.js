import express from 'express'
const router = express.Router()
import { homeController } from '../controllers/homeController.js'
import { servicesController } from '../controllers/servicesController.js'
import { skillsController } from '../controllers/skillsController.js'
import { contactController } from '../controllers/contactController.js'

router.get('/', homeController)
router.get('/services', servicesController)
router.get('/skills', skillsController)
router.get('/contact', contactController)

export default router