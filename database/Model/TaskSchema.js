import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The task title is required"],
      unique: true,
      trim: true,
      maxlength: [40, "title cannot be greater than 40 characters"],
    },

    description: {
      type: String,
      required: [true, "The task title is required"],
      unique: true,
      trim: true,
      maxlength: [40, "title cannot be greater than 40 characters"],
    },
  },
  { timestamps: true, versionKey: false }
);

const Task = models.task || model("task", TaskSchema);
module.exports = Task;
