import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = ({ id, title, completed, removeTodo, updateTitle }) => {
    return (
        <article className="flex gap-4 border-b border-b-gray-400 dark:bg-gray-800 dark:text-gray-300">
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
            <p className={`grow text-gray-600 dark:text-gray-300 ${completed && "line-through"}`}>
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <IconCross />
            </button>
        </article>
    );
};

export default TodoItem;
