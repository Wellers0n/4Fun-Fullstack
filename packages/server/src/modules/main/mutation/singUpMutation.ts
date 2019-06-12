import Users from '../../../model/users';
import { GraphQLString, GraphQLNonNull} from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
// import { generateToken } from './../../../auth'

export default mutationWithClientMutationId({
    name: "SingUpUserLoginWithEmail",
    inputFields: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    mutateAndGetPayload: async ({ name, email, password }) => {
        const user = await Users.create({name, email, password});

        const defaultErrorMessage = 'user created successfully';
    
        return {
          msg: defaultErrorMessage,
        };
    },
    outputFields: {
      msg: {
        type: GraphQLString,
        resolve: ({ msg }) => msg,
      }
    },
})