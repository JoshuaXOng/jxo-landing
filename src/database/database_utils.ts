/**
 * This file contains miscellaneous signatures that relate to helping general database operations.
 */
'use strict'

import { ValueError } from './database_errors'

/**
 * Computes whether an entry is the last in the ordered container.
 *
 * @param entry     A pair of elements; first position being the index, second the value.
 * @param container The container which the entry belongs to.
 */
function isLastEntry (entry: [number, any], container: Array<any>): boolean {
  if (entry[0] === container.length - 1) {
    return true
  } else {
    return false
  }
}

/**
 * Returns a formatted string of keys and values based on association symbols
 * and delimiter symbols.
 *
 * Usages:
 *  - Formatting SQL statements
 *
 * @throws
 * @param keys      Identifiers.
 * @param values    Values associated with an identifier.
 * @param assoSymb  The symbol used to pair the keys and values.
 * @param delimSymb The symbol that is used to seperate the key-value pairs.
 */
function formatKVs (keys: Array<string>, values: Array<string>, assoSymb: string,
  delimSymb: string): string {
  if (keys.length !== values.length) { throw new ValueError('Key and value arrays lengths do not match.') }

  let result: string = ''

  for (const entry of keys.entries()) {
    const index: number = entry[0]
    const key: string = entry[1]
    const value: string = values[index]

    result = result.concat(key, assoSymb, value)

    if (!isLastEntry(entry, keys)) result = result.concat(delimSymb)
  }

  return result
}

export { isLastEntry, formatKVs }
