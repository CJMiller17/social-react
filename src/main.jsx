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
import HomePage from "./HomePage.jsx"

function Layout() {
  return (
    <div id="app">
      <Header />
      <main id="page-content">
        <Outlet />
      </main>
      <div className="water-effect">
        <div className="water"></div>
        <svg>
          <filter id="turbulence" x="0" y="0" width="100%" height="100%">
            <feTurbulence id="water-filter" numOctaves="3"></feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              scale="20"
            ></feDisplacementMap>
            <animate
              xlinkHref="#water-filter"
              attributeName="baseFrequency"
              dur="30s"
              keyTimes="0;1"
              values="0.03;0.06"
              repeatCount="indefinite"
            />
          </filter>
        </svg>
      </div>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/newsfeed",
        element: (
          <ProtectedRoute>
            <NewsFeed />
          </ProtectedRoute>
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
