import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    setContact((prevName) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevName.lName,
          email: prevName.email
        };
      } else if (inputName === "lName") {
        return {
          fName: prevName.fName,
          lName: newValue,
          email: prevName.email
        };
      } else if (inputName === "email") {
        return {
          fName: prevName.fName,
          lName: prevName.email,
          email: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello, {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email} </p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
