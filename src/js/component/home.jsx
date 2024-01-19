import React, { useState } from "react";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleKeyPress(e) {    
    if (e.key === "Enter") {
      setTodos(todos.concat(inputValue));
      setInputValue("");
    } 
  }

  function handleDelete(i) {
    const newList = [...todos];
    newList.splice(i, 1);
    setTodos(newList);
  };

  // Agregar el  array ->concat
  // Borrar el array -> filter
  // Update -> map
  return (
    <div className="container">
      <h1> My to do list</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={((e) => {setInputValue(e.target.value)})}
            value={inputValue}
            onKeyPress={handleKeyPress}
            placeholder="What do you need to do?"
          ></input>
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <i
              className="far fa-trash-alt"
              onClick={handleDelete}
            ></i>
          </li>
        ))}
      </ul>
      <div> {todos.length} tasks </div>
    </div>
  );
};

export default Home;