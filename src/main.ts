/** import section */
import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectDb } from "./environment/connect";
/** import routes */
import router from "./routes/task.routing";
import sanitizedConfig from "./environment/environment";
/** middleware */
app.use(express.json());
app.use("/api/taskmanager/v1", router);
/** server and port setup
 * 1. mongodb connection
 * 2. nodejs server connection
 */
dotenv.config();
const port = sanitizedConfig.PORT;
const start = async () => {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`server us runnig port: ${port}`);
    });
  } catch (error) {
    console.log("server can not start: ", error);
  }
};
start();
