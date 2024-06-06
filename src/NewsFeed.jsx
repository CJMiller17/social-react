import React, { useContext, useState, useEffect } from "react"
import { AuthContext } from "./ContextProvider"
import { createPost, getPost } from "./apis"
import { FaCirclePlus } from "react-icons/fa6";
import Post from "./Posts"

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

    const handleDelete = (postId) => {
        setPosts((currentPosts) => currentPosts.filter((post) => post.id !== postId))
    }
    
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
        THE MUFFIN MAN!!
        <hr />
        <hr />
        Create New Post
        <div>Penny for your thoughts:</div>
        <input
          type="text"
          onChange={(e) => setPostContent(e.target.value)}
          value={postContent}
        />
        <div>
          <button onClick={() => submit()}>
            <FaCirclePlus />
          </button>
        </div>
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
            onDelete={() => handleDelete(post.id)}
          />
        ))}
      </div>
    );
}