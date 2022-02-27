/** import section */
require("./environment/connect");
import express from "express";
import { Environment } from "./environment/environment";
const app = express();
import { connectDb } from "./environment/connect";
/** import routes */
import router from "./routes/task.routing";
/** middleware */
app.use(express.json());
app.use("/api/taskmanager/v1", router);
/** server and port setup
 * 1. mongodb connection
 * 2. nodejs server connection
 */
const port = process.env.PORT || Environment.PORT;
const start = async () => {
  try {
    await connectDb(Environment.DB_URL);
    app.listen(port, () => {
      console.log(`server us runnig port: ${port}`);
    });
  } catch (error) {
    console.log("server can not start: ", error);
  }
};
start();
