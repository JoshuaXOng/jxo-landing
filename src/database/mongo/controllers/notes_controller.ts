'use strict'

import { Collection } from 'mongodb'
import { Note } from '../../models'

class MongoDBNotesController {
    _notesCollection: Collection;

    constructor (notesCollection: Collection) {
      this._notesCollection = notesCollection
    }

    async createOne (id: string, body: string): Promise<boolean> {
      const note = Note.createNoteId(id, body)
      return (await this._notesCollection.insertOne(note)).acknowledged
    }

    async readAll (): Promise<Array<Note>> {
      const cursor = this._notesCollection.find()
      return cursor.toArray()
    }

    async readById (id: string): Promise<Note> {
      const note = await this._notesCollection.findOne({ id: id })
      return Note.createNoteId(note.id, note.body)
    }

    async updateById (id: string, body: string): Promise<boolean> {
      const updateResult = await this._notesCollection.updateOne({ id: id }, { $set: Note.createNoteId(id, body) })
      return updateResult.acknowledged
    }

    async deleteById (id: string): Promise<boolean> {
      const deleteResult = await this._notesCollection.deleteOne({ id: id })
      return deleteResult.acknowledged
    }
}

export default MongoDBNotesController
