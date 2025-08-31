import { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "kaam karle bhai", isCompleted: false },
  ]);

  const [title, settitle] = useState("");
  const [completed, setcompleted] = useState(false);
  const [gender, setgender] = useState("");
  const [city, setcity] = useState("mumbai");

  return (
    <>
      <h1>Create tasks</h1>
      <form>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <br />
        <input
          checked={completed}
          onChange={(e) => setcompleted(e.target.checked)}
          type="checkbox"
        />
        Completed
        <br />
        <br />
        <input
          value="male"
          type="radio"
          onChange={(e) => setgender(e.target.value)}
          checked={gender == "male" && true}
        />
        male
        <input
          type="radio"
          value="female"
          onChange={(e) => setgender(e.target.value)}
          checked={gender == "female" && true}
        />{" "}
        Female
        <br />
        <br />
        <select value={city} onChange={(e) => setcity(e.target.value)}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
        </select>
        <br />
        <br />
        <button>Create Todo</button>
      </form>
    </>
  );
};

export default App;
