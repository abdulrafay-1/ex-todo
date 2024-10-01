import { useState, useRef } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  const input = useRef();

  function addTodo() {
    if (input.current.value.trim()) {
      let obj = {
        title: input.current.value,
        id: Date.now(),
      };
      setTodo([obj, ...todo]);
      input.current.value = "";
    } else {
      alert("Enter Todo");
    }
  }

  function deleteTodo(id) {
    let temp = todo.filter((item) => item.id != id);
    setTodo(temp);
  }

  function editTodo(id) {
    let find = todo.find((item) => item.id === id);
    let editPrompt = prompt("Edit Todo :", find.title);
    if (editPrompt.trim()) {
      find.title = editPrompt;
      setTodo([...todo]);
    } else {
      alert("Enter a valid todo");
    }
  }

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input placeholder="enter todo" ref={input} />
        <button onClick={addTodo}>submit</button>
      </form>

      <ol>
        {todo.length > 0 ? (
          todo.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <div><button onClick={() => deleteTodo(item.id)}>delete</button>
              <button className="edit" onClick={() => editTodo(item.id)}>edit</button></div>
            </li>
          ))
        ) : (
          <h2>No todo found</h2>
        )}
      </ol>
    </>
  );
};

export default App;
