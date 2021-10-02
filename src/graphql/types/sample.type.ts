import { gql } from 'apollo-server-core'


export const sampleType = gql`
  #
  extend type Query {
    hello: String!
  }
`
