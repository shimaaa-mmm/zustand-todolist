"use client";

import { useTodoStore } from "@/lib/todo-store";
import { useState } from "react";
import { ITodo } from "../types/todo";
import { FiEdit2, FiTrash2, FiCheck, FiX } from "react-icons/fi";

const TodoItem = ({ todo }: { todo: ITodo }) => {
    const deleteTodo = useTodoStore((state) => state.deleteTodo);
    const toggleTodo = useTodoStore((state) => state.toggleUpdate);
    const updateTodo = useTodoStore((state) => state.updateTodo);

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleSave = () => {
        if (editText.trim()) {
            updateTodo(todo.id, editText);
            setIsEditing(false);
        }
    };

    return (
        <div
            className={`group relative flex items-center gap-3 p-4 rounded-2xl border
      transition-all duration-300 hover:scale-[1.03] hover:shadow-xl
      backdrop-blur-md animate-fadeIn
      ${todo.completed
                    ? "bg-white/40 border-white/30 opacity-70"
                    : "bg-white/70 border-white/40"
                }`}
        >
            {/* checkbox */}
            <div
                onClick={() => toggleTodo(todo.id)}
                className={`w-6 h-6 flex items-center justify-center rounded-full border cursor-pointer transition
        ${todo.completed
                        ? "bg-gradient-to-r from-green-400 to-emerald-500 border-green-500"
                        : "border-gray-400 hover:border-indigo-400"
                    }`}
            >
                {todo.completed && <FiCheck className="text-white text-sm" />}
            </div>

            {/* text */}
            <div className="flex-1">
                {isEditing ? (
                    <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        autoFocus
                    />
                ) : (
                    <span
                        className={
                            todo.completed
                                ? "line-through text-gray-400"
                                : "text-gray-800"
                        }
                    >
                        {todo.text}
                    </span>
                )}
            </div>

            {/* actions */}
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                {isEditing ? (
                    <>
                        <button
                            onClick={handleSave}
                            className="p-2 rounded-xl bg-green-100 text-green-600 hover:scale-110 transition"
                        >
                            <FiCheck />
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="p-2 rounded-xl bg-red-100 text-red-600 hover:scale-110 transition"
                        >
                            <FiX />
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="p-2 rounded-xl bg-blue-100 text-blue-600 hover:scale-110 transition"
                        >
                            <FiEdit2 />
                        </button>

                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="p-2 rounded-xl bg-red-100 text-red-600 hover:scale-110 transition"
                        >
                            <FiTrash2 />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TodoItem;