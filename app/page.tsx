"use client";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
    const [todo, setTodo] = useState("" as string);
    const [todoList, setTodoList] = useState<TodoResponse | null>(null);

    interface Todo {
        title: string;
        _id: string;
    }
    interface TodoResponse {
        todos: Array<Todo>;
        count: number;
    }
    const fetchTodos = async () => {
        try {
            const { data } = await axios.get("/api/get");
            setTodoList(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchTodos();
    }, []);

    const handleAddTodo = async () => {
        try {
            const res = await axios.post("/api/add", { todo });
            if (res.status === 201) fetchTodos();
            setTodo("");
        } catch (error) {
            console.log(error);
        }
    };
    const handleDelete = async (e: React.MouseEvent) => {
        const res = await axios.delete(
            "/api/delete/" + (e.target as HTMLButtonElement).id
        );
        if (res.status === 200) fetchTodos();
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
            <ul className="space-y-3 w-1/3">
                {todoList && todoList.count > 0 ? (
                    todoList.todos.map((todo) => {
                        return (
                            <li
                                className="p-2 flex justify-between font-bold bg-indigo-200"
                                key={todo._id}
                            >
                                {todo.title}

                                <button
                                    onClick={(e) => handleDelete(e)}
                                    id={todo._id}
                                    className="text-red-500"
                                >
                                    Delete
                                </button>
                            </li>
                        );
                    })
                ) : (
                    <span>No todos found</span>
                )}
            </ul>
        </div>
    );
}
