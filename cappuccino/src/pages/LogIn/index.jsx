import React, { useState } from 'react';
import "./index.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from "components/Navbar";

const AuthForm = () => {
    const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false); // Toggle between signup and login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const url = isSignup
      ? 'http://localhost:5001/auth/signup'
      : 'http://localhost:5001/auth/login';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (isSignup) {
          setMessage('Signup successful! You can now log in.');
          setIsSignup(false); // Switch to login after signup
        } else {
          setMessage('Login successful!');
          localStorage.setItem('token', data.token); // Save token for future use
          navigate('/posts'); // Navigate to /posts
          
        }
      } else {
        setMessage(data.message || (isSignup ? 'Signup failed' : 'Login failed'));
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-gray-300 flex flex-col font-inter gap-[34px] items-center justify-start mx-auto p-[34px] sm:px-5 w-full">
        <div className="login-screen">
            <div className="login-header">
                <Navbar 
                    className="flex md:flex-col flex-row md:gap-5 items-start justify-end max-w-[1419px] mx-auto pb-[7px] pl-[7px] md:px-5 w-full"
                    cicon="images/img_icon-Clogo.svg"      
                />
                 {/* <h2>{isSignup ? 'Signup' : 'Login'}</h2> */}
            </div> 
             
            <div className="login-elements">
            <div className="login-entry">

                <form onSubmit={handleSubmit}>
                    <div classname="credentials">
                        <label>Username: </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
    
                        <div>
                        <label>Password: </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        </div>
                    </div>

                    <div className='login-footer'>
                        <div className="sign-in-button">
                            <button type="submit">{isSignup ? 'Sign Up' : 'Log In'}</button>
                        </div>
                    </div>
                </form>
            </div>
      
    <div className = "login-switch">
        <p>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button type="button" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Log In' : 'Sign Up'}
            </button>
        </p>
    </div>

    <div className = "login-switch">
        {message && <p>{message}</p>}
    </div>

    

    </div>

    </div>
    </div>
    
  );
};

export default AuthForm;


// return (
//     <div className="bg-gray-300 flex flex-col font-inter gap-[34px] items-center justify-start mx-auto p-[34px] sm:px-5 w-full">
//       <div className="login-screen">
//           <div className="login-header">
//             <Navbar 
//               className="flex md:flex-col flex-row md:gap-5 items-start justify-end max-w-[1419px] mx-auto pb-[7px] pl-[7px] md:px-5 w-full"
//               cicon="images/img_icon-Clogo.svg"      
//             />
//           </div>

//           {/* SIGN IN BUTTON */}
//           <div className="signed-in">
//             <div id="signInDiv"></div>
            
              
//           {user &&
//             <div className="username">
//               <img scr={user.picture}></img>
//               <h3>{user.name}</h3>
//             </div>
            
//           } 

//         {/* SIGN OUT BUTTON */}
//           { Object.keys(user).length != 0 &&
//             <div className="sign-out-button">
//             <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
//             </div>
//           }
        
//       </div>
//       </div>
//     </div>
//   );
// };
