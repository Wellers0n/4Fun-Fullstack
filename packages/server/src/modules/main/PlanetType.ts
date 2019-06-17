import { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} from 'graphql'
import {globalIdField} from 'graphql-relay'

export default new GraphQLObjectType({
    name: 'Planets',
    fields: () => ({
        id: globalIdField('Planets'),
        _id:{
            type: GraphQLID
        },
        name:{
            type: GraphQLString,
        },
        img:{
            type: GraphQLString
        },
        description:{
            type: GraphQLString
        },
        idUser: {
            type: GraphQLString
        }
    })
})

