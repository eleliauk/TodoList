import {useEffect, useState} from 'react';
import './App.css';
import AddTodo from "./compoent/AddTodo.jsx";
import Todolist from "./compoent/Todolist.jsx";
import TodoFilter from "./compoent/TodoFilter.jsx";
function App() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        };
        setTodos([...todos, newTodo]);

    };
    function updateTodo(id, newText) {
        // 创建一个新的数组来避免直接修改状态
        const updatedTodos = todos.map(todo => {
            // 当找到匹配的 ID 时，更新其文本
            if (todo.id === id) {
                return { ...todo, text: newText };
            }
            return todo;
        });

        // 使用更新后的数组来设置状态
        setTodos(updatedTodos);
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };
    const getFilteredTodos = () => {
        switch(filter) {
            case'all':
                return todos;
            case 'completed':
                return todos.filter(todo => todo.completed);
            case 'active':
                return todos.filter(todo => !todo.completed);
            default:
                return todos;
        }
    };
    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    return (

        <section className="todoapp"  >
            <AddTodo addTodo={addTodo} />
            <Todolist  updateTodo={updateTodo} todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo}

            />
            <TodoFilter setFilter={setFilter} filter={filter} todos={getFilteredTodos()} clearComplete={clearCompleted}/>
        </section>

    );
}

export default App;
