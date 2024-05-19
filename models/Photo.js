import mongoose from 'mongoose';

const {Schema} = mongoose;

const photoSchema = new Schema({
    base64Data: {
        type: String,
        required: true
    },
    });

export default mongoose.models.Post || mongoose.model('Photo', photoSchema);