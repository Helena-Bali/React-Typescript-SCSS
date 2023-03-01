import {TodoItem} from './TodoItem'
import {IntTodo} from "../types/data";

interface IntTodoList {
    items: IntTodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<IntTodoList> = (props) => {
    const {items, removeTodo, toggleTodo} = props
    return <div>
        {
            items.map((it) =>
                <TodoItem
                    key={it.id}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    {...it}
                />
            )
        }
    </div>
}

export {TodoList}
