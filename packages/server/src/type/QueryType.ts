import { GraphQLObjectType ,GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'
import planetsType from '../modules/company/planetsTypes'
import planetsModel from '../model/planets' 

export default new GraphQLObjectType({
    name: 'Planets',
    description: 'Get planets',
    fields: () => ({
        planets: {
            type: new GraphQLList(planetsType),
            resolve: () => {
                return planetsModel.find({})
            }
        }
    })
})