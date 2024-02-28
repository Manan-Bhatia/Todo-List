"use client";
import { useState } from "react";
export default function Home() {
    const [todo, setTodo] = useState("");

    const handleAddTodo = () => {
        console.log(todo);
        setTodo("");
    };
    return (
        <div className="flex flex-col items-center gap-3">
            <h1 className="text-2xl font-bold">Todo List</h1>
            <span>
                <input
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="border-2 rounded-s-md p-2 focus:outline-none focus:border-indigo-500"
                    type="text"
                    placeholder="Add todo..."
                />
                <button
                    onClick={handleAddTodo}
                    className="border-2 border-indigo-500 bg-indigo-500 text-white p-2 rounded-e-md"
                >
                    Add
                </button>
            </span>
            <div></div>
        </div>
    );
}
