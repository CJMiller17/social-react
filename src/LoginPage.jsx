import React, { useContext, useState } from "react"
import { AuthContext } from "./ContextProvider"
import { getToken } from "./apis"
import { Input, Stack, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";


export default function Login() {
    const { setAccessToken } = useContext(AuthContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

  const submit = () => {
        getToken({ setAccessToken, username, password })
  }
  
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