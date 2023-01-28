import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTitle }) => {
    return (
        <div className="mt-8 overflow-hidden rounded-t-md bg-white transition-all  duration-1000 dark:bg-gray-800 dark:text-gray-300 [&>article]:p-4">
            {todos.map((itemTodo) => (
                <TodoItem
                    key={itemTodo.id}
                    {...itemTodo}
                    removeTodo={removeTodo}
                    updateTitle={updateTitle}
                />
            ))}
        </div>
    );
};

export default TodoList;
