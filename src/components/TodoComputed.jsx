const TodoComputed = ({
    computedTodosLeft,
    clearCompleted,
    computedTodosCompleted,
}) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white py-4 px-4  dark:bg-gray-800 dark:text-gray-300">
            <span className="text-gray-500">
                {computedTodosLeft} Items left
            </span>
            {computedTodosCompleted > 0 && (
                <button onClick={clearCompleted} className="text-gray-500">
                    Clear All completed
                </button>
            )}
        </section>
    );
};

export default TodoComputed;
