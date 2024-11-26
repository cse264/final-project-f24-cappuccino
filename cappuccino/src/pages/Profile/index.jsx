import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button, Img, List, Text } from "components";
import Navbar from "components/Navbar";
import "./index.css";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="bg-gray-300 flex flex-col font-inter gap-[34px] items-center justify-start mx-auto p-[34px] sm:px-5 w-full">

      <Navbar 
        className="flex md:flex-col flex-row md:gap-5 items-start justify-end max-w-[1419px] mx-auto pb-[7px] pl-[7px] md:px-5 w-full"
        cicon="images/img_icon-Clogo.svg"
        weathericon="images/img_icon-weather.svg"
        hearticon="images/img_icon-heart.svg"
        homeicon="images/img_icon-home.svg"
        profileicon="images/img_icon-profile.svg"          
      />
        
        
      <div className="profile-screen">
        <div className="header">
          <h1>Profile:</h1>
        </div>

        <div className=" profile-info">
       
          <div className="profile-user-info">
            <div className="profile-username">
              <h1>Username:</h1>
              <div className="profile-bubbles">
                <h2>@aeb225</h2>
              </div>

            </div>
            <div className="profile-email">
              <h1>Email:</h1>
              <div className="profile-bubbles">
                <h2>aeb225@lehigh.edu</h2>
              </div>

            </div>
          </div> {/* PROFILE user info */}

         
        </div> {/* PROFILE Info */}

        <div className="profile-note"> </div> 
      </div> {/* PROFILE Screen */}
      
      </div>
    </>
  );
};

export default ProfilePage;