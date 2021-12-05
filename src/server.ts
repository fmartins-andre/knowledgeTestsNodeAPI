import dotenv from 'dotenv'
import http from 'http'
import path from 'path'

import app from './app'

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

const port = process.env.SERVER_PORT

http.createServer(app).listen(port, () => {
  console.log(`Server started on port ${port}!`)
})
