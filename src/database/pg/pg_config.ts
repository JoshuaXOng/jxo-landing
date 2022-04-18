/**
 * This file contains code that aids the implementation of PostgresDB controllers.
 */
'use strict'

import { config } from 'dotenv'
import pg from 'pg'
const { Pool } = pg

if (process.env.NODE_ENV !== 'production') config()
const PG_HOST = 'localhost'
const PG_PORT = 5432

/**
 * Configure connection to Postgres database.
 * These values are indeed hardcoded.
 */
function createPool () {
  const pool = new Pool({
    host: PG_HOST,
    port: PG_PORT,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password
  })
  return pool
}

/**
 * Declares the tables within Postgres that are going to be used in code.
 */
const TABLES = {
  USERS: 'users'
}

export { createPool, TABLES }
