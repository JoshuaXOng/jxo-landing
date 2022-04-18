/**
 * This file contains the implementation of the PostgresDB controller.
 */
'use strict'

import { Pool } from 'pg'
import * as helper from '../database_utils'
import * as pgHelper from './pg_config'
import { User } from '../models'
import { DatabaseController, searchUserParameters, updateableUserParameters } from '../controller_interfaces'
import { v4 as uuidv4 } from 'uuid'

class PostgresController implements DatabaseController {
    pool: Pool;

    constructor (pool: Pool) {
      this.pool = pool
    }

    createUser (id: string, username: string, email: string, password?: string): Promise<Boolean> {
      id = uuidv4()
      const query = {
        text: `INSERT INTO ${pgHelper.TABLES.USERS} (id, username, email, password) VALUES ($1, $2, $3, $4)`
        // values: [id, username, email, helper.hash(password)]
      }

      const result: Promise<Boolean> = new Promise(resolve => {
        this.pool
          .connect()
          .then(client => {
            client.query(query, (error, queryResult) => {
              if (error) {
                console.log(error)
                resolve(false)
              } else {
                resolve(true)
              }
              client.release()
            })
          })
          .catch(error => {
            console.log(error)
            resolve(false)
          })
      })

      return result
    }

    readUser (searchParameters: searchUserParameters): Promise<User> {
      let { id, username, email } = searchParameters
      id = '1'
      // let idSearch: string = id ? `id = ${id}` : '';
      // let usernameSearch: string = username ? `username = ${username}` : '';
      // let emailSearch: string = email ? `email = ${email}` : '';
      // let searchFields: Array<string> = [idSearch, usernameSearch, emailSearch];

      let psqlWhereSpec: string = 'WHERE '
      const x = helper.formatKVs(['id', 'username', 'email'], [`${`'${id}'`}`, `${`'${username}'`}`, `${`'${email}'`}`], ' = ', ' OR ')
      psqlWhereSpec = psqlWhereSpec.concat(x)

      const query = {
        text: `SELECT id, username, email FROM ${pgHelper.TABLES.USERS} ${psqlWhereSpec}`
      }

      const result: Promise<User> = new Promise((resolve) => {
        this.pool
          .connect()
          .then(client => {
            client.query(query, (err, qResult) => {
              if (err) {
                console.log(err)
                resolve(null)
              } else {
                const id: string = qResult.rows[0].id
                const username: string = qResult.rows[0].username
                const email: string = qResult.rows[0].email
                resolve(new User(id, username, email))
              }
              client.release()
            })
          })
          .catch(err => {
            console.log(err)
            resolve(null)
          })
      })

      return result
    }

    updateUser (user: User, updateParameters: updateableUserParameters): Promise<Boolean> {
      const { id, username, email, password } = updateParameters
      const hashedPassword: string = null // helper.hash(password);

      const keys: Array<string> = ['id', 'username', 'email', 'password']
      const values: Array<string> = [id, username, email, hashedPassword]
      const assoSymb: string = ' = '
      const delimSymb: string = ', '
      const qsqlSetArg: string = helper.formatKVs(keys, values, assoSymb, delimSymb)

      const qsqlSet: string = 'SET '.concat(qsqlSetArg)

      const qeury = {
        text: `UPDATE ${pgHelper.TABLES.USERS} ${qsqlSet} WHERE id = ${user.id}`
      }

      let result: Promise<Boolean>
      this.pool
        .connect()
        .then(client => {
          client.query(qeury, (err, qResult) => {
            if (err) {
              console.log(err)
              result = new Promise(resolve => resolve(false))
            } else {
              result = new Promise(resolve => resolve(true))
            }
            client.release()
          })
        })
        .catch(err => {
          console.log(err)
          result = new Promise(resolve => resolve(false))
        })

      return result
    }

    deleteUser (id: string): Promise<Boolean> {
      return null
    }
}

export { PostgresController }
