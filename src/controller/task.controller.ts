import * as express from "express";

const getAllTask = (req: express.Request, res: express.Response) => {
  res.send("get all task");
};
const getSingleTask = (req: express.Request, res: express.Response) => {
  res.send("get single task");
};
const createTask = (req: express.Request, res: express.Response) => {
  res.send("createTask task");
};
const updateTask = (req: express.Request, res: express.Response) => {
  res.send("updateTask task");
};
const deleteTask = (req: express.Request, res: express.Response) => {
  res.send("deleteTask task");
};

export { getAllTask, getSingleTask, updateTask, deleteTask, createTask };
