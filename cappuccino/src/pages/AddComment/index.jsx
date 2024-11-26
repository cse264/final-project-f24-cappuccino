import React from "react";

import { Img, Text } from "components";
import Navbar from "components/Navbar";
import { useNavigate } from "react-router-dom";
import "./index.css";
  

const AddCommentPage = (props) => {
  const navigate = useNavigate();


  return (
    <>
      <div className="bg-gray-300 flex flex-col font-inter gap-[34px] items-center justify-start mx-auto p-[34px] sm:px-5 w-full">

      <Navbar 
        className="flex md:flex-col flex-row md:gap-5 items-start justify-end max-w-[1419px] mx-auto pb-[7px] pl-[7px] md:px-5 w-full"
        cicon="images/img_icon-Clogo.svg"
        weathericon="images/img_icon-weather.svg"
        // commenticon="images/img_icon-comment.svg"
        hearticon="images/img_icon-heart.svg"
        homeicon="images/img_icon-home.svg"
        profileicon="images/img_icon-profile.svg"          
      />
        
        
      <div className="comment-screen">
        <div className="new-comment-header">
          <h1>New Comment:</h1>
          <div className="comment-submit-button">
            <button onClick={() => navigate("/allideas")}>Submit</button>
            {/* <button onClick={handleSubmit}>Edit Idea</button> */}
          </div> 
          <div>
          <div className="link-submit-button">
            <button onClick={() => navigate("/yourideas")}>L/F</button>
          </div>
          </div>
        </div> {/* COMMENT header */}

        <div className=" comment-info">

          <div className="comment-bubbles">
            <h2>@npb226</h2>
          </div> 
        </div>{/* COMMENT info */}

      </div>
      </div>
    </>
  );
};

export default AddCommentPage;
