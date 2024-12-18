import React, { useState, useEffect } from 'react';
import Navbar from "components/Navbar";
import IdeaList from "components/IdeaList";


const backendUrl = "http://localhost:5001";

const AllIdeasPage = () => {
  const [ideas, setIdeas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await fetch(`${backendUrl}/posts`, {
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
        setError(error);
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
            title="All Ideas"
            ideas={ideas}
            // handleDelete={handleDelete}
            // handleSubmit={handleSubmit}
            // editIdea={editIdea} // Pass the editIdea function
            // incrementLikes={incrementLikes}
            // decrementLikes={decrementLikes}
        />  
    </div>
  );
};

export default AllIdeasPage;

