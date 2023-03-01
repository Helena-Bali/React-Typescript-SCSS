import React from "react";
import { IntTodo } from "../types/data";
import './App.css'

interface IntTodoItem extends IntTodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<IntTodoItem> = (props) => {
    const { id, title, complete, removeTodo, toggleTodo } = props
    return (
        <div className="line">
            <div className="singleTodo">
                <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)} />
                {title}
            </div>
            <button className="todoButtonStyle" onClick={() => { removeTodo(id) }}>Delete</button>
        </div>
    )
}

export { TodoItem }
