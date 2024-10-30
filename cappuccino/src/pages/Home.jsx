import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This is our homepage :){" "}
      </p>
      <ul>
        <li>
          <Link to="/logo1">Logo1</Link>
        </li>
        <li>
          <Link to="/logo2">Logo2</Link>
        </li>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
        <li>
          <Link to="/allideas">AllIdeas</Link>
        </li>
        <li>
          <Link to="/addidea">AddIdea</Link>
        </li>
        <li>
          <Link to="/editcomment">EditComment</Link>
        </li>
        <li>
          <Link to="/addcomment">AddComment</Link>
        </li>
        <li>
          <Link to="/yourcomments">YourComments</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/yourideas">YourIdeas</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
