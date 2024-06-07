import axios from "axios"


export const baseURL = "http://127.0.0.1:8000"

export const getToken = ( { setAccessToken, username, password} ) => {
    console.log("username: ", username)
    console.log("password: ", password)
    axios.post(`${baseURL}/token/`, {
        username: username,
        password: password
    }, {
        headers: {
            'Content-Type' : "application/json"
        }
    })
    .then(response => {
        console.log("Token Received: ", response)
        setAccessToken(response.data.access)
    })
    .catch(error => {
        console.log("Token Error: ", error)    
    })
}

export const createUser = ({firstName, lastName, username, password, title }) => {
  axios
    .post(
      `${baseURL}/profile/create/`,
      {
        username: username,
        password: password,
        first_name: firstName,
        last_name: lastName,
        title: title
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log("User Created: ", response);
    })
    .catch((error) => {
      console.log("User Creation Error: ", error);
    });
};

export const createPost = async ({ postContent, accessToken }) => {
  console.log("Access Token: ", accessToken)
  return axios
    .post(
      `${baseURL}/post/create/`,
      {
        content: postContent,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        },
      }
    )
    .then((response) => {
      console.log("Post Created: ", response);
    })
    .catch((error) => {
      console.log("Create Post Error: ", error);
    });
};

export const getPost = async ({ accessToken }) => {
  return axios
    .get(
      `${baseURL}/post/`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
      }
    )
    .then((response) => {
      console.log("Post have been gotten: ", response)
      return response
    })
    .catch((error) => {
      console.log("Get Post Error: ", error);
    });
};

export const deletePost = ({ postId, accessToken }) => {
  console.log("deletePost: ", postId)
  return axios.delete(`${baseURL}/post/delete/${postId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }).then((response) => {
    console.log("This post has been deleted: ", response)
    return response
  })
}

export const getImages = ({ accessToken }) => {
  return axios({
    method: "get",
    url: `${baseURL}/image/`,
    headers: {
        Authorization: `Bearer ${accessToken}` 
    }
  })
}

export const createImage = ({ accessToken, image }) => {
  return axios({
    method: "post"
  })
}

export const likePostOrComment = ({accessToken, postId}) => {
  const like = postId ? {post_id: postId} : {comment_id: commentId}
  return axios({
    method: "post",
    url: `${baseURL}/like/create/`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    data : like
  })  
}