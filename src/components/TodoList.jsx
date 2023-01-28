import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTitle }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvider) => (
                <div
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                    className="mt-8 overflow-hidden rounded-t-md bg-white transition-all  duration-1000 dark:bg-gray-800 dark:text-gray-300 [&>article]:p-4"
                >
                    {todos.map((itemTodo, index) => (
                        <Draggable
                            key={itemTodo.id}
                            index={index}
                            draggableId={`${itemTodo.id}`}
                        >
                            {(draggableProvider) => (
                                <TodoItem
                                    {...itemTodo}
                                    removeTodo={removeTodo}
                                    updateTitle={updateTitle}
                                    ref={draggableProvider.innerRef}
                                    {...draggableProvider.draggableProps}
                                    {...draggableProvider.dragHandleProps}
                                />
                            )}
                        </Draggable>
                    ))}
                    {droppableProvider.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TodoList;
