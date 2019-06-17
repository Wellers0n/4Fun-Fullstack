import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const planets = new Schema({
    name: {
        type: String,
        required: 'name is required',
    },
    img: {
        type: String,
        required: 'img is required',
    },
    description: {
        type: String,
        required: 'description is required',
    },
    idUser: {
        type: String,
        required: 'IDuser required'
    }
});

export default mongoose.model('planets', planets)
