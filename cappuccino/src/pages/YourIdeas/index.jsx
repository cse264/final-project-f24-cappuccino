import React, { useState, useEffect } from 'react';
import Navbar from "components/Navbar";
import IdeaList from "components/IdeaList";


const backendUrl = "http://localhost:5001";

const YourIdeasPage = () => {
    const [ideas, setIdeas] = useState([]);
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
  
    useEffect(() => {
        // Retrieve the username from localStorage
        const storedUsername = localStorage.getItem('username');
        setUsername(storedUsername);
        console.log(storedUsername);
      
        const fetchIdeas = async () => {
          try {
            const response = await fetch(`http://localhost:5001/posts/user/${storedUsername}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
              },
            });
      
            if (!response.ok) {
              throw new Error('Failed to fetch ideas');
            }
      
            const data = await response.json();
            setIdeas(data); // Assuming `data` is an array of ideas
          } catch (error) {
            setError(error.message);
          }
        };
      
        fetchIdeas();
      }, []);

  
  return (
    <div className="bg-gray-300 flex flex-col font-inter gap-[34px] items-center justify-start mx-auto p-[34px] sm:px-5 w-full">
        <Navbar
            cicon="images/img_icon-Clogo.svg"
            weathericon="images/img_icon-weather.svg"
            hearticon="images/img_icon-heart.svg"
            homeicon="images/img_icon-home.svg"
            profileicon="images/img_icon-profile.svg"
        />
      
        <IdeaList
            title="Your Ideas"
            ideas={ideas}
            // handleDelete={handleDelete}
            // handleSubmit={handleSubmit}
            // editIdea={editIdea} // Pass the editIdea function
            // incrementLikes={incrementLikes}
            // decrementLikes={decrementLikes}
        />  

        {/* <h1>All Ideas</h1>
      {error ? (
        <p style={{ color: 'red' }}>Error fetching ideas: {error.message}</p>
      ) : (
        ideas.map((idea) => (
          <div key={idea.id} className="idea">
            <h2>{idea.title}</h2>
            <p>{idea.body}</p>
            <small>By: {idea.User?.username || 'Unknown'}</small>
          </div>
        ))
      )} */}    
    </div>
  );
};

export default YourIdeasPage;

