import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from "graphql";
import PlanetsType from "../modules/main/PlanetType";
import planetsModel from "../model/planets";

export default new GraphQLObjectType({
  name: "QueryType",
  description: "Get planets[] and planet",
  fields: () => ({
    planet: {
      type: PlanetsType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (parentValue, args, ctx) => {
        return ctx.user ? planetsModel.findOne({ _id: args.id }) : null;
      }
    },
    planets: {
      type: new GraphQLList(PlanetsType),
      resolve: (parentValue, args, ctx) => {
        const id = ctx.user.id;
        return ctx.user ? planetsModel.find({ idUser: id }) : null;
      }
    }
  })
});
