import React from "react";
import ToDoItem from "./ToDoItem";

function TodoList({ todos, deleteTodo, toggleComplete}) {
    return (
        <ul>
            {/*loopa yfir hvert todo inni todos fylki*/}
            {todos.map((todo, index) => (
                <ToDoItem
                key={index}
                index={index}
                todo={todo}
                deleteTodo ={deleteTodo}
                toggleComplete={toggleComplete}/>
            ))}
        </ul>
    )
}
export default TodoList;