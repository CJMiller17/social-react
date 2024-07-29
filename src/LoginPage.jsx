import React, { useContext, useState } from "react"
import { AuthContext } from "./ContextProvider"
import { getToken } from "./apis"
import { Input, VStack, InputGroup, InputRightElement, Button, Card, CardHeader, Flex, Box, CardBody, CardFooter, Text, Heading } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";



export default function Login() {
  const { setAccessToken } = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()  

  const submit = () => {
    getToken({ setAccessToken, username, password })
        navigate("/newsfeed")
  }
  
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show); 

  return (
    <>
      <Card
        boxShadow="dark-lg"
        maxW="md"
        m="auto"
        mt="12rem"
        color="white"
        bg="#2C5282"
      >
        <CardHeader>
          <Box>
            <Heading textAlign="center">Welcome Back</Heading>
          </Box>
        </CardHeader>
        <VStack padding={5} spacing={6}>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            focusBorderColor="#79bbc8"
            required
            variant="filled"
            size="lg"
            fontSize="1.7rem"
            color="#2C5282"
            placeholder="Username"
            _placeholder={{ opacity: 0.3, color: "#2C5282" }}
            _focus={{ color: "white" }}
          />
          <InputGroup>
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              focusBorderColor="#79bbc8"
              value={password}
              required
              variant="filled"
              fontSize="1.7rem"
              size="lg"
              color="#2C5282"
              placeholder="Password"
              _placeholder={{ opacity: 0.4, color: "#2C5282" }}
              _focus={{ color: "white" }}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
        <CardFooter justify="space-between" flexWrap="wrap">
          <Button
            color="white"
            flex="1"
            variant="ghost"
            onClick={() => submit()}
            mr="1rem"
          >
            Login
          </Button>
          <Button
            color="white"
            flex="1"
            variant="ghost"
            as={Link}
            to="/"
            ml="1rem"
          >
            Back
          </Button>
        </CardFooter>
      </Card>
    </>
  );
      
}