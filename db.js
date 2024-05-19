import { MongoGridFSChunkError } from 'mongodb';
import mongoose from 'mongoose';

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        
        });
;    } catch (error) {
    throw new Error("Error in connection to mongodb");
    }
}

export default connect;