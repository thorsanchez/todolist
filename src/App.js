import React from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
    //todo item array
    //todos var og setTodos til að uppfæra hann
    const [todos, setTodos] = React.useState([]);

    //bætum við text aftast
    const addTodo = (text) => {
        const id = Math.random().toString(36).substr(2, 9); //breyta yfir i crypto.randomuuid() því það er alltaf unique
        //object með texta og id (byrjum að bæta við aftast, svo bæta við priority seinna)
        setTodos([...todos, { text, id, completed:false}]);
      };
      

    //eyða item, buum til copy, svo eyða svo uppfæra
    const deleteTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }

    //bæta checkbox við hvert todo
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) => 
            todo.id === id ? {...todo, completed: !todo.completed } : todo
        )
      )
    }

    return(
        <div className="App">
            <h1> My To Do List</h1>
            <ToDoForm addTodo={addTodo} />
            <ToDoList todos={todos} deleteTodo= {deleteTodo} toggleComplete={toggleComplete}/>

        </div>
    )
}
export default App;