import mongoose from 'mongoose';

const uri = `mongodb://localhost:27017/FOODIEFRENZY`;
export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('DB CONNECTED');
  } catch (err) {
    console.error('DB CONNECTION ERROR:', err);
  }
};