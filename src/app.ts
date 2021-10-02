import express from 'express'
import type { IResolvers } from '@graphql-tools/utils'
import http from 'http'
import { ApolloServer } from 'apollo-server-express'
import { DocumentNode } from 'graphql'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { resolvers as allResolvers } from './graphql/resolvers'
import { typeDefs as allTypeDefs } from './graphql/type-defs'
import { loadConfiguration } from './config/config.model'

const config = loadConfiguration()
const { port, name } = config.app


async function startApolloServer(typeDefs: Array<DocumentNode>, resolvers: Array<IResolvers>) {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // I didnt make the lib… so disabling time
    // eslint-disable-next-line new-cap
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })
  await server.start()
  server.applyMiddleware({ app })
  await new Promise((resolve) => httpServer.listen({ port }, () => resolve('ok')))
  console.log(`🏨 📄 ${name} listening at http://localhost:${port}${server.graphqlPath} 🚀`)
}

startApolloServer(allTypeDefs, allResolvers)
  .catch(err =>console.error('Unexpected error', err))
