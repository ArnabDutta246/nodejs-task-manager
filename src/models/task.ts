import mongoose from "mongoose";
/** Interface */
export interface TaskInterface extends mongoose.Document {
  _id?: any;
  name: string;
  completion: boolean;
}
/** define schemas */
const TaskSchema = new mongoose.Schema({ name: String, completion: Boolean });
/** export schemas */
export default mongoose.model<TaskInterface>("Task", TaskSchema);
