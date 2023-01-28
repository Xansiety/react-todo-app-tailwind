import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">
            {todos.map((itemTodo) => (
                <TodoItem key={itemTodo.id} {...itemTodo} />
            ))}
        </div>
    );
};

export default TodoList;
