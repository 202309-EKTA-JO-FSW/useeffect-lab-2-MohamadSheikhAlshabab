import { useState } from "react";

export default function Form({username,setUserName}) {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserInput(value)
    setUserName(userInput);
  };
  
  return (
    <form>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label style={{ margin: "0 2rem" }}>User name</label>
        <input
          type="text"
          className="form-control"
          placeholder="User Name"
          value={userInput}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </form>
  );
}
