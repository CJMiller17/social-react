import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./ContextProvider";
import { Navigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

// Properly await GetToken by using return

const ProtectedRoute = ({ children }) => {
  const { accessToken } = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const toast = useToast();

  useEffect(() => {
    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [accessToken]);


    if (!isAuthenticated) {
    toast({
      title: "Login Required",
      description: "Please swim towards the login page!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
