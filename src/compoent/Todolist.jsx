import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";

function Todolist({ updateTodo, todos, toggleTodo, deleteTodo }) {
    // 状态：追踪哪个待办事项正在被编辑
    const [editing, setEditing] = useState(null);
    // 状态：编辑时的文本
    const [editedText, setEditedText] = useState("");

    const handleToggleAll = () => {
        todos.forEach(todo => toggleTodo(todo.id));
    };
    const markAllAsComplete = () => {
        todos.map(todo => {
            if (!todo.completed) {
               toggleTodo(todo.id);
            }
        });
    };
    const handleEdit = (todo) => {
        setEditing(todo.id);
        setEditedText(todo.text);
    };
    // 保存编辑
    const handleSave = (id) => {
        updateTodo(id, editedText);
        setEditing(null);
    };
    return (
        <main className="main">
            <div className="toggle-all-container">
                <input
                    className="toggle-all"
                    type="checkbox"
                    onChange={handleToggleAll}
                    checked={todos.every(todo => todo.completed)}
                    data-testid="toggle-all"
                />
                <label htmlFor="toggle-all"     onClick={
                    markAllAsComplete
                }>Mark all as complete</label>
            </div>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'completed' : '!completed'}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                            />
                            {editing === todo.id ? (
                                <input
                                    type="text"
                                    value={editedText}
                                    onChange={(event) => setEditedText(event.target.value)}
                                    onBlur={() => handleSave(todo.id)}
                                    autoFocus
                                    className="new-todo"
                                />
                            ) : (
                                <label onDoubleClick={() => handleEdit(todo)}>
                                    {todo.text}
                                </label>
                            )}
                            <button
                                className="destroy"
                                onClick={() => deleteTodo(todo.id)}
                               /* style={
                                    { width: "10px", height: "10px" }
                                }*/
                                style={
                                    {borderRadius:"50%"}
                                }
                            ></button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Todolist;
