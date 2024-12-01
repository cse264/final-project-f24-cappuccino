import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button, Img, List, Text } from "components";
import Navbar from "components/Navbar";
import "./index.css";

const ProfilePage = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem('username');

  
  let status = "normal user"; // Use let for reassignment

  const adminUsers = ["alex", "jordan", "henry", "harry", "earl"]; // List of admin usernames
  
  if (adminUsers.includes(username)) {
    status = "admin"; // Reassign status if the username is in the admin list
  }

  
  

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
          <div className="sign-out-button">
            <button onClick={() => navigate("/")}>Sign Out</button>
          </div>
        </div>

        <div className=" profile-info">
       
          <div className="profile-user-info">
            <div className="profile-username">
              <h1>Username:</h1>
              <div className="profile-bubbles">
                <h2>{username}</h2>
              </div>

            </div>
            <div className="profile-email">
              <h1>Status:</h1>
              <div className="profile-bubbles">
                <h2>{status}</h2>
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