import { gql } from 'apollo-server-core'


export const rootType = gql`
  scalar Date
  type Query {
    # Added because declaring an empty type doesnt make sense
    # Later we're gonna extend these by using more types and resolvers
    _ignore: String!
  }
  type Mutation {
    _ignore: String!
  }
`
