import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
    { id: 1, title: "Complete online JS Course", completed: true },
    { id: 2, title: "Jog around the park 3x", completed: false },
    { id: 3, title: "10 minutes meditation", completed: false },
    { id: 4, title: "Read for 1 hour", completed: true },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    //filtros
    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => setFilter(filter);

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "completed":
                return todos.filter((todo) => todo.completed);
            case "active":
                return todos.filter((todo) => !todo.completed);
            default:
                return todos;
        }
    };

    const createTodo = (title) => {
        setTodos([
            ...todos,
            {
                id: Date.now(),
                title,
                completed: false,
            },
        ]);
    };

    const updateTitle = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const computedTodosLeft = todos.filter((todo) => !todo.completed).length;
    const computedTodosCompleted = todos.filter(
        (todo) => todo.completed
    ).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    return (
        <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <Header />
            <main className="container mx-auto mt-8 px-4">
                <TodoCreate createTodo={createTodo} />
                <TodoList
                    todos={filteredTodos()}
                    removeTodo={removeTodo}
                    updateTitle={updateTitle}
                />
                <TodoComputed
                    computedTodosLeft={computedTodosLeft}
                    computedTodosCompleted={computedTodosCompleted}
                    clearCompleted={clearCompleted}
                />
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
