import Planet from "../../../model/planets";
import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

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
  mutateAndGetPayload: async ({ name, description, img }, ctx) => {
    console.log(ctx.user);
    const idUser = ctx.user.id
    const planet = await Planet.findOne({ name });

    if (!planet) {
      await Planet.create({ name, description, img, idUser});
      return {
        success: "Insert planet with success"
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
    }
  }
});
