
import React, { useState } from 'react';
function AddTodo({ addTodo }) {
    const [input, setInput] = useState('');
    const InputChange = (event) => {
        setInput(event.target.value);
    };
    const Submit = (event) => {
           event.preventDefault();
           addTodo(input);
           setInput('');
    };
    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={Submit}>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    value={input}
                    onChange={InputChange}
                />
            </form>
        </header>
    );
}

export default AddTodo;
