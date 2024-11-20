import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/LogIn/index.jsx"; // Adjust the path based on your file structure
import Home from "./pages/Home";
import AddIdea from "./pages/AddIdea";
import YourComments from "./pages/YourComments";
import AllIdeas from "./pages/AllIdeas";
// Import other components as needed

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root to Login */}
        <Route path="/" element={<Login />} />
        {/* Define all your routes */}
        <Route path="/allideas" element={<AllIdeas />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addidea" element={<AddIdea />} />
        <Route path="/yourcomments" element={<YourComments />} />
        {/* Add a catch-all for undefined routes */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
