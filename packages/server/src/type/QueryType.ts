import { GraphQLObjectType ,GraphQLList, GraphQLNonNull, GraphQLID } from 'graphql'
import planetsType from '../modules/company/planetsTypes'
import planetsModel from '../model/planets' 


export default new GraphQLObjectType({
    name: 'Planets',
    description: 'Get planets',
    fields: () => ({
        planet: {
            type: planetsType,
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
            type: new GraphQLList(planetsType),
            resolve: () => {
                return planetsModel.find({})
            }
        }
    })
})