import { Router } from 'express'

import TestController from './controllers/TestController'

const router = Router()

router.get('/', TestController.rootRoute)

export default router