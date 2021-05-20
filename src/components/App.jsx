import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");

  function updateFName(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }

  function updateLName(event) {
    const lastName = event.target.value;
    setLName(lastName);
  }

  function updateEmail(event) {
    const email = event.target.value;
    setEmail(email);
  }
  return (
    <div className="container">
      <h1>
        Hello, {fName} {lName}
      </h1>
      <p>{email}</p>
      <form>
        <input
          onChange={updateFName}
          name="fName"
          placeholder="First Name"
          value={fName}
        />
        <input
          onChange={updateLName}
          name="lName"
          placeholder="Last Name"
          value={lName}
        />
        <input
          onChange={updateEmail}
          name="email"
          placeholder="Email"
          value={email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
