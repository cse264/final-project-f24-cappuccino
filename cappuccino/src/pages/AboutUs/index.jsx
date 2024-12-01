import React from "react";
import { Img, Text } from "components";
import Navbar from "components/Navbar";
import { useNavigate } from "react-router-dom";
import "./index.css";

const AboutUs = (props) => {
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

        <div className="about-us-screen">
            <div className="login-header">
               <h2>Meet Team Cappuccino</h2>

               

            {/* <div className="logo">
               <div className="absolute flex md:flex-col flex-row gap-[13px] h-max inset-[0] items-start justify-center m-auto w-[52%]">
                    <Img
                        className="h-[252px] w-[253px]"
                        src="images/img_icon-Clogo.svg"
                        alt="logo"
                    />
                    <Text
                        className="md:mt-0 mt-[70px] md:text-5xl text-[100px] text-gray-800_01"
                        size="txtInterBold100"
                    >
                        appuccino
                    </Text>
                </div>
                </div> */}
               
            </div> 

            <div className="team-members">
                <b><h3> Project Manager:</h3></b>
                <h3> Alex Burmeister</h3>
                <br></br>

            <b><h3> Backend Developers:</h3></b>
                <h3> Henry Granberry</h3>
                <h3> Harry Novak</h3>
                <br></br>

            <b><h3> Front End Developers:</h3></b>
                <h3> Jordan Layos</h3>
                <h3> Earl Chambers</h3>
            </div>

             
      

    
            </div>
        </div>

    </>
     
);

};

export default AboutUs;



{/* <Img
          className="h-[784px] m-auto max-w-[958px] w-full"
          src="images/img_screen.svg"
          alt="screen"
        />
        <div className="absolute flex md:flex-col flex-row gap-[13px] h-max inset-[0] items-start justify-center m-auto w-[52%]">
          <Img
            className="h-[252px] w-[253px]"
            src="images/img_icon-Clogo.svg"
            alt="logo"
          />
          <Text
            className="md:mt-0 mt-[70px] md:text-5xl text-[100px] text-gray-800_01"
            size="txtInterBold100"
          >
            appuccino
          </Text>
        </div>
      </div> */}