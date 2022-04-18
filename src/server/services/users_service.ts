'use strict'

import { User } from '../../database/models'
import MongoDBUsersController from '../../database/mongo/controllers/users_controller'
import { MongoControllersManager } from '../../database/mongo/mongodb_utils'
import { generateJwt, validateHash } from './cryptography_service'
import assert from 'assert'

class UsersService {
    _userController: MongoDBUsersController;

    private constructor (userController: MongoDBUsersController) {
      this._userController = userController
    }

    static async initProduction () {
      return new UsersService((await MongoControllersManager.getProduction()).users)
    }

    static async initStaging () {
      return new UsersService((await MongoControllersManager.getStaging()).users)
    }

    async register (user: User) {
      const invalidFields = User.listInvalidFields(user)
      if (invalidFields.length !== 0) { throw new Error(`Cannot register User as the following fields are invalid: ${invalidFields}`) }
      const takenFields = await this.listTakenFields(user)
      if (takenFields.length !== 0) { throw new Error(`Cannot register User as the following fields have already been taken: ${takenFields}`) }

      return this._userController.addOne(user)
    }

    async getJwt (email: string, password: string) {
      const user = await this._userController.getByEmail(email)
      if (user === undefined) { throw new Error('Cannot get JWT as there is no corresponding user who matches the provided email.') }

      assert(user.passwordHashed !== undefined, 'The user fetched from the DB does not have a hashed password... Something is wrong.')
      assert(user.salt !== undefined, 'The user fetched from the DB does not have a salt... Something is wrong.')

      if (!validateHash(password, user.salt, user.passwordHashed)) { throw new Error('Cannot get JWT as the provided password is incorrect.') } else { return generateJwt(user.id) }
    }

    async listTakenFields (user: User) {
      const takenFields = []
      if (await this.isUsernameTaken(user.username)) takenFields.push('username')
      if (await this.isEmailTaken(user.email)) takenFields.push('email')
      return takenFields
    }

    async isUsernameTaken (username: string) {
      const user = await this._userController.getByUsername(username)
      if (user === undefined || user === null) return false
      else return true
    }

    async isEmailTaken (email: string) {
      const user = await this._userController.getByEmail(email)
      if (user === undefined || user == null) return false
      else return true
    }
}

export default UsersService
