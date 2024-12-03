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

            <div className="aboutus-info"> 

                

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
            

            <div className="logo">
                    <svg width="231" height="231" viewBox="0 0 231 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="231" height="231" rx="30" fill="#EBDBCC"/>
                            <circle cx="115.5" cy="115.5" r="87" fill="#6A492A" stroke="#6A492A"/>
                            <rect x="160.785" y="97.079" width="42.2149" height="40.6798" fill="white"/>
                            <circle cx="115.5" cy="115.5" r="64.4737" fill="white"/>
                            <g clip-path="url(#clip0_435_521)">
                            <path d="M98.3359 84.4912C94.292 84.491 90.3388 85.69 86.9763 87.9365C83.6139 90.1831 80.9931 93.3763 79.4456 97.1124C77.898 100.848 77.4931 104.96 78.2821 108.926C79.0711 112.892 81.0185 116.535 83.8781 119.394L114.09 149.607C114.326 149.843 114.605 150.03 114.913 150.158C115.221 150.285 115.551 150.351 115.884 150.351C116.217 150.351 116.547 150.285 116.855 150.158C117.162 150.03 117.442 149.843 117.677 149.607L147.889 119.389C151.62 115.535 153.686 110.368 153.642 105.004C153.598 99.6393 151.448 94.5071 147.655 90.7139C143.861 86.9206 138.729 84.7701 133.365 84.7262C128.001 84.6823 122.834 86.7484 118.979 90.479L115.884 93.5691L112.794 90.479C110.894 88.5799 108.64 87.0736 106.158 86.0462C103.676 85.0188 101.022 84.4904 98.3359 84.4912Z" fill="#D02B2B"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_435_521">
                            <rect width="75.9868" height="75.9868" fill="white" transform="translate(77.8904 79.4254)"/>
                            </clipPath>
                            </defs>
                    </svg>
                </div>
             
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