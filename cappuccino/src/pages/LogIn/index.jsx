import React from "react";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"; //npm install jwt-decode
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import Navbar from "components/Navbar";
import "./index.css";

let jwt_string = "empty";

const backendUrl = "http://localhost:4567";

const setSession = async (jwt_string) => {
  try {
    const params = new URLSearchParams();
    params.append('jwtToken', jwt_string);

    const response = await fetch(`${backendUrl}/login`, {
      method: 'POST',
      headers: {
        //'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
      },
      body: params,
    });

    /**
     * Checks if the network response indicates success.
     * @type {boolean} response.ok - A boolean indicating whether the network response was successful.
     */
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

  } catch (error) {
    /**
     * Handles errors that may occur during the idea creation process.
     * @param {Error} error - The error object representing the issue.
     */
    console.error('Error creating an idea:', error);
  }
};

const LogInPage = () => {
  const navigate = useNavigate();
  const google = window.google
  const [ user, setUser ] = useState({});
  

// function handleCallbackResponse(response){
//   jwt_string = response.credential;
//   console.log("Encoded JWT ID token: " + response.credential);
//   var userObject = jwtDecode(response.credential); // Use jwtDecode instead of jwt_decode
//   console.log(userObject);
//   setUser(userObject);
//   document.getElementById("signInDiv").hidden = true;

//   //On Success
//   //Alex Front End
//   var xhr = new XMLHttpRequest();
//   xhr.open('POST', `${backendUrl}/login`);
//   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//   xhr.onload = function(){
//     console.log("Signed in as: " + xhr.responseText);
//   };
//   setSession(xhr.responseText);
//   xhr.send(jwt_string);
// }

function handleCallbackResponse(response) {
  jwt_string = response.credential;
  console.log("Encoded JWT ID token: " + response.credential);
  var userObject = jwtDecode(response.credential);
  console.log(userObject);
  setUser(userObject);
  document.getElementById("signInDiv").hidden = true;

  //On Success
  //Alex Front End
  var xhr = new XMLHttpRequest();
  xhr.open('POST', `${backendUrl}/login`);
  // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    console.log("Signed in as: " + xhr.responseText);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Handle success here if needed
        console.log("Request successful");
      } else {
        // Handle error here if needed
        console.log("Request failed");
      }
    }
  };

  xhr.send(JSON.stringify({ jwtToken: jwt_string }));
}








  // const setSession = (token) => {
  //   // Here, 'token' represents the token received after successful authentication
  
  //   // You can store the token in localStorage or sessionStorage for later use
  //   localStorage.setItem('accessToken', token);
  
  //   // Optionally, perform additional tasks based on the token or user data received
  //   // For instance, navigate to a different page or perform other logic
  //   // Example:
  //   // navigate('/dashboard'); // assuming you have a navigation function like useNavigate()
  
  //   // Or update the state to indicate the user is authenticated
  //   // Example:
  //   // setIsAuthenticated(true); // assuming you have a state variable for authentication status
  // };
  

  

  


  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      //client_id: "808694742126-elb1rapq9t23c3a49f81uj786vg52dta.apps.googleusercontent.com", //cappuccino
      client_id: "622150390404-qjtotnieh98c4c8nv91i9qjt8srub437.apps.googleusercontent.com", //alex
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );

    google.accounts.id.prompt();
  }, []);

  // If we have no user: sign in button
  // If we have a user: show the log out button

  return (
    <div className="bg-gray-300 flex flex-col font-inter gap-[34px] items-center justify-start mx-auto p-[34px] sm:px-5 w-full">
      <div className="login-screen">
          <div className="login-header">
            <Navbar 
              className="flex md:flex-col flex-row md:gap-5 items-start justify-end max-w-[1419px] mx-auto pb-[7px] pl-[7px] md:px-5 w-full"
              cicon="images/img_icon-Clogo.svg"      
            />
          </div>

          {/* SIGN IN BUTTON */}
          <div className="signed-in">
            <div id="signInDiv"></div>
            
              
          {user &&
            <div className="username">
              <img scr={user.picture}></img>
              <h3>{user.name}</h3>
            </div>
            
          } 

        {/* SIGN OUT BUTTON */}
          { Object.keys(user).length != 0 &&
            <div className="sign-out-button">
            <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
            </div>
          }
        
      </div>
      </div>
    </div>
  );
};

export default LogInPage;
