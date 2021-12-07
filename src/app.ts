import express, { Application } from 'express'

import keycloak from './keycloak'
import router from './router'

const app: Application = express()

app.use(keycloak.middleware())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

export default app
