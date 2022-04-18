'use strict'

import { Request, Response } from 'express'
import UsersService from '../services/users_service'

async function ensureUserExistsByUsernameOrEmail (req: Request, res: Response, next: any) {
  const username = req.body.username
  const email = req.body.email

  if (username === undefined || email == undefined) { res.status(400).json({ msg: 'Middleware has ended request chain as either username or email is undefined.' }) }

  const usersService = await UsersService.initProduction()

  const fieldsTaken = []
  if (await usersService.isUsernameTaken(username)) fieldsTaken.push('username')
  if (await usersService.isEmailTaken(email)) fieldsTaken.push('email')
  if (fieldsTaken.length === 0) { res.status(400).json({ msg: 'Middleware has ended request chain as there is no user that matches either of the provided username and email.' }) } else next()
}

async function ensureUserExistsByEmail (req: Request, res: Response, next: any) {
  const email = req.body.email

  if (email == undefined) { res.status(400).json({ msg: 'Middleware has ended request chain as email is undefined.' }) }

  const usersService = await UsersService.initProduction()

  if (!(await usersService.isEmailTaken(email))) { res.status(400).json({ msg: 'Middleware has ended request chain as there is no user that matches the provided email.' }) } else next()
}

export { ensureUserExistsByUsernameOrEmail, ensureUserExistsByEmail }
