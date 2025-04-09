import { useState } from "react";

function Form({ onAddUser }) {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState(0);

  const handleAddUser = () => {
    onAddUser(inputName, inputAge);
    setInputName("");
    setInputAge(0);
  };

  return (
    <div>
      <div>
        <label htmlFor="name" style={{ marginRight: "5px" }}>
          Your name
        </label>
        <input
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          type="text"
          placeholder="Enter your name ..."
          id="name"
        />
      </div>
      <div style={{ paddingTop: "10px" }}>
        <label htmlFor="age" style={{ marginRight: "20px" }}>
          Your age
        </label>
        <input
          value={inputAge}
          onChange={(e) => setInputAge(e.target.value)}
          type="number"
          placeholder="Enter your age ..."
          id="age"
        />
      </div>
      <div style={{ paddingTop: "10px" }}>
        <button onClick={handleAddUser}>Submit</button>
      </div>
    </div>
  );
}

export default Form;
