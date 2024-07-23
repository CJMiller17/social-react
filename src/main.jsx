// DEPENDENCIES
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom'

// CSS
import './App.css'
import { AuthContextProvider, SocialMediaProvider } from './ContextProvider.jsx'

// COMPONENTS
import ErrorPage from './ErrorPage.jsx'
import App from './App.jsx'
import LoginPage from './LoginPage.jsx'
import NewsFeed from './NewsFeed.jsx'
import RegisterPage from './RegisterPage.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ProtectedRoute from "./ProtectedRoute";
import { ChakraProvider } from '@chakra-ui/react'
import Theme from './CustomTheme.jsx'

function Layout() {
  return (
    <>
      <Header />
      <div id="page-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <NewsFeed />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: (
            <RegisterPage /> 
        ),
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={Theme}>
    <SocialMediaProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </SocialMediaProvider>
  </ChakraProvider>
);
