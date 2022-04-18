/**
 * This file contains the models that the system uses.
 */
'use strict'

import { v4 as uuidv4, validate } from 'uuid'
import { ValueError } from './database_errors'

interface Entity {
    id: string,
    username: string,
    email: string,
}

class User implements Entity {
    id: string;
    username: string;
    email: string;
    passwordHashed: string;
    salt: string;

    constructor (id: string, username: string, email: string, passwordHashed?: string, salt?: string) {
      this.id = id || uuidv4()
      this.username = username
      this.email = email
      this.passwordHashed = passwordHashed
      this.salt = salt

      const invalidFields = User.listInvalidFields({
        id: this.id,
        username: this.username,
        email: this.email,
        passwordHashed: this.passwordHashed,
        salt: this.salt
      })
      if (invalidFields.length !== 0) { throw new Error(`Cannot create User as the following fields are invalid: ${invalidFields}`) }
    }

    static listInvalidFields (user: User) {
      const fields = []
      if (!validate(user.id)) fields.push('id')
      if (user.username.trim() === '') fields.push('username')
      if (user.email.trim() === '') fields.push('email')
      return fields
    }

    static clone (user: User) {
      const invalidFields = User.listInvalidFields(user)
      if (invalidFields.length !== 0) throw new Error(`Cannot clone User as the following fields are invalid: ${invalidFields}`)
      return new User(user.id, user.username, user.email, user.passwordHashed, user.salt)
    }
}

class Note {
    id: string;
    body: string;

    private constructor (id: string, body: string) {
      this.id = id
      this.body = body
    }

    static createNoteId (id: string, body: string) {
      if (!validate(id)) {
        throw new ValueError('Attempted to create a note with id; the'.concat(
          ' id is not in a uuid format.'
        ))
      } else {
        return new Note(id, body)
      }
    }

    static createNote (body: string) {
      return new Note(uuidv4(), body)
    }
}

export { User, Note }
