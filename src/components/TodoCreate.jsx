import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        createTodo(title);
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-2 px-4 transition-all duration-1000 dark:bg-gray-800"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="w-full text-gray-500 outline-none dark:bg-gray-800 dark:text-gray-300 transition-all duration-1000"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
