'use strict'

import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

let someVariable = 'Assign me.'
const graphQLRouterLike = graphqlHTTP({
  schema: buildSchema(`
        type ExampleClass {
            boxStandardField: String
            funcWParams(param1: Int!): [Int]
        }
        type Query {
            getExampleClass(param1: Int!): ExampleClass
        }
        type Mutation {
            setSomeVariable(param1: String): String
        }
    `),
  rootValue: {
    getExampleClass: ({ param1 }: { param1: number }) => {
      return {
        boxStandardField: () => 'This is a box standard field.',
        funcWParams: ({ param1 }: { param1: number }) => {
          return [param1]
        }
      }
    },
    setSomeVariable: ({ param1 }: { param1: string }) => {
      console.log(someVariable)
      someVariable = param1
      return param1
    }
  },
  graphiql: true
})

const graphQLRouter = express.Router()
graphQLRouter.use('/graphql', graphQLRouterLike)

export default graphQLRouter
