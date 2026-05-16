"use client";
import { useTodoStore } from "@/lib/todo-store";
import { useEffect, useState } from "react";

const TodoStatus = () => {
  const getTodosStats = useTodoStore((state) => state.getTodosStats);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);
  if (!hydrated) return null;

  const stats = getTodosStats();

  return (
    <div className="mb-5 text-center">
      <div className="inline-flex items-center gap-4 px-5 py-2 rounded-2xl
      bg-white/60 backdrop-blur-md border border-white/40 shadow-sm text-sm">
        <span>📋 {stats.total}</span>
        <span>⏳ {stats.active}</span>
        <span>✅ {stats.completed}</span>
      </div>
    </div>
  );
};

export default TodoStatus;