"use client";
import { useTodoStore } from "@/lib/todo-store";
import { useState } from "react";

function AddTodoForm() {
    const [input, setInput] = useState<string>("");
    const addTodo = useTodoStore((state) => state.addTodo);

    const handlerSubmit = () => {
        if (input.trim()) {
            addTodo(input);
            setInput("");
        }
    };

    return (
        <div className="flex mb-6 gap-2 flex-row-reverse">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handlerSubmit()}
                placeholder="... یک تسک جدید بنویس"
                className="flex-1 px-4 py-3 text-lg rounded-2xl text-right text-blue-800
    bg-white/70 backdrop-blur-md border border-white/40
    shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />

            <button
                onClick={handlerSubmit}
                className="px-5 py-3 rounded-2xl text-white font-bold
    bg-gradient-to-r from-indigo-500 to-purple-500
    hover:scale-105 transition shadow-lg"
            >
                ➕
            </button>
        </div>
    );
}

export default AddTodoForm;