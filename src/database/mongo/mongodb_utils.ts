'use strict'

import { MONGO_CREDENTIALS, DATABASES, MongoDBDatabases, MongoDBCollections, COLLECTIONS } from './mongodb_config'
import MongoController from './controllers/main_controller'
import { MongoClient } from 'mongodb'

class _MongoDatabasesFactory {
  static async initDatabases (client: MongoClient): Promise<MongoDBDatabases> {
    return {
      primary: await client.db(DATABASES.PRIMARY),
      staging: await client.db(DATABASES.STAGING)
    }
  }
}

class _MongoCollectionsFactory {
  static async initCollections (databases: MongoDBDatabases): Promise<MongoDBCollections> {
    return {
      primary: {
        notes: await databases.primary.collection(COLLECTIONS.PRIMARY.NOTES),
        users: await databases.primary.collection(COLLECTIONS.PRIMARY.USERS)
      },
      staging: {
        notes: await databases.staging.collection(COLLECTIONS.STAGING.NOTES),
        users: await databases.staging.collection(COLLECTIONS.STAGING.USERS)
      }
    }
  }
}

// TODO: Solve the scoping issue with global.d.ts.
declare global {
    interface MongoControllerOptions {
        isStaging: boolean
    }
}

class _MongoControllerFactory {
  static async initMongoController (options?: MongoControllerOptions) {
    const client = await MongoClient.connect(MONGO_CREDENTIALS.URL)
    const databases = await _MongoDatabasesFactory.initDatabases(client)
    const collections = await _MongoCollectionsFactory.initCollections(databases)
    return new MongoController(client, databases, collections, options)
  }
}

class MongoControllersManager {
    static _production: MongoController;
    static _staging: MongoController;

    static async getProduction () {
      if (MongoControllersManager._production === undefined) { MongoControllersManager._production = await _MongoControllerFactory.initMongoController() }
      return MongoControllersManager._production
    }

    static async getStaging () {
      if (MongoControllersManager._staging === undefined) { MongoControllersManager._staging = await _MongoControllerFactory.initMongoController({ isStaging: true }) }
      return MongoControllersManager._staging
    }
}

export { MongoControllersManager }
