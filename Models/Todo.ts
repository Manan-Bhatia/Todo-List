import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        title: String,
    },
    { timestamps: true }
);

export default mongoose.models.Todo || mongoose.model("Todo", todoSchema);
