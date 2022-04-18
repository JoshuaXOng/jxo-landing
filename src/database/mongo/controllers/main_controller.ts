/**
 * TODO: Move this file under the server DIR.
 *
 * This file contains the implementation of a MongoDB controller.
 */
'use strict'

import dotenv from 'dotenv'
import { MongoClient } from 'mongodb'
import { MongoDBDatabases, MongoDBCollections } from '../mongodb_config'
import MongoDBNotesController from './notes_controller'
import MongoDBUsersController from './users_controller'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

class MongoController {
    _client: MongoClient;
    _databases: MongoDBDatabases;
    _collections: MongoDBCollections;

    notes: MongoDBNotesController;
    users: MongoDBUsersController;

    constructor (client: MongoClient, databases: MongoDBDatabases, collections: MongoDBCollections, options?: MongoControllerOptions) {
      this._initMongoConnections(client, databases, collections)

      if (options && options.isStaging) this._initSubControllersStaging()
      else this._initSubControllers()
    }

    _initMongoConnections (client: MongoClient, databases: MongoDBDatabases, collections: MongoDBCollections) {
      this._client = client
      this._databases = databases
      this._collections = collections
    }

    _initSubControllers () {
      this.notes = new MongoDBNotesController(this._collections.primary.notes)
      this.users = new MongoDBUsersController(this._collections.primary.users)
    }

    _initSubControllersStaging () {
      this.notes = new MongoDBNotesController(this._collections.staging.notes)
      this.users = new MongoDBUsersController(this._collections.staging.users)
    }
}

export default MongoController
