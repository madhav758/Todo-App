import { useState } from 'react';

const ToDoItem = ({ todo, toggleComplete, deleteToDo, editToDo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing && editedText.trim() !== '') {
            editToDo(todo.id, editedText);
        }
        setIsEditing(!isEditing);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleEdit();
        }
    }

    return (
        <div className={`group flex items-center justify-between p-4 mb-3 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md ${todo.completed ? 'bg-gray-50' : ''}`}>
            <div className="flex items-center gap-3 flex-1 overflow-hidden">
                <div className="relative">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                        className="peer cursor-pointer appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-purple-500 checked:bg-purple-500 transition-all duration-200"
                    />
                    <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" viewBox="0 0 12 10" fill="none">
                        <path d="M1 5L4.5 9L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {isEditing ? (
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        className="flex-1 px-2 py-1 text-gray-800 border-b-2 border-purple-500 outline-none bg-transparent"
                    />
                ) : (
                    <span className={`text-lg transition-all duration-200 truncate ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-700 font-medium'}`}>
                        {todo.text}
                    </span>
                )}
            </div>

            <div className="flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                <button
                    onClick={handleEdit}
                    className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                    title={isEditing ? "Save" : "Edit"}
                >
                    {isEditing ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                    )}
                </button>
                <button
                    onClick={() => deleteToDo(todo.id)}
                    className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors duration-200"
                    title="Delete"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ToDoItem;
