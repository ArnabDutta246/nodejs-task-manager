import mongoose from "mongoose";
import config from "./environment";
const connectDb = (): Promise<typeof mongoose> => {
  return mongoose.connect(config.MONGO_URI);
};
export { connectDb };
