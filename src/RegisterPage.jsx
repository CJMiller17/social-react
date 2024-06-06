import React, { useContext, useState } from "react";
import { AuthContext } from "./ContextProvider";
import { createUser } from "./apis";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    <Form>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>User Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
        />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
        />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Job Title:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Few words below avatar image"
          // onChange={(e) => setLastName(e.target.value)}
          // value={lastName}
          // required
        />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Show Password" />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={() => submit()}
      >
        Submit
      </Button>
    </Form>
  );
}


