import React from "react";
import { Button, Img, Text } from "components";
import Navbar from "components/Navbar";
import AllideasScreen from "components/YourIdeasScreen";



const AddIdeaPage = () => {
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
        <AllideasScreen
          className="bg-white-A700 flex flex-col items-start justify-start max-w-[958px] mb-[5px] mx-auto p-10 md:px-5 rounded-[20px] w-full"
          heading="New Idea:"
          
        />
        
      </div>
      
    </>
    
  );
};

export default AddIdeaPage;
