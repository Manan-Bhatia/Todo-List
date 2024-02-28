import mongoose from "mongoose";
import Todo from "@/Models/Todo";
export async function GET() {
    await mongoose.connect("mongodb://localhost:27017/todoDB");
    const todos = await Todo.find();
    return Response.json({ todos, count: todos.length }, { status: 200 });
}
