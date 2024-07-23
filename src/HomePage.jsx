import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Box,
  Heading,
  IconButton,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike, BiChat, BiShare } from "react-icons/bi";

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
              <Box>
                <Heading size="sm">Splash Social</Heading>
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
          <Button color="white" flex="1" variant="ghost">
            Login
          </Button>
          <Button color="white" flex="1" variant="ghost" leftIcon={<BiChat />}>
            Register
          </Button>
          <Button color="white" flex="1" variant="ghost" leftIcon={<BiShare />}>
            About
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default HomePage;
