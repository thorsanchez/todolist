import React, { useState } from 'react';

//component todform tekur inn addTodo
function TodoForm({ addTodo }) {
    //state sem heldur utan um textan
  const [value, setValue] = useState('');

  //user ytir a add
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return; //viljum ekki leyfa bil
    addTodo(value); //kalla a addtodo með input
    setValue(''); //svo hreinsa input
  };

  //hvað component skilar
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a todo"
        value={value}
        onChange={(e) => setValue(e.target.value)} //uppfæra value þegar user skrifar
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
