/**
 * This file contains implementations of errors.
 */
'use strict'

class ValueError extends Error {
  constructor (msg?: string) {
    super(msg)
  }
}

export { ValueError }
