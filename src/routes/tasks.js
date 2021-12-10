const express = require("express");
const uuid = require("uuid");
const todoList = require("../../api/mock/tasks.json");

const router = express.Router();
module.exports = router;

router.get("/api/v1/tasks", (req, res, next) => {
  setTimeout(() => {
    res.send(todoList);
  }, 250);
});

router.post("/api/v1/tasks", (req, res, next) => {
  const newItem = {
    id: uuid.v4(),
    tags: [],
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    completed: false,
  };
  todoList.push(newItem);

  setTimeout(() => {
    res.send(newItem);
  }, 500);
});
