import { gql } from 'apollo-server-core'
import { rootType } from './types/root.type'
import { sampleType } from './types/sample.type'
import { userType } from './types/user.type'


export const typeDefs = [
  rootType, sampleType, userType
]

