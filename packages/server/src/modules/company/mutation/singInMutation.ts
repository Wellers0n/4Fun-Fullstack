import Users from './../../../model/users';
import { GraphQLString, GraphQLNonNull, GraphQLInt} from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { generateToken } from './../../../auth'
import console = require('console');

export default mutationWithClientMutationId({
    name: "UserLoginWithEmail",
    inputFields: {
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        senha: {
            type: new GraphQLNonNull(GraphQLInt),
        }
    },
    mutateAndGetPayload: async ({ email, senha }) => {
        const user = await Users.findOne({email, senha});
        console.log(user)

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