import { toast } from "react-toastify";
import style from "./Read.module.css";

const Read = (props) => {
    console.log(style);
  const todos = props.todos;
  const settodos = props.settodos;

  const DeleteHandler = (id) => {
    const filtedtodo = todos.filter((todo) => todo.id != id);
    settodos(filtedtodo);
    toast.error("Todo deleted!")
  };

  const rendertodos = todos.map((todo) => {
    return (
      <li key={todo.id} className="mb-2 flex justify-between items-center p-4 bg-gray-800 rounded">
        <span className="text-xl font-thin">{todo.title}</span>
        <button className="font-thin text-sm text-red-400" onClick={() => DeleteHandler(todo.id)}>Delete</button>
      </li>
    );
  });

  return (
    <div className="w-[35%] p-10">
        <h1 className="mb-10 text-5xl font-thin"><span className="text-pink-400">Panding</span> Todos</h1>
      <ol>{rendertodos}</ol>
    </div>
  );
};

export default Read;
