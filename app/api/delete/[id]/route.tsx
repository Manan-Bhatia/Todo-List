import mongoose from "mongoose";
import Todo from "@/Models/Todo";
export async function DELETE(
    _request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await mongoose.connect("mongodb://localhost:27017/todoDB");
        const res = await Todo.findByIdAndDelete(params.id);
        if (res)
            return Response.json(
                { message: "Todo deleted successfully" },
                { status: 200 }
            );
        return Response.json({ message: "Todo not found" }, { status: 404 });
    } catch (error) {
        return Response.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
