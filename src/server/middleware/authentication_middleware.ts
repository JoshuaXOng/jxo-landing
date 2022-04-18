'use strict'

import { NextFunction, Request, Response } from 'express'
import { parseAuthHeader } from '../services/headers_service'
import { AcceptedAuthMethods } from '../services/authentication_service'
import { checkJwtFormat, verifyJwt } from '../services/cryptography_service'
import { JwtPayload } from 'jsonwebtoken'
import { NotImplementedError, UnauthorizedError } from '../server_errors'

function processAuthHeader (req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization
  if (!header) {
    return next()
  }

  const { method, value } = parseAuthHeader(header)
  if (!(method in AcceptedAuthMethods)) return next()

  switch (method) {
    case AcceptedAuthMethods.Bearer:

      if (!checkJwtFormat(value)) return next()

      let jwtData: string | JwtPayload
      try { jwtData = verifyJwt(value) } catch { return next() }
      res.locals = { ...res.locals, jwtData: jwtData }
      return next()

    default: return next()
  }
}

function ensureReqHasAuthAndProcess (req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization
  if (!header) next(new UnauthorizedError('No authorization has been provided.'))

  const { method, value } = parseAuthHeader(header)
  if (!(method in AcceptedAuthMethods)) next(new UnauthorizedError('Authorization method is not supported.'))

  switch (method) {
    case AcceptedAuthMethods.Bearer:

      if (!checkJwtFormat(value)) next(new UnauthorizedError('Token is not in valid jwt format.'))

      let jwtData: string | JwtPayload
      try { jwtData = verifyJwt(value) } catch { next(new UnauthorizedError('Jwt token cannot be verified.')) }
      res.locals = { ...res.locals, jwtData: jwtData }
      next()

      break

    default: next(new NotImplementedError('Authorization method is not yet implemented.'))
  }
}

/**
 * Some bootleg code to experiment with the concept of middleware.
 */
function blAuthenticator (req: Request, res: Response, next: NextFunction) {
  if (Math.random() >= 0.5) next()
  else res.status(401).json({ message: 'You are not authorized for this resource.' })
}

export { processAuthHeader, ensureReqHasAuthAndProcess, blAuthenticator }
