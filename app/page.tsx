"use client";
import { useTodoStore } from "@/lib/todo-store";
import AddTodoForm from "../components/add-todo-form";
import TodoItem from "../components/todo-item";
import TodoStatus from "../components/todo-status";

export default function Home() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <>
      <div className="min-h-screen  py-8">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-6 font-BBH uppercase text-blue-950">
            todo App
          </h1>
          <AddTodoForm />
          <TodoStatus />
          <div className="space-y-3">
            {todos.length > 0 ? (
              todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            ) : (
              <p className="text-3xl font-black text-gray-600 text-center mt-7 uppercase">
                no todo in time
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
