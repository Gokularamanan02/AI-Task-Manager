const express = require("express");
const router = express.Router();

const Task = require("../models/Task");
const authMiddleware = require("../middleware/AuthMiddleware");

// ================= GET ALL USER TASKS =================

router.get("/", authMiddleware, async (req, res) => {
  try {
    console.log("GET TASKS USER:", req.user);

    const tasks = await Task.find({
      user: req.user.id,
    });

    console.log("TASKS FOUND:", tasks);

    res.status(200).json(tasks);
  } catch (error) {
    console.error("GET TASK ERROR:");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ================= CREATE TASK =================

router.post("/", authMiddleware, async (req, res) => {
  try {
    console.log("========== CREATE TASK ==========");
    console.log("REQUEST BODY:", req.body);
    console.log("AUTH USER:", req.user);

    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      priority: req.body.priority,
      user: req.user.id,
    });

    console.log("TASK CREATED:", task);

    res.status(201).json(task);
  } catch (error) {
    console.error("========== CREATE TASK ERROR ==========");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
});

// ================= UPDATE TASK =================

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.json(updatedTask);
  } catch (error) {
    console.error("UPDATE TASK ERROR:");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ================= DELETE TASK =================

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deletedTask = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!deletedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.error("DELETE TASK ERROR:");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;