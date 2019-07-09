import Planet from "../../../model/planets";
import { GraphQLString, GraphQLNonNull, GraphQLList } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import PlanetType from './../PlanetType'

export default mutationWithClientMutationId({
  name: "createPlanetMutation",
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: new GraphQLNonNull(GraphQLString)
    },
    img: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  mutateAndGetPayload: async ({ name, description, img }, context, options) => {
    // const idUser = context.user.id;
    const planet = await Planet.findOne({ name });
    // if (!idUser) return { error: "User null" };

    if (img === "" || img == null) {
      img = "https://semantic-ui.com/images/wireframe/image.png";
    }

    if (!planet) {
      await Planet.create({ name, description, img, idUser:"haha" });
      const planetUpdate = await Planet.find({})
      return {
        planets: planetUpdate,
        success: "success"
      };
    }

    return {
      error: "Planet exist"
    };
  },
  outputFields: {
    success: {
      type: GraphQLString,
      resolve: ({ success }) => success
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error
    },
    planets: {
      type: new GraphQLList(PlanetType),
      resolve: ({planets}) => planets
    }
  }
});
