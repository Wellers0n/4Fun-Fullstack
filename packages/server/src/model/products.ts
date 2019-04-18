import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const products = new Schema({
    name: {
        type: String,
        required: 'name is requerid',
    },
    price:{
        type: Number,
        required: 'price is requerid',
    },
    idCompany:{
        type: String,
        required: 'idCompany is requerid',  
    }
   
});

export default mongoose.model('products', products)
