import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [newToDo, setNewToDo] = useState('');

  const addToDo = (e) => {
    e.preventDefault();
    if (!newToDo) return;
    setTodos([...todos, { id: Date.now(), text: newToDo, completed: false }]);
    setNewToDo('');
  };

  const deleteToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editToDo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-white/50 p-6 sm:p-8">
          <Header />

          <form onSubmit={addToDo} className="mb-8 relative">
            <input
              type="text"
              className="w-full pl-5 pr-14 py-4 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 outline-none transition-all duration-300 placeholder:text-gray-400 font-medium"
              placeholder="What needs to be done?"
              value={newToDo}
              onChange={(e) => setNewToDo(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 aspect-square bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
              disabled={!newToDo.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </form>

          <ToDoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />

          <div className="mt-8 text-center text-xs text-gray-400">
            {todos.length} {todos.length === 1 ? 'task' : 'tasks'} remaining
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
