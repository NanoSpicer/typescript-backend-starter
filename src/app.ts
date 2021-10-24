
import { ApolloServer } from 'apollo-server-fastify';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import fastify, { FastifyInstance } from 'fastify';
import type { IResolvers } from '@graphql-tools/utils'
import http from 'http'
import { DocumentNode } from 'graphql'
import { resolvers as allResolvers } from './graphql/resolvers'
import { typeDefs as allTypeDefs } from './graphql/type-defs'
import { loadConfiguration } from './config/config.model'

const config = loadConfiguration()
const { port, name } = config.app

function fastifyAppClosePlugin(app: FastifyInstance) {
  return {
    async serverWillStart() {
      return {
        async drainServer() {
          await app.close();
        },
      };
    },
  };
}

async function startApolloServer(typeDefs: Array<DocumentNode>, resolvers: Array<IResolvers>) {
  const app = fastify()
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      fastifyAppClosePlugin(app),
      // I didnt make the lib… so disabling time
    // eslint-disable-next-line new-cap
      ApolloServerPluginDrainHttpServer({ httpServer: app.server }),
    ],
  });
  await server.start();
  app.register(server.createHandler());
  await app.listen(4000);
  console.log(`🏨 📄 ${name} listening at http://localhost:${port}${server.graphqlPath} 🚀`)
}

startApolloServer(allTypeDefs, allResolvers)
  .catch(err =>console.error('Unexpected error', err))
