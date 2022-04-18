'use strict'

import express, { Request, Response, NextFunction } from 'express'
import { Note } from '../../database/models'
import { MongoControllersManager } from '../../database/mongo/mongodb_utils'
import { BadRequestError, InternalServerErrorError } from '../server_errors'

async function getNotes (req: Request, res: Response) {
  const notes = await (await MongoControllersManager.getProduction()).notes.readAll()
  return res.json(notes)
}

async function getNote (req: Request, res: Response, next: NextFunction) {
  const id = req.params.id

  let note: Note
  try { note = await (await MongoControllersManager.getProduction()).notes.readById(id) } catch (error) { return next(new InternalServerErrorError('Something went wrong with the server.')) }

  return res.json(note)
}

async function createNote (req: Request, res: Response, next: NextFunction) {
  const id = req.body.id
  const body = req.body.body

  let isSuccessful: boolean
  try { isSuccessful = await (await MongoControllersManager.getProduction()).notes.createOne(id, body) } catch (error) { return next(new BadRequestError('Note data is invalid.')) }

  if (!isSuccessful) return next(new InternalServerErrorError('Something went wrong with the server.'))
  else res.json({ msg: 'Note has been created.' })
}

async function updateNote (req: Request, res: Response, next: NextFunction) {
  const id = req.params.id
  const body = req.body.body

  let isSuccessful: boolean
  try { isSuccessful = await (await MongoControllersManager.getProduction()).notes.updateById(id, body) } catch (error) { return next(new InternalServerErrorError('Something went wrong with the server.')) }

  if (!isSuccessful) return next(new InternalServerErrorError('Something went wrong with the server.'))
  else res.json({ msg: 'Note has been created.' })
}

async function deleteNote (req: Request, res: Response, next: NextFunction) {
  const id = req.params.id

  const isSuccessful = await (await MongoControllersManager.getProduction()).notes.deleteById(id)

  if (!isSuccessful) return next(new InternalServerErrorError('Something went wrong with the server.'))
  else res.json({ msg: 'Note has been deleted.' })
}

const noteRouter = express.Router()
noteRouter.get('/api/v0/notes', getNotes)
noteRouter.get('/api/v0/notes/:id', getNote)
noteRouter.post('/api/v0/notes', createNote)
noteRouter.put('/api/v0/notes/:id', updateNote)
noteRouter.delete('/api/v0/notes/:id', deleteNote)

export default noteRouter
