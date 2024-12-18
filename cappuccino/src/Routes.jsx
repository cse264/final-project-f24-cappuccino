import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/LogIn/index.jsx"; // Adjust the path based on your file structure
import AddIdea from "./pages/AddIdea";
import Weather from "./pages/Weather";
import YourIdeas from "./pages/YourIdeas";
import AllIdeas from "./pages/AllIdeas";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
// Import other components as needed

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root to Login */}
        <Route path="/" element={<Login />} />

        {/* Define all your routes */}
        <Route path="/weather" element={<Weather />} />
        <Route path="/yourideas" element={<YourIdeas />} />
        <Route path="/posts" element={<AllIdeas />} />
        <Route path="/addidea" element={<AddIdea />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* Add a catch-all for undefined routes */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
