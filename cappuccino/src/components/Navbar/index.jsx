import React from "react";
import { useNavigate } from "react-router-dom";
import { Img, Text } from "components";
import "./index.css";

const Navbar = (props) => {
  const navigate = useNavigate();

  return (
    <>
    <div className="navbar">
      {/* <div className={props.className}> */}
      {/* <div className="flex flex-row gap-2 items-start justify-start md:mt-0 mt-3 pb-0.5 pr-0.5 w-[28%] md:w-full"> */}
      
      <div className="navbar-logo"> {/* Cappuccino Logo */}
        <div className="navbar-logo-c">
        {!!props?.cicon ? (  
          <Img 
            // className="h-16 w-16"
            alt="logo"
            src={props?.cicon}
            onClick={() => navigate("/")}
            style={{ cursor: 'pointer' }} // Change cursor to pointer
          />
        ) : null}
        </div>
        <div className="navbar-logo-appuccino">
          <Text 
            // className="mt-[3px] sm:text-[40px] md:text-[46px] text-[54px] text-gray-800_01"
            size="txtInterBold54"
          >
          {props?.appuccino}
          </Text>
        </div>
      </div>
          

      <div className="navbar-icons">

        <div className="icon-weather">
          {!!props?.weathericon ? (
            <Img
              // className="common-pointer h-[72px] md:ml-[0] ml-[642px] md:mt-0 mt-[3px] w-[72px]"
              // className="icon-comment"
              alt="weather"
              src={props?.weathericon}
              style={{ cursor: 'pointer' }}
              onClick={() => navigate("/weather")}
            />
          ) : null}
        </div>
        

        <div className="icon-heart">
          {!!props?.hearticon ? (
            <Img
              // className="common-pointer h-14 md:ml-[0] ml-[18px] md:mt-0 mt-3"
              // className="icon-heart"
              alt="favorite"
              src={props?.hearticon}
              style={{ cursor: 'pointer' }}
              onClick={() => navigate("/yourideas")}
            />
          ) : null}
        </div>

        <div className="icon-home">
          {!!props?.homeicon ? (
            <Img
              // className="common-pointer h-[67px] ml-7 md:ml-[0]"
              // className="icon-home"
              alt="home"
              src={props?.homeicon}
              style={{ cursor: 'pointer' }}
              onClick={() => navigate("/allideas")}
              
            />
          ) : null}
        </div>

        <div className="icon-profile">
          {!!props?.profileicon ? (
            <Img
              // className="common-pointer h-[74px] mb-1.5 md:ml-[0] ml-[35px] md:mt-0 mt-[3px] w-[74px]"
              // className="icon-profile"
              alt="user"
              src={props?.profileicon}
              style={{ cursor: 'pointer' }}
              onClick={() => navigate("/profile")}
            />
        ) : null}
        </div>

      </div>
      </div>
    {/* </div> */}
    {/* </div> */}
    </>
  );
};

Navbar.defaultProps = { appuccino: "appuccino" };

export default Navbar;
