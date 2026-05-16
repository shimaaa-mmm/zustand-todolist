import { ITodo } from "@/types/todo";
import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
interface IStoreTodo {
    todos: ITodo[];
    addTodo: (text: string) => void;
    deleteTodo: (id: string) => void;
    toggleUpdate: (id: string) => void;
    updateTodo: (id: string, txt: string) => void;
    getTodosStats: () => { total: number; active: number; completed: number };
}
// ✅ تعریف تایپ درست برای فانکشن سازنده‌ی استور
const store: StateCreator<IStoreTodo> = (set, get) => ({
    todos: [],
    addTodo: (text: string) =>
        set((state) => ({
            todos: [
                ...state.todos,
                {
                    id: new Date().toString(),
                    text: text.trim(),
                    completed: false,
                    createdAt: new Date(),
                },
            ],
        })),
    deleteTodo: (id: string) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
    toggleUpdate: (id: string) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
        })),
    updateTodo: (id: string, txt: string) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, text: txt.trim() } : todo
            ),
        })),
    getTodosStats: () => {
        const { todos } = get();
        return {
            total: todos.length,
            completed: todos.filter((t) => t.completed).length,
            active: todos.filter((t) => !t.completed).length,
        };
    },
});

export const useTodoStore = create<IStoreTodo>()(
    persist(store, { name: "todo-storage" })
);
