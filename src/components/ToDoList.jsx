import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, toggleComplete, deleteToDo, editToDo }) => {
    if (todos.length === 0) {
        return (
            <div className="text-center py-10">
                <p className="text-gray-400 text-lg">No tasks yet. Add one above!</p>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {todos.map((todo) => (
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteToDo={deleteToDo}
                    editToDo={editToDo}
                />
            ))}
        </div>
    );
};

export default ToDoList;
