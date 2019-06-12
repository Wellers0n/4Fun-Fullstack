import { GraphQLObjectType ,GraphQLList, GraphQLNonNull, GraphQLID } from 'graphql'
import planets from '../modules/main/planets'
import planetsModel from '../model/planets' 


export default new GraphQLObjectType({
    name: 'QueryType',
    description: 'Get planets',
    fields: () => ({
        planet: {
            type: planets,
            args: {
                id:{
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: (obj, args) => {
                return planetsModel.findOne({_id: args.id})
            }
        },
        planets: {
            type: new GraphQLList(planets),
            resolve: () => {
                return planetsModel.find({})
            }
        }
    })
})