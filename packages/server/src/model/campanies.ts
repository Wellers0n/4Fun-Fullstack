import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const companies = new Schema({
    name: {
        type: String,
        required: 'name is requerid',
    },
   
});

export default mongoose.model('companies', companies)
