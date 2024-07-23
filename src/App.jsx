import React from "react";
import "./App.css";
import NewsFeed from "./NewsFeed";

const App = () => {
  return (
    <div className="app-container">
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
      <div className="content">
        <NewsFeed />
      </div>
    </div>
  );
};

export default App;
