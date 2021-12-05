import express, { Application } from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

const port = process.env.SERVER_PORT

const app: Application = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
  response.send({
    message: 'Hello world'
  })
})

app.listen(port, () => {
  console.log('Express started on port ' + port)
})
