import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

// const Home = React.lazy(() => import("pages/Home"));
const YourIdeas = React.lazy(() => import("pages/YourIdeas"));
const Profile = React.lazy(() => import("pages/Profile"));
const YourComments = React.lazy(() => import("pages/YourComments"));
const AddComment = React.lazy(() => import("pages/AddComment"));
const EditComment = React.lazy(() => import("pages/EditComment"));
const AddIdea = React.lazy(() => import("pages/AddIdea"));
const AllIdeas = React.lazy(() => import("pages/AllIdeas"));
const LogIn = React.lazy(() => import("pages/LogIn"));
const Logo2 = React.lazy(() => import("pages/Logo2"));
const Logo1 = React.lazy(() => import("pages/Logo1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/logo1" element={<Logo1 />} />
          <Route path="/logo2" element={<Logo2 />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/allideas" element={<AllIdeas />} />
          <Route path="/addidea" element={<AddIdea />} />
          <Route path="/editcomment" element={<EditComment />} />
          <Route path="/addcomment" element={<AddComment />} />
          <Route path="/yourcomments" element={<YourComments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/yourideas" element={<YourIdeas />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
