import { nanoid } from "nanoid";
import React, { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Kaam kar le bhai", isCompleted: false },
  ]);

  const [title, settitle] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };
    const copytodos = [...todos];
    copytodos.push(newtodo);
    settodos(copytodos);

    // settodos([...todos, newtodo]);

    settitle("");
  };

  const rendertodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>;
  });

  return (
    <div>
      <h1>Create Tasks</h1>
      <form onSubmit={SubmitHandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <br />
        <button>Create Todo</button>
      </form>
      <hr />
      <h1>Panding Todos</h1>
      <ol>{rendertodos}</ol>
    </div>
  );
};

export default App;
