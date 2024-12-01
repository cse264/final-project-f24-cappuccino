import React, { useState } from 'react';
import Navbar from "components/Navbar";
import "./index.css";


const CreatePost = () => {
  const [title, setTitle] = useState(''); // State for title
  const [body, setBody] = useState(''); // State for body
  const [message, setMessage] = useState(''); // State for feedback message

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh
    setMessage(''); // Clear previous messages

    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    if (!token) {
      setMessage('You must be logged in to create a post.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include the JWT token
        },
        body: JSON.stringify({ title, body }), // Send title and body as JSON
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Post created successfully!');
        setTitle(''); // Clear the input fields
        setBody('');
      } else {
        setMessage(data.error || 'Failed to create post');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-gray-300 flex flex-col font-inter gap-[34px] items-center justify-start mx-auto p-[34px] sm:px-5 w-full">
        <Navbar
            className="flex md:flex-col flex-row md:gap-5 items-start justify-end max-w-[1419px] mx-auto pb-[7px] pl-[7px] md:px-5 w-full"
            cicon="images/img_icon-Clogo.svg"
            weathericon="images/img_icon-weather.svg"
            hearticon="images/img_icon-heart.svg"
            homeicon="images/img_icon-home.svg"
            profileicon="images/img_icon-profile.svg"
        />
    
        <div className="all-ideas-screen">
            <div className="login-header">
                <h1>Create a New Post</h1>
            </div> 

            <div className="login-elements">
            <div className="message-entry">
                
                <form onSubmit={handleSubmit}>
                    <div classname="message-credentials">
                        <div>
                        <label htmlFor="title">Title: </label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        </div>

                        <div>
                        <label htmlFor="body">Body: </label>
                        <textarea
                            id="body"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            required
                        />
                        </div>
                    </div>

                <div className='login-footer'>
                    <div className="create-post-button">
                        <button type="submit">Create Post</button>
                    </div>
                    <div className = "login-switch">
                        {message && <p>{message}</p>} {/* Feedback message */} 
                    </div>
                </div>
                </form>
                </div>
      
      
      </div>

        
   
    </div>
    </div>
   
  );
};

export default CreatePost;
