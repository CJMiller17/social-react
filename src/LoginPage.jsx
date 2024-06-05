import React, { useContext, useState } from "react"
import { AuthContext } from "./ContextProvider"
import { getToken } from "./apis"


export default function Login() {
    const { setAccessToken } = useContext(AuthContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submit = () => {
        getToken( {setAccessToken, username, password} )
    }

    return (
      <div>
        <hr />
        <h1>Login</h1>
        <div>Username:</div>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <div>Password:</div>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <div>
          <button onClick={() => submit()}>Submit</button>
        </div>
        <hr />
      </div>
    );
}