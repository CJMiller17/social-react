import axios from "axios"


const baseURL = "http://127.0.0.1:8000"

export const getToken = ( {accessToken, setAccessToken, username, password} ) => {
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
        console.log("response: ", response)
        setAccessToken(response.data.access)
    })
    .catch(error => {
        console.log("Error: ", error)    
    })
}

export const createUser = ({firstName, lastName, username, password }) => {
  axios
    .post(
      `${baseURL}/profile/create/`,
      {
        username: username,
        password: password,
        first_name: firstName,
        last_name : lastName
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
      console.log("Creation Error: ", error);
    });
};