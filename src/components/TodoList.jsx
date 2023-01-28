import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTitle }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">
            {todos.map((itemTodo) => (
                <TodoItem key={itemTodo.id} {...itemTodo} removeTodo={removeTodo} updateTitle={updateTitle} />
            ))}
        </div>
    );
};

export default TodoList;
