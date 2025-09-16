import { useState } from "react";

const Create = (props) => {
    console.log(props); 

  const [fullname, setfullname] = useState("");
  const [age, setage] = useState();

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newuser = { fullname, age };
    console.log(newuser); // api, backend ,data
    // set the user in the setusers
  };

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={SubmitHandler}>
        <input
          onChange={(e) => setfullname(e.target.value)}
          value={fullname}
          type="text"
          placeholder="Full Name"
        />

        <input
          onChange={(e) => setage(e.target.value)}
          value={age}
          type="number"
          placeholder="Age"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
