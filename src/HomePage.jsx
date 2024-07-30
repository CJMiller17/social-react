import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Card
        boxShadow="dark-lg"
        maxW="md"
        m="auto"
        mt="12rem"
        color="white"
        bg="#2C5282"
        textAlign="center"
      >
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box className="splash-social">
                <Heading fontSize="8rem">Splash</Heading>
                <Heading fontSize="8rem">Splash</Heading>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>The social media platform for all the fish in the sea</Text>
        </CardBody>
        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button
            color="white"
            flex="1"
            variant="ghost"
            leftIcon={<BiChat />}
            as={Link}
            to="/login"
          >
            Login
          </Button>
          <Button
            color="white"
            flex="1"
            variant="ghost"
            leftIcon={<BiChat />}
            as={Link}
            to="/register"
          >
            Register
          </Button>
          <Button
            color="white"
            flex="1"
            variant="ghost"
            leftIcon={<BiShare />}
            as={Link}
            to="/about"
          >
            About
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default HomePage;
