import { useEffect, useState } from "react";

function Todolist({ updateTodo, todos, toggleTodo, deleteTodo }) {
   /* const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");*/
    // 状态：追踪哪个待办事项正在被编辑
    const [editing, setEditing] = useState(null);
    // 状态：编辑时的文本
    const [editedText, setEditedText] = useState("");
    const handleToggleAll = () => {
        todos.forEach(todo => toggleTodo(todo.id));
    };
  /*  const handleEdit = (todo) => {
        setEditingId(todo.id);
        setEditingText(todo.text);
    };

  const handleEditChange = (event) => {
        setEditingText(event.target.value);
    };

 const handleEditSubmit = (todoId) => {

        setEditingId(null);
        setEditingText("");
    };*/
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
                />
                <label htmlFor="toggle-all">Mark all as complete</label>
            </div>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'completed' : '!completed'}>
                        <div className="view">
                            {/*{editingId === todo.id ? (
                                <input
                                    type="text"
                                    value={editingText}
                                    onChange={handleEditChange}
                                    onBlur={() => handleEditSubmit(todo.id)}
                                    autoFocus
                                />
                            ) : (
                                <label onDoubleClick={() => handleEdit(todo)}>
                                    {todo.text}
                                </label>
                            )}*/}
                            <input
                                className="toggle"
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}

                            />
                        {/*    <input
                                type="text"
                                value={editingText}
                              onChange={handleEditChange}
                                onBlur={() => handleEditSubmit(todo.id)}
                                autoFocus
                            />*/}
                          {/*  ):*/}
                   {/* <label >{todo.text}</label>*/}
                            {editing === todo.id ? (
                                <input
                                    type="text"
                                    value={editedText}
                                    onChange={(e) => setEditedText(e.target.value)}
                                    onBlur={() => handleSave(todo.id)}
                                    autoFocus
                                />
                            ) : (
                                <label onDoubleClick={() => handleEdit(todo)}>
                                    {todo.text}
                                </label>
                            )}
                            <button
                                className="destroy"
                                onClick={() => deleteTodo(todo.id)}
                                style={
                                    { width: "10px", height: "10px" }
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
