/**
 * This file contains a middleware that serves as a really basic errorhandler.
 */
'use strict'

import { Request, Response, NextFunction } from 'express'
import { ServerError } from '../server_errors'

function handleServerErrorsApis (error: Error, req: Request, res: Response, next: NextFunction) {
  if (error instanceof ServerError) {
    const httpCode = error.getCode()
    const message = error.message
    return res.status(httpCode).json({ msg: message })
  } else if (error) {
    console.log(error)
    return res.status(500).json({ msg: 'Something went wrong with the server.' })
  }
}

function handleServerErrorsStaticContent (error: Error, req: Request, res: Response, next: NextFunction) {

}

export { handleServerErrorsApis, handleServerErrorsStaticContent }
