import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("connectdb", process.env.DATABASE_PATH);
    const conn = await mongoose.connect(process.env.DATABASE_PATH);

    console.log(`Connection successfull to ${conn.connection.host}`.cyan);
  } catch (err) {
    console.log(
      `Error occured while connecting to DB ${err.message}`.red.underline
    );
    process.exit(1);
  }
};

export default connectDB;
