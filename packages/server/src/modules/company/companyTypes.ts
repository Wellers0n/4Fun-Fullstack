import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLInt, GraphQLFloat } from 'graphql'
import productModel from '../../model/products' 


const ProductType = new GraphQLObjectType({
    name: 'products',
    fields:{
        _id:{
            type: GraphQLID
        },
        name:{
            type: GraphQLString
        },
        price: {
            type: GraphQLFloat
        },
        idCompany:{
            type: GraphQLID
        }
    }
})

export const companyType = new GraphQLObjectType({
    name: 'Company',
    fields:{
        _id:{
            type: GraphQLID
        },
        name:{
            type: GraphQLString
        },
        product:{
            type: new GraphQLList(ProductType),
            resolve: (parentValue, args) => {
                console.log(parentValue)
                return productModel.find({idCompany: parentValue._id})
            }
        }
    }
})

