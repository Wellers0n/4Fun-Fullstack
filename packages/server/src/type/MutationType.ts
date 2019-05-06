import { GraphQLObjectType } from 'graphql';

import CompanyMutations from '../modules/company/mutation';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...CompanyMutations,
  }),
});