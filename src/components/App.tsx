import React, {useState, useEffect, useRef} from "react";
import {IntTodo} from "../types/data";
import {TodoList} from "./TodoList";
import './App.css'

const App: React.FC = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<IntTodo[]>([])

    const inputRef = useRef<HTMLInputElement>(null)

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])
            setValue('')
        }
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(it => it.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(it => {
            if (it.id !== id) {
                return it
            }
            return {...it, complete: !it.complete}
        }))

    }

    useEffect(() => {
        if (inputRef.current)
            inputRef.current.focus()
    }, [])

    return (
        <div className="style">
            <div>
                <input value={value}
                       onChange={event => setValue(event.target.value)}
                       onKeyDown={e => {
                           if (e.key === 'Enter') addTodo()
                       }}
                       ref={inputRef}
                       className="inputStyle"
                       placeholder="Enter todo"
                       />
                <button className="buttonStyle" onClick={addTodo}>Add</button>
                
            </div>
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    )
}

export {App}
