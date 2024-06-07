import React, { useContext, useState } from "react";
import { AuthContext } from "./ContextProvider";
import { createUser } from "./apis";
// import {Button} from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Input, Stack, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons"

export default function Register() {
  const { setAccessToken } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("")

  const submit = () => {
    createUser({ firstName, lastName, username, password, title });
  };

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);  

  return (
    <>
      <Stack spacing={3}>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
          variant="filled"
          size="lg"
          color="teal"
          placeholder="Username"
          _placeholder={{ opacity: 0.3, color: "blue" }}
        />

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            variant="filled"
            size="lg"
            color="teal"
            placeholder="Password"
            _placeholder={{ opacity: 0.4, color: "blue" }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Input
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
          variant="filled"
          size="lg"
          color="teal"
          placeholder="First Name"
          _placeholder={{ opacity: 0.5, color: "blue" }}
        />
        <Input
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
          variant="filled"
          size="lg"
          color="teal"
          placeholder="Last Name"
          _placeholder={{ opacity: 0.6, color: "blue" }}
        />
        <Input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          variant="filled"
          size="lg"
          color="teal"
          placeholder="Title or desc. below your avatar"
          _placeholder={{ opacity: 0.7, color: "blue" }}
        />
      </Stack>

      <Button
        m="1em"
        rightIcon={<ArrowForwardIcon />}
        colorScheme="blue"
        variant="outline"
        type="submit"
        onClick={() => submit()}
      >
        Submit
      </Button>
    </>
  );
}


