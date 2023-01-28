import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";
import React from "react";

const TodoItem = React.forwardRef(
    ({ id, title, completed, removeTodo, updateTitle, ...rest }, ref) => {
        return (
            <article
                {...rest}
                ref={ref}
                className="border-b-gray-40 flex gap-4 border-b"
            >
                <button
                    onClick={() => updateTitle(id)}
                    className={`h-5 w-5 flex-none border-2 ${
                        completed
                            ? "flex items-center  justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                            : "inline-block"
                    }`}
                >
                    {completed && <IconCheck />}
                </button>
                <p
                    className={`grow text-gray-600 dark:text-gray-300 ${
                        completed && "line-through"
                    }`}
                >
                    {title}
                </p>
                <button className="flex-none" onClick={() => removeTodo(id)}>
                    <IconCross />
                </button>
            </article>
        );
    }
);

export default TodoItem;
