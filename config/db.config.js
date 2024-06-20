
//Database configuration using mongoose
import mongoose from "mongoose";

const url = "mongodb://localhost:27017/csv";
export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("<----->Connected Using Mongoose On Mongodb<----->");
  } catch (error) {
    console.log("Something went wrong while connecting to DataBase");
    console.log(error);
  }
};
