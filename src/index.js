import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navigation from "./Components/HomePage/Navigation"
import HomePage from "./Components/HomePage/Home"
import HomeDesignWrap from "./Components/HomePage/HomePageDesignWrap"
import Explanation from "./Components/HomePage/HomeExlpanation"
import Footer from "./Components/HomePage/Footer"
import WebDesignMaps from "./Components/WebDesignPage/WebDesignMaps.jsx"

import Locations from "./Components/LocationsPage/Locations"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Home",
    element : (
      <>
        <Navigation />,
        <HomePage />,
        <HomeDesignWrap/>,
        <Explanation/>
        <Footer />
      </>
    )
  },
  {
    path: "/WebDesignPage",
    element : 
      <>
        <Navigation />,
        <WebDesignMaps/>,
        <Footer />
      </>
    
  },
  {
    path: "/Locations",
    element : 
      <>
        <Navigation />,
        <Locations />
        <Footer />
        
      </>
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);


