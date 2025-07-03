import React from "react";

function ToDoItem ({ todo, index, deleteTodo, toggleComplete}) {
    return (
        <li>
            {/*bæta checkbox við*/}
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(index)}> Delete </button>
        </li>
    )
}
export default ToDoItem;