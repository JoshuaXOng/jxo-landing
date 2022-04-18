/**
 * This file contains code that is to facilicate the implementation of API interactions.
 */
'use strict'

const JXO_NOTE_API = {
  postNoteUrl (): string {
    return `http://localhost:8080/api/v0/note`
  },
  getAllNotesUrl (): string {
    return `http://localhost:8080/api/v0/note/all`
  },
  getNoteUrl (id: string): string {
    return `http://localhost:8080/api/v0/note/${id}`
  },
  putNoteUrl (id: string): string {
    return `http://localhost:8080/api/v0/note/${id}`
  },
  deleteNoteUrl (id: string): string {
    return `http://localhost:8080/api/v0/note/${id}`
  }
}

export { JXO_NOTE_API }
