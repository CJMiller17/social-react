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
import { useEffect } from "react";
import { baseURL, deletePost } from "./apis";
import { formatDistanceToNow, parseISO } from "date-fns";
// 

const Post = ({ postId, username, userImage, userTitle, postContent, postImage, postDate, onDelete }) => {
    useEffect(() => { console.log("USERNAME", username) }, [])
    
    const formattedDate = formatDistanceToNow(parseISO(postDate), { addSuffix: true })
    const toast = useToast()

    const handleDelete = () => {
        if (onDelete) {
            onDelete()
        }
        toast({
            title: "Post Deleted",
            description: "The post has been deleted successfully",
            status: "success",
            duration: 3000,
            isClosable: true
        })
    }

    return (
      <Card maxW="md">
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
                            as={IconButton}
                            variant="ghost"
                            colorScheme="gray"
                            icon={<BsThreeDotsVertical/>}
                        />
                            <MenuList>
                                <MenuItem onClick={handleDelete}>Delete Post</MenuItem>
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
          <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
            Like
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
            Comment
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>
    );
}

export default Post