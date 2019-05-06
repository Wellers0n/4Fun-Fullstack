import { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt, 
} from 'graphql'
import {globalIdField} from 'graphql-relay'

export const companyType = new GraphQLObjectType({
    name: 'Company',
    fields:{
        id: globalIdField('Company'),
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
        yearsCompany:{
            type: GraphQLInt
        }
    }
})

