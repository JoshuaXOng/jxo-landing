'use strict'

import express, { NextFunction, Request, Response } from 'express'
import { User } from '../../database/models'
import { BadRequestError, InternalServerErrorError, NotImplementedError } from '../server_errors'
import { generateHash, generateJwt } from '../services/cryptography_service'
import UsersService from '../services/users_service'

async function getUsersJwt (req: Request, res: Response, next: NextFunction) {
  const email = req.body.email
  const password = req.body.password

  const usersService = await UsersService.initProduction()
  let jwt: string
  try { jwt = await usersService.getJwt(email, password) } catch (error) {
    return next(new BadRequestError('Email or password is incorrect.'))
  }

  return res.send(jwt)
}

async function registerUser (req: Request, res: Response, next: NextFunction) {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password

  const emptyFields = _listEmptyFields(username, email, password)
  if (emptyFields.length !== 0) {
    return next(new BadRequestError(`The following fields are and cannot be undefined: ${emptyFields}`))
  }

  const [passwordHashed, salt] = generateHash(password)
  let user: User
  try { user = new User(undefined, username, email, passwordHashed, salt) } catch (error) {
    return next(new BadRequestError('The provided User data is invalid.'))
  }

  const usersService = await UsersService.initProduction()
  let isSuccessful
  try { isSuccessful = await usersService.register(user) } catch (error) {
    return next(new BadRequestError('The provided User data is already taken.'))
  }

  if (isSuccessful) return res.json({ msg: 'User was created.', jwt: generateJwt(user.id) })
  else return next(new InternalServerErrorError('Something went wrong with the server.'))
}

function _listEmptyFields (username: string, email: string, password: string) {
  const emptyFields = []
  if (!username) emptyFields.push('username')
  if (!email) emptyFields.push('email')
  if (!password) emptyFields.push('password')
  return emptyFields
}

async function updateUser (req: Request, res: Response, next: NextFunction) {
  return next(new NotImplementedError('Update User functionality is not yet implemented.'))
}

async function deleteUser (req: Request, res: Response, next: NextFunction) {
  return next(new NotImplementedError('Delete User functionality is not yet implemented.'))
}

const userRouter = express.Router()
userRouter.get('/api/v0/users/jwt', getUsersJwt)
userRouter.post('/api/v0/users', registerUser)
userRouter.put('/api/v0/users', updateUser)
userRouter.delete('/api/v0/users', deleteUser)

export default userRouter
