import { GraphQLObjectType } from 'graphql';

import CompanyMutations from '../modules/main/mutation';

export default new GraphQLObjectType({
  name: 'MutationType',
  fields: () => ({
    ...CompanyMutations,
  }),
});