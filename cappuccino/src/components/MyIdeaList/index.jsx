import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./index.css";


const MyIdeaList = ({ title }) => {
    const [ideas, setIdeas] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem('username');

    // Navigate to Add Idea page
    const handleAddIdeaClick = () => {
        navigate('/addidea');
    };
  
    // Fetch posts from the backend
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:5001/posts/user/${storedUsername}`, {
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
          {/* {ideas?.map(renderIdea)} */}
          
          
          {error ? (
            <p style={{ color: 'red' }}>Error fetching ideas: {error.message}</p>
            ) : (
                ideas.map((idea) => (
                    <div className='idea-preview'>
                <div key={idea.id} className="idea">
                    <div key={idea.id} className="idea-content">
                    <div className='message-side'>
                    <div className='message'>
                        <h1>{idea.title}</h1>
                        <h2>{idea.body}</h2>
                    </div>
                        <div className='userbame-box'>
                        <div className='username'>@ {idea.User?.username || localStorage.getItem('username')}</div>
                        </div>
                    </div>
                    
                    <div className="update-buttons"> 
                        <div className="edit-button"> 
                            <button>Edit</button>
                        </div>
                        <div className="edit-button">
                            <button onClick={() => { deletePost(idea.id) }}> Delete</button>
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

export default MyIdeaList;


 

