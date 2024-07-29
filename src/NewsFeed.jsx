import React, { useContext, useState, useEffect } from "react"
import { AuthContext } from "./ContextProvider"
import { createPost, getPost } from "./apis"
import { GiBigWave } from "react-icons/gi";
import Post from "./Posts"
import {
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Heading,
  Box,
} from "@chakra-ui/react";

export default function NewsFeed() {
    const { accessToken } = useContext(AuthContext)
    const [postContent, setPostContent] = useState("")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (accessToken) {
        getPost({ accessToken })
            .then((response) => {
            setPosts(response.data);
            })
            .catch((error) => {
            console.log("Fetch post error: ", error);
            });
        }
    }, [accessToken]);
    
    const submit = () => {
        createPost({ postContent, accessToken })
            .then(() => {
            return getPost({accessToken})
            })
            .then(response => {
                setPosts(response.data)
                setPostContent("")
            })
            .catch(error => {
            console.log("Post creation error: ", error)
        })
    }
 
    return (
      <Box>
        <InputGroup m={10}>
          <InputLeftElement h="100%" pb=".4em">
            <IconButton size="lg" onClick={() => submit()} bg="#2C5282">
              <GiBigWave color="white"/>
            </IconButton>
          </InputLeftElement>
          <Input
            m="1rem"
            type="text"
            variant="flushed"
            onChange={(e) => setPostContent(e.target.value)}
            value={postContent}
            placeholder="Make a Ripple"
            _placeholder={{ opacity: 1, color: "white", fontWeight: "bolder" }}
          />
        </InputGroup>

        {posts.map((post, index) => (
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
        ))}
      </Box>
    );
}