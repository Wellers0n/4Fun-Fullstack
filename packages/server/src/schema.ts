import { GraphQLSchema } from 'graphql'
import QueryType from './type/QueryType'
import MutationType from './type/MutationType'

const schema =  new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})

export default schema