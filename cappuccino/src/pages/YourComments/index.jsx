import React from "react";

import { Img, Text } from "components";
import Navbar from "components/Navbar";
import AllideasScreen from "components/YourIdeasScreen";
import { useNavigate } from "react-router-dom";
import "./index.css";
  

const YourCommentsPage = (props) => {
  const navigate = useNavigate();


  return (
    <>
      <div className="bg-gray-300 flex flex-col font-inter gap-[34px] items-center justify-start mx-auto p-[34px] sm:px-5 w-full">

      <Navbar 
        className="flex md:flex-col flex-row md:gap-5 items-start justify-end max-w-[1419px] mx-auto pb-[7px] pl-[7px] md:px-5 w-full"
        cicon="images/img_icon-Clogo.svg"
        commenticon="images/img_icon-comment.svg"
        hearticon="images/img_icon-heart.svg"
        homeicon="images/img_icon-home.svg"
        profileicon="images/img_icon-profile.svg"          
      />
        
        
      <div className="your-comments-screen">
        <div className="comment-screen-header">
          <h1>Your Comments:</h1>
          <div className="new-comment-button">
            <button onClick={() => navigate("/addcomment")}>New</button>
            {/* <button onClick={handleSubmit}>Edit Idea</button> */}
          </div> 
        </div>
      </div>
      </div>
    </>
  );
};

export default YourCommentsPage;
