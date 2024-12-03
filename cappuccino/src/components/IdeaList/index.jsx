import React, { useState, useEffect } from 'react';
import { Img, Text } from "components";
import "./index.css";
import { useNavigate } from "react-router-dom";

const IdeaList = ({ title, }) => {


  const [editedTitle, setEditedTitle] = useState('');
  const [editMode, setEditMode] = useState(null);
  const [ideas, setIdeas] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

    const username = localStorage.getItem('username');
    let userStatus = "normal user"; // Use let for reassignment

    const adminUsers = ["alex", "jordan", "henry", "harry", "earl"]; // List of admin usernames
  
    if (adminUsers.includes(username)) {
        userStatus = "admin"; // Reassign status if the username is in the admin list
    }



  const handleAddIdeaClick = () => {
    navigate('/addidea'); // Navigate to the "Add Idea" page
  };

  // Fetch posts from the backend
  const fetchPosts = async () => {
    try {
      const response = await fetch(`http://localhost:5001/posts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data = await response.json();
      setIdeas(data); // Update state with the fetched posts
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchPosts(); // Initial fetch when component mounts
  }, []);


  // Delete a post
  const deletePost = async (postId) => {
    try {
      const response = await fetch(`http://localhost:5001/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        alert('Post deleted successfully!');
        fetchPosts(); // Refresh posts after successful deletion
      } else {
        alert(data.message || 'Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('An error occurred while deleting the post.');
    }
  };





  


  return (
    <div className="all-ideas-screen">
      <div className="header">
        <h1>{title}</h1>
        <div className="add-idea-button">
        <button onClick={handleAddIdeaClick}>Add Idea</button>
        </div> 
      </div>
      <div className="ideas">
        {error ? (
          <p style={{ color: 'red' }}>Error fetching ideas: {error.message}</p>
        ) : (
          ideas.map((idea) => (
            <div className="idea-preview" key={idea.id}>
              <div className="idea">
                  <div className="idea-content">
                    <div className="message-side">
                      <div className="message">
                        <h1>{idea.title}</h1>
                        <h2>{idea.body}</h2>
                      </div>
                      <div className="username-box">
                        <div className="username">
                          @{idea.User?.username || localStorage.getItem('username')}
                        </div>
                      </div>
                    </div>
                    <div className="update-buttons">
                      
                        <div className="admin-button">
                            {userStatus === 'admin' && (
                                <button onClick={() => deletePost(idea.id)}>Delete</button>
                            )}
                        </div>

                    </div>
                  </div>
            
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};


export default IdeaList;


 

