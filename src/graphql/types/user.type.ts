import { gql } from 'apollo-server-core'


export const userType = gql`
  type User {
    id: String!
    name: String!
    surname: String!
    created_at: Date!
    updated_at: Date!
  }
  extend type Query {
    allUsers: [User!]!
  }
`
