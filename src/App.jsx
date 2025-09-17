import React, { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Kaam kar le bhai", isCompleted: false },
  ]);

  const [title, settitle] = useState("");
  const [completed, setcompleted] = useState(true);
  const [gender, setgender] = useState("male");
  const [city, setcity] = useState("mumbai")
  return (
    <div>
      <h1>Create Tasks</h1>
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
          type="checkbox"
          onChange={(e) => setcompleted(e.target.checked)}
        />
        Completed
        <br />
        <br />
        <input
        checked={gender == "male" && true}
          value="male"
          onChange={(e) => setgender(e.target.value)}
          type="radio"
        />
        male
        <input
          checked={gender == "female" && true}
          value="female"
          onChange={(e) => setgender(e.target.value)}
          type="radio"
        />
        Female
        <br />
        <br />
        <select value={city} onChange={(e) => setcity(e.target.value)}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
        </select>
        <br /><br />
        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default App;
