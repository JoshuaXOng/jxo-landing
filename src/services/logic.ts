/**
 * This file contains code that interacts with APIs.
 */
'use strict'

import { JXO_NOTE_API } from './helper'
import { Note } from '../database/models'

function postNote (id: string, body: string): Promise<Boolean> {
  const url = JXO_NOTE_API.postNoteUrl()

  const result: Promise<boolean> = fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({ id: id, body: body })
  })
    .then(response => response.ok)

  return result
}

function getAllNotes (): Promise<Array<Note>> {
  const url = JXO_NOTE_API.getAllNotesUrl()

  const result: Promise<Array<Note>> = fetch(url)
    .then(response => response.json())
    .then(notes => {
      return notes.map((note: any) => Note.createNoteId(note.id, note.body))
    })

  return result
}

function getNote (id: string): Promise<Note> {
  const url = JXO_NOTE_API.getNoteUrl(id)

  const result: Promise<Note> = fetch(url)
    .then(response => response.json())
    .then(note => {
      return Note.createNoteId(note.id, note.body)
    })

  return result
}

function putNote (id: string, body: string): Promise<boolean> {
  const url = JXO_NOTE_API.putNoteUrl(id)

  const result: Promise<boolean> = fetch(url, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({ body: body })
  })
    .then(response => response.ok)

  return result
}

function deleteNote (id: string): Promise<boolean> {
  const url = JXO_NOTE_API.deleteNoteUrl(id)

  const result: Promise<boolean> = fetch(url, { method: 'DELETE' })
    .then(response => response.ok)

  return result
}

export { postNote, getAllNotes, getNote, putNote, deleteNote }
