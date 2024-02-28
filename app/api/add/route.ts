import mongoose from "mongoose";
import Todo from "@/Models/Todo";

export async function POST(request: Request) {
    const req = await request.json();
    await mongoose.connect("mongodb://localhost:27017/todoDB");
    await Todo.create({ title: req.todo });
    return Response.json(
        { message: "Todo added successfully" },
        { status: 201 }
    );
}
