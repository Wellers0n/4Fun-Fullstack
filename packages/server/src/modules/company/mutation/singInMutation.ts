import Users from './../../../model/users';
import { GraphQLString, GraphQLNonNull} from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { generateToken } from './../../../auth'

export default mutationWithClientMutationId({
    name: "UserLoginWithEmail",
    inputFields: {
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        senha: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    mutateAndGetPayload: async ({ email, senha }) => {
        const user = await Users.findOne({email, senha});

        const defaultErrorMessage = 'Invalid password';
    
        if (!user) {
          return {
            error: defaultErrorMessage,
          };
        }
  
        return {
          token: generateToken(user),
        };
    },
    outputFields: {
      token: {
        type: GraphQLString,
        resolve: ({ token }) => token,
      },
      error: {
        type: GraphQLString,
        resolve: ({ error }) => error,
      },
    },
})