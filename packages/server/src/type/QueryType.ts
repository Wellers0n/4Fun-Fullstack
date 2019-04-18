import { GraphQLObjectType ,GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'
import {companyType} from '../modules/company/companyTypes'
import companiesModel from '../model/campanies' 

export default new GraphQLObjectType({
    name: 'Companies',
    description: 'Get companies',
    fields: () => ({
        companies: {
            type: new GraphQLList(companyType),
            resolve: () => {
                return companiesModel.find({})
            }
        },
        company:{
            type: companyType,
            args:{
                name: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: (parentValue, args) => {
                console.log(args)
                return companiesModel.findOne({name: args.name})
            }
        }
    })
})