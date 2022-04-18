'use strict'

import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import { logIpAddress, morganWrapper } from './middleware/loggers_middleware'
import { processAuthHeader } from './middleware/authentication_middleware'
import { handleServerErrorsApis, handleServerErrorsStaticContent } from './middleware/error_handlers_middleware'
import stageRouter from './routers/stage_router'
import userRouter from './routers/users_router'
import graphQLRouter from './routers/graphql_router'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080
const DIST_DIR = path.join(__dirname, '../../dist')

app.use(morganWrapper)
app.use(processAuthHeader)

app.use(express.static(DIST_DIR))
app.use(express.json())
app.use(express.urlencoded())

app.use(userRouter)
app.use(stageRouter)
app.use(graphQLRouter)

app.use('/api', handleServerErrorsApis)

console.log('Hey! Docker env stuff works:', process.env.CONNECTION_STRING)
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`))
