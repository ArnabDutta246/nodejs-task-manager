"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** import section */
require("./environment/connect");
const express_1 = __importDefault(require("express"));
const environment_1 = require("./environment/environment");
const app = (0, express_1.default)();
/** import routes */
const task_routing_1 = __importDefault(require("./routes/task.routing"));
/** middleware */
app.use(express_1.default.json());
app.use("/api/taskmanager/v1", task_routing_1.default);
/** server and port setup */
const port = process.env.PORT || environment_1.Environment.PORT;
app.listen(port, () => {
    console.log(`server us runnig port: ${port}`);
});
