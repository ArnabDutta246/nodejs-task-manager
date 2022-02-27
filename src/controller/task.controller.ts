import * as express from "express";
import Task from "../models/task";
const getAllTask = (req: express.Request, res: express.Response) => {
  res.send("get all task");
};
const getSingleTask = (req: express.Request, res: express.Response) => {
  res.send("get single task");
};
const createTask = async (req: express.Request, res: express.Response) => {
  const a = await Task.create(req.body);
  res.status(201).json({ a });
};
const updateTask = (req: express.Request, res: express.Response) => {
  res.send("updateTask task");
};
const deleteTask = (req: express.Request, res: express.Response) => {
  res.send("deleteTask task");
};

export { getAllTask, getSingleTask, updateTask, deleteTask, createTask };
