// DEPENDENCIES
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'

// CSS
import './App.css'
import "react-bootstrap"
import { AuthContextProvider, SocialMediaProvider } from './ContextProvider.jsx'

// COMPONENTS
import ErrorPage from './ErrorPage.jsx'
import App from './App.jsx'
import LoginPage from './LoginPage.jsx'
import NewsFeed from './NewsFeed.jsx'
import RegisterPage from './RegisterPage.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { ChakraProvider } from '@chakra-ui/react'

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
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <NewsFeed />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/newsfeed",
        element: <NewsFeed />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <SocialMediaProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </SocialMediaProvider>
  </ChakraProvider>
);
