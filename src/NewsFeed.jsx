import React, { useContext, useState, useEffect } from "react"
import { AuthContext } from "./ContextProvider"
import { createPost, getPost } from "./apis"
import { GiBigWave } from "react-icons/gi";
import Post from "./Posts"
import {
  Input,
  Textarea,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Box,
  Card,
  Heading,
} from "@chakra-ui/react";
import { RiImageAddFill } from "react-icons/ri";
import { MdAddLocationAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";


export default function NewsFeed() {
    const { accessToken } = useContext(AuthContext)
    const [postContent, setPostContent] = useState("")
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
  // const accessToken = localStorage.getItem("accessToken")
  
  const fetchPosts = () => {
    console.log("Fetching")
    if (accessToken) {
      getPost({ accessToken })
        .then((response) => {
          console.log(response)
          setPosts(response.data);
        })
        .catch((error) => {
          console.log("Fetch post error: ", error);
          // console.log("Response Data: ", response.data);
          if (
            error.response &&
            (error.response.status === 401 || error.response.status === 403)
          ) {
            localStorage.removeItem("token");
            setPosts([]);
            navigate("/login");
          }
        });
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    
    fetchPosts()

    const refreshInterval = setInterval(() => {
      fetchPosts()
    }, 5000)

    return () => clearInterval(refreshInterval)

  }, [accessToken, navigate]);
    
  const submit = () => {
      
    // if (!accessToken) {
    //   navigate("/login")
    //   return
    // }

      createPost({ postContent, accessToken })
          .then(() => {
          return getPost({accessToken})
          })
          .then((response) => {
              setPosts(response.data)
              setPostContent("")
          })
          .catch((error) => {
            console.log("Post creation error: ", error)
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
              localStorage.removeItem("token")
              setPosts([])
              navigate("/login")
            }
      })
    }
 
    return (
      <Box>
        <Box display="flex" justifyContent="space-between" m={4} mb="5rem">
          <Box className="splash-social" mt={4}>
            <Heading fontSize="4rem">Splash</Heading>
            <Heading fontSize="4rem">Splash</Heading>
          </Box>
          <IconButton
            size="lg"
            onClick={() => submit()}
            bg="transparent"
            _hover={{ bg: "#1E3A5F" }}
          >
            <CgProfile size="3rem" color="white" />
          </IconButton>
        </Box>
        <Card bg="#2C5282" maxW="70%" mx="auto" mb="2rem" p={4}>
          <InputGroup>
            <InputLeftElement h="100%">
              <IconButton
                size="lg"
                onClick={() => submit()}
                bg="#1E3A5F"
                _hover={{ bg: "#79bbc8" }}
                opacity="1"
              >
                <GiBigWave color="white" />
              </IconButton>
            </InputLeftElement>
            <Textarea
              ml="3.5rem"
              variant="outline"
              color="white"
              pr="2.9rem"
              rows={4}
              onChange={(e) => setPostContent(e.target.value)}
              value={postContent}
              placeholder="Make a Ripple"
              _placeholder={{
                opacity: 1,
                color: "white",
                fontWeight: "bolder",
              }}
              resize="none"
            />
            <InputRightElement
              display="flex"
              flexDirection="column"
              m={1}
              height="80%"
            >
              <IconButton
                size="lg"
                bg="transparent"
                _hover={{ bg: "#79bbc8" }}
                opacity="1"
                aria-label="Add Photo"
                icon={<RiImageAddFill color="white" />}
              />
              <IconButton
                size="lg"
                bg="transparent"
                _hover={{ bg: "#79bbc8" }}
                opacity="1"
                aria-label="Add Location"
                icon={<MdAddLocationAlt color="white" />}
              />
            </InputRightElement>
          </InputGroup>
        </Card>

        {posts ? posts.map((post, index) => (
          <Post
            key={index}
            username={post.profile.user.username}
            userImage={post.profile.avatar}
            userTitle={post.profile.title}
            postContent={post.content}
            postImage={post.image}
            postDate={post.updated}
            postId={post.id}
            setPosts={setPosts}
            initialLiked={post.liked_posts.includes({ user: post.profile.id })}
          />
        )) : <div>Poopy</div>
        }
      </Box>
    );
}