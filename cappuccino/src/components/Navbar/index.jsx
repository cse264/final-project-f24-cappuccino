import React from "react";
import { useNavigate } from "react-router-dom";
import { Img, Text } from "components";
import "./index.css";

const Navbar = (props) => {
  const navigate = useNavigate();

  return (
    <>
    <div className="navbar">
      
      <div className="navbar-logo"> {/* Cappuccino Logo */}
        <div className="navbar-logo-c">
        {!!props?.cicon ? (  
          <Img 
            alt="logo"
            src={props?.cicon}
            onClick={() => navigate("/aboutus")}
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
              alt="home"
              src={props?.homeicon}
              style={{ cursor: 'pointer' }}
              onClick={() => navigate("/posts")}
              
            />
          ) : null}
        </div>

        <div className="icon-profile">
          {!!props?.profileicon ? (
            <Img
              alt="user"
              src={props?.profileicon}
              style={{ cursor: 'pointer' }}
              onClick={() => navigate("/profile")}
            />
        ) : null}
        </div>

      </div>
      </div>
    </>
  );
};

Navbar.defaultProps = { appuccino: "appuccino" };

export default Navbar;
