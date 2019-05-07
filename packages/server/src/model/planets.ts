import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const planets = new Schema({
    name: {
        type: String,
        required: 'name is requerid',
    },
    img: {
        type: String,
        required: 'img is requerid',
    },
    intro: {
        type: String,
        required: 'intro is requerid',
    },
    description: {
        type: String,
        required: 'description is requerid',
    },
});

export default mongoose.model('planets', planets)
