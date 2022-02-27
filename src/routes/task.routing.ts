import * as express from "express";
const router = express.Router();

/** import controller */
import {
  createTask,
  deleteTask,
  getAllTask,
  getSingleTask,
  updateTask,
} from "./../controller/task.controller";

/** routes */
router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

/** export router */
export default router;
