import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button, Img, List, Text } from "components";
import Navbar from "components/Navbar";
import "./index.css";

const ProfilePage = () => {
  const navigate = useNavigate();
  const gender_types = ['Male', 'Female', 'Other'];
  const sexo_types = ['Straight', 'Gay', 'Other'];

  function ToggleGroupGender(){
    const [active, setActive] = useState(gender_types[2]);
    return <div className="profile-button-group">
      {gender_types.map(type =>(
        <ButtonToggle 
          className="profile-buttons"
          active={ active === type }
          onClick={ () => setActive(type)}
        > {type}
        </ButtonToggle>
      ))}
    </div>
  }

  function ToggleGroupSexO(){
    const [active, setActive] = useState(sexo_types[2]);
    return <div className="profile-button-group">
      {sexo_types.map(type =>(
        <ButtonToggle 
          className="profile-buttons"
          active={ active === type }
          onClick={ () => setActive(type)}
        > {type}
        </ButtonToggle>
      ))}
    </div>
  }

  const ButtonToggle = styled(Button)`
    opacity: 0.7;
    background: #D9D9D9;
    ${({ active }) => active && 
      `
      opacity: 1;
      background: #6A492A;
    `}
  `;

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
        
        
      <div className="profile-screen">
        <div className="header">
          <h1>Profile:</h1>
          {/* <div className="profile-edit-button">
            <button>Edit</button>
            {/* <button onClick={handleSubmit}>Edit Idea</button> 
          </div>  */}
        </div>

        <div className=" profile-info">
       
          <div className="profile-user-info">
            <div className="profile-username">
              <h1>Username:</h1>
              <div className="profile-bubbles">
                <h2>@npb226</h2>
              </div>

            </div>
            <div className="profile-email">
              <h1>Email:</h1>
              <div className="profile-bubbles">
                <h2>npb226@lehigh.edu</h2>
              </div>

            </div>
          </div> {/* PROFILE user info */}

          <div className="profile-toggles">
            <div className="profile-gender">
                <h1>Gender Identity:</h1>
                <ToggleGroupGender/>
              </div>
              <div className="profile-sexo">
                <h1>Sexual Orientation:</h1>
                <ToggleGroupSexO/>
              </div>
          </div> {/* PROFILE toggles */}
        </div> {/* PROFILE Info */}

        <div className="profile-note">
            <h1>Note:</h1>
            <div className="profile-note-bubble">

            </div>
          </div> {/* PROFILE Notes */}

        <div className="button-footer">
          <div className="profile-update-button">
            <button onClick={() => navigate("/allideas")}>Update</button>
          </div>
        </div>
        
      </div> {/* PROFILE Screen */}
      
      </div>
    </>
  );
};

export default ProfilePage;
