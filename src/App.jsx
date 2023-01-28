import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

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
        <div
            className="min-h-screen bg-gray-200  bg-[url('./assets/images/bg-mobile-light.jpg')] 
        bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 
        dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:text-gray-300 
        md:bg-[url('./assets/images/bg-desktop-light.jpg')]
        dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')]"
        >
            <Header />
            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />

                {todos.length === 0 ? (
                    <div className="mt-8 rounded-t-md bg-white p-4 text-3xl text-gray-500 transition-all duration-1000 dark:bg-gray-800 dark:text-gray-300 [&>article]:p-4">
                        <p class="text-center">
                            No hay tareas por mostrar, por favor añade una 🚀
                        </p>
                    </div>
                ) : (
                    <>
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
                        <TodoFilter
                            changeFilter={changeFilter}
                            filter={filter}
                        />
                    </>
                )}
            </main>

            {todos.length > 0 && <Footer />}
        </div>
    );
};

export default App;
