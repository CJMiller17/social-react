import React from "react"
import { Outlet } from "react-router-dom"
import "./App.css"

const App = () => {
  return (
    <div>
      <div className="background"></div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default App