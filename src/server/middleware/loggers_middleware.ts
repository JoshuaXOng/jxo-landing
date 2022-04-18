/**
 * This file contains a middleware that serves as a really basic logger.
 */
'use strict'

import fs from 'fs'
import { Request, Response, NextFunction, Router } from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()

function logIpAddress (req: Request, res: Response, next: NextFunction) {
  const ip = req.header('x-forwarded-for') || req.connection.remoteAddress
  console.log(`Request from IP: ${ip}`)
  next()
}

const morganWrapper = Router();
morganWrapper.use(morgan('combined', {
  stream: fs.createWriteStream(process.env.SERVER_LOGGING_OUTPUT_PATH, { flags: 'a' })
}));

export { logIpAddress, morganWrapper }
