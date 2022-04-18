/**
 * This file contains database controllers' interfaces.
 */
'use strict'

import { User, Note } from './models'

interface searchUserParameters {
    id?: string
    username?: string
    email?: string
}

interface updateableUserParameters {
    id?: string
    username?: string
    email?: string
    password?: string
}

/**
 * An interface for declaring the signatures of database interactions.
 */
interface DatabaseController {
    createUser(id: string, username: string, email: string, password?: string): Promise<Boolean>;
    readUser(searchParameters: searchUserParameters): Promise<User>;
    updateUser(user: User, updateParamters: updateableUserParameters): Promise<Boolean>;
    deleteUser(id: string): Promise<Boolean>;
}

interface NotesDatabaseController {
    createNote(id: string, body: string): Promise<Boolean>;
    readNote(id: string): Promise<Note>;
    updateNote(id: string, body: string): Promise<Boolean>;
    deleteNote(id: string): Promise<Boolean>;
}

export {
  searchUserParameters, updateableUserParameters, DatabaseController,
  NotesDatabaseController
}
