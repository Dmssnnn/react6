import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navigation from "./Components/HomePage/Navigation"
import HomePage from "./Components/HomePage/Home"
import HomeDesignWrap from "./Components/HomePage/HomePageDesignWrap"
import Explanation from "./Components/HomePage/HomeExlpanation"
import Footer from "./Components/HomePage/Footer"
import WebDesignMaps from "./Components/WebDesignPage/WebDesignMaps.jsx"
import GrapicDesignPage from "./Components/GrapicDesignPage/GrapicDesignPage"
import Locations from "./Components/LocationsPage/Locations"
import Contact from "./Components/ContactUsPage/Contact"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
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
  {
    path: "/GrapicDesignPage",
    element : 
      <>
        <Navigation />,
        <GrapicDesignPage />
        <Footer />
      </>
    
  },

  {
    path: "/Contact",
    element : 
      <>
        <Navigation />,
        <Contact/> 
        {/* <Footer /> */}
      </>
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);


