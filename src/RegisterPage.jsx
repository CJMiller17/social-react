import React, { useContext, useState } from "react";
import { AuthContext } from "./ContextProvider";
import { createUser } from "./apis";

export default function Register() {
  const { setAccessToken } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submit = () => {
    createUser({ firstName, lastName, username, password });
  };

  return (
    <div>
      <hr />
      <h1>Register</h1>
      <div>Username:</div>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />

      <div>Password:</div>
      <input
        type="text" // Change to PASSWORD later
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <div>First Name:</div>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />

      <div>Last Name:</div>
      <input
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />

      <div>
        <button onClick={() => submit()}>Submit</button>
      </div>
      <hr />
    </div>
  );
}
