import { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} from 'graphql'
import {globalIdField} from 'graphql-relay'

export default new GraphQLObjectType({
    name: 'PlanetsType',
    fields: () => ({
        id: globalIdField('Planets'),
        _id:{
            type: GraphQLID
        },
        name:{
            type: GraphQLString
        },
        img:{
            type: GraphQLString
        },
        intro:{
            type: GraphQLString
        },
        description:{
            type: GraphQLString
        },
    })
})

