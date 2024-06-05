import axios from "axios";
// import "./App.css"
const baseURL = "http://127.0.0.1:8000";

const getToken = ({
  accessToken,
  setAccessToken,
  username,
  password,
}) => {
  console.log("username: ", username);
  console.log("password: ", password);
  axios
    .post(
      `${baseURL}/token/`,
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log("response: ", response);
      setAccessToken(response.data.access);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

export default getToken