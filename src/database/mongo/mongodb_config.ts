'use strict'

import { Collection, Db } from 'mongodb'
import { config } from 'dotenv'
import assert from 'assert'

if (process.env.NODE_ENV !== 'production') config()

const MONGO_CREDENTIALS = {
  PASSWORD: process.env.pwd,
  URL: process.env.MONGODB_CONNECTION_STRING || process.env.DEFAULT_MONGODB_CONNECTION_STRING
}
assert(MONGO_CREDENTIALS.URL !== undefined && MONGO_CREDENTIALS.URL !== null, 'MONGO_CREDENTIALS.URL must be assigned a string value.')

interface MongoDBDatabases {
    primary: Db
    staging: Db
}

interface MongoDBCollections {
    primary: {
        notes: Collection
        users: Collection
    },
    staging: {
        notes: Collection
        users: Collection
    }
}

/**
 * The names of the databases that are to be potentially used.
 */
const DATABASES = {
  PRIMARY: 'jxo-components-db0',
  STAGING: 'jxo-components-staging'
}

/**
 * The names of collections within any given database that is to be used.
 * Note:
 *  - First level of keys refer to the name of the database
 *  - Second level of keys refer to the collection name
 */
const COLLECTIONS = {
  PRIMARY: {
    NOTES: 'notes',
    USERS: 'users'
  },
  STAGING: {
    NOTES: 'notes',
    USERS: 'users'
  }
}

export {
  MONGO_CREDENTIALS,
  MongoDBDatabases, MongoDBCollections,
  DATABASES, COLLECTIONS
}
