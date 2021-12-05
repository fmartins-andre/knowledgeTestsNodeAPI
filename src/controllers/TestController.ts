import { Request, Response } from 'express'

const rootRoute = (request: Request, response: Response): void => {
  response.status(200).json({
    message: 'Hello World!'
  })
}

const TestController = {
  rootRoute
}

export default TestController
