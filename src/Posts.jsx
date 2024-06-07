import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  IconButton,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs"
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { baseURL, deletePost, getPost, likePostOrComment } from "./apis";
import { formatDistanceToNow, parseISO } from "date-fns";
import {AuthContext} from "./ContextProvider"

const Post = ({ setPosts, postId, username, userImage, userTitle, postContent, postImage, postDate, initialLiked }) => {
    
  const formattedDate = formatDistanceToNow(parseISO(postDate), { addSuffix: true })
  const toast = useToast()
  const { accessToken } = useContext(AuthContext);
  const [liked, setLiked] = useState(initialLiked)

  const handleDelete = () => {
      console.log("Post ID, Username: ", postId, username, userTitle, accessToken)
    deletePost({ postId, accessToken })
      .then(() => getPost({accessToken}).then(response => setPosts(response.data)))
        toast({
            title: "Post Deleted",
            description: "The post has been deleted successfully",
            status: "success",
            duration: 3000,
            isClosable: true
        })
  }
  
  const handleLike = () => {
    likePostOrComment({ accessToken, postId })
      .then(response => {
        console.log("Like Params: ", response);
        setLiked(response.data.is_liked);
      })
    .catch(error => console.log("Error Liking this: ", error))
  }

    return (
      <Card
        boxShadow="dark-lg"
        maxW="md"
        m="auto"
        mb="2rem"
        color="white"
        bg="#2C5282"
      >
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name={""} src={`${baseURL}${userImage}`} />

              <Box>
                <Heading size="sm">{username}</Heading>
                <Text>{userTitle}</Text>
                <Text>{formattedDate}</Text>
              </Box>
            </Flex>
            <Menu>
              <MenuButton
                color="white"
                as={IconButton}
                variant="ghost"
                colorScheme="gray"
                icon={<BsThreeDotsVertical />}
              />
              <MenuList>
                <MenuItem color="red" onClick={handleDelete}>Delete Post</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>{postContent}</Text>
        </CardBody>
        {postImage.map((image, index) => {
          return (
            <Image
              key={index}
              objectFit="cover"
              src={`${baseURL}${image.image}`}
              alt="Image No Esta"
            />
          );
        })}

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
            onClick={handleLike}
            color="white"
            flex="1"
            variant="ghost"
            leftIcon={<BiLike color={liked ? "blue" : "white"} />}
          >
            Like
          </Button>
          <Button color="white" flex="1" variant="ghost" leftIcon={<BiChat />}>
            Comment
          </Button>
          <Button color="white" flex="1" variant="ghost" leftIcon={<BiShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>
    );
}

export default Post