import mongoose from "mongoose";

const connectDB = async () => {
  try {
    let conn = await mongoose.connect(process.env.MOBGODBURI);
    console.log(`Connect DB at ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error while connecting DB at ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
