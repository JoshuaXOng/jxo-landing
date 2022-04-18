'use strict'

import { ObjectId, Collection } from 'mongodb'
import { User } from '../../models'

class MongoDBUsersController {
    _usersCollection: Collection;

    constructor (usersCollection: Collection) {
      this._usersCollection = usersCollection
    }

    async _getByField (field: string, value: string): Promise<User> {
      if (typeof value !== 'string') throw new Error('Field value cannot be a non-string.')
      const user = await this._usersCollection.findOne({ [field]: value }) as User
      return user
    }

    async getByUsername (username: string): Promise<User> {
      return this._getByField('username', username)
    }

    async getById (id: string): Promise<User> {
      return this._getByField('id', id)
    }

    async getByEmail (email: string): Promise<User> {
      return this._getByField('email', email)
    }

    async addOne (user: User): Promise<boolean> {
      const insertResult = await this._usersCollection.insertOne(user)
      return insertResult.acknowledged
    }

    async updateById (id: string, user: User): Promise<boolean> {
      const modifyResult = await this._usersCollection.findOneAndUpdate({ id: id }, { $set: user })
      return Boolean(modifyResult.ok)
    }

    async deleteAll () {
      return await this._usersCollection.deleteMany({})
    }
}

export default MongoDBUsersController
