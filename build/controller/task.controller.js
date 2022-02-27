"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = exports.deleteTask = exports.updateTask = exports.getSingleTask = exports.getAllTask = void 0;
const getAllTask = (req, res) => {
    res.send("get all task");
};
exports.getAllTask = getAllTask;
const getSingleTask = (req, res) => {
    res.send("get single task");
};
exports.getSingleTask = getSingleTask;
const createTask = (req, res) => {
    res.send("createTask task");
};
exports.createTask = createTask;
const updateTask = (req, res) => {
    res.send("updateTask task");
};
exports.updateTask = updateTask;
const deleteTask = (req, res) => {
    res.send("deleteTask task");
};
exports.deleteTask = deleteTask;
