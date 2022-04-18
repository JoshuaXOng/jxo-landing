'use strict'

import * as crypto from 'crypto'
import jwt from 'jsonwebtoken'
import fs from 'fs'

const PUB_KEY = fs.readFileSync('./id_rsa_pub.pem')
const PRIV_KEY = fs.readFileSync('./id_rsa_priv.pem')

function generateHash (input: string): string[] {
  const salt = crypto.randomBytes(32).toString('hex')
  const hash_ = crypto.pbkdf2Sync(input, salt, 10000, 64, 'sha512').toString('hex')
  return [hash_, salt]
}

function validateHash (input: string, salt: string, hash: string): boolean {
  const hash_ = crypto.pbkdf2Sync(input, salt, 10000, 64, 'sha512').toString('hex')
  return hash_ === hash
}

function verifyJwt (jwt_: string) {
  return jwt.verify(jwt_, PUB_KEY, { algorithms: ['RS256'] })
}

function generateJwt (userId: string): string {
  return jwt.sign({ userId: userId }, PRIV_KEY, { algorithm: 'RS256' })
}

function checkJwtFormat (jwt_: string) {
  return jwt_.match(/^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)/) !== null
}

export {
  generateHash, validateHash,
  generateJwt, verifyJwt, checkJwtFormat
}
