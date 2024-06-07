import React, { useContext, useState, useEffect } from "react"
import { AuthContext } from "./ContextProvider"
import { createPost, getPost } from "./apis"
import { GiBigWave } from "react-icons/gi";
import Post from "./Posts"
import {
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Button,
  InputLeftElement,
  IconButton,
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

    // const handleDelete = (postId) => {
    //     setPosts((currentPosts) => currentPosts.filter((post) => post.id !== postId))
    // }
    
    const submit = () => {
        createPost({ postContent, accessToken })
            .then(() => {
            return getPost({accessToken})
            })
            .then(response => {
                console.log("Nathan:", response.data)
                setPosts(response.data)
                setPostContent("")
            })
            .catch(error => {
            console.log("Post creation error: ", error)
        })
    }
 
    return (
      <div>
        <hr />
        <h1>Welcome to Splash Social</h1>
        <hr />
        <hr />
        <InputGroup>
          <InputLeftElement h="100%" pb=".4em">
            <IconButton size="lg" onClick={() => submit()} colorScheme="blue">
              <GiBigWave />
            </IconButton>
          </InputLeftElement>
          <Input
            m="1rem"
            type="text"
            variant="flushed"
            onChange={(e) => setPostContent(e.target.value)}
            value={postContent}
            placeholder="Make a Ripple"
            _placeholder={{ opacity: 0.3, color: "blue" }}
          />
        </InputGroup>

        <hr />
        {posts.map((post, index) => (
          <Post
            key={index}
            username={post.profile.user.username}
            userImage={post.profile.avatar}
            userTitle={post.profile.title}
            postContent={post.content}
            postImage={post.image}
            postDate={post.updated}
            // onDelete={() => handleDelete(post.id)}
            postId={post.id}
            setPosts={setPosts}
            initialLiked={post.is_liked}
          />
        ))}
      </div>
    );
}