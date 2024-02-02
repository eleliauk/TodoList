function TodoFilter({ todos, setFilter, clearComplete }) {
    return (
        <footer className="footer">
            <span className="todo-count">{todos.length} items left</span>
            <ul className="filters">
                <li>
                    <a onClick={() => setFilter('all')} >All</a>
                </li>
                <li>
                    <a onClick={() => setFilter('active')}>Active</a>
                </li>
                <li>
                    <a onClick={() => setFilter('completed')}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={clearComplete}
            style={
                {width:"50px" ,height:"30px",fontSize:"12px",padding:"0",margin:"0",border:"none",outline:"none"}
            }>Clear Completed</button>

        </footer>
    );
}

export default TodoFilter;
