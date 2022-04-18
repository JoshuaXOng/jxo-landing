'use strict'

function parseAuthHeader (header: string) {
  const [method, value] = header.split(' ')
  return {
    method: method,
    value: value
  }
}

export { parseAuthHeader }
