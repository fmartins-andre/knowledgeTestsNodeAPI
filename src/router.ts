import { Router } from 'express'

import TestController from './controllers/TestController'
import keycloak from './keycloak'

const router = Router()

router.get('/', keycloak.protect('VIEWER'), TestController.rootRoute)

export default router
