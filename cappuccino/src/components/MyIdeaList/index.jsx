import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./index.css";


const MyIdeaList = ({ title }) => {
    const [ideas, setIdeas] = useState([]);
    const [error, setError] = useState(null);
    const [editingIdea, setEditingIdea] = useState(null); // Track the idea being edited
    const [editedTitle, setEditedTitle] = useState(''); // State for edited title
    const [editedBody, setEditedBody] = useState(''); // State for edited body
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


    // Edit a post
    const editPost = async (postId) => {
        try {
        const response = await fetch(`http://localhost:5001/posts/${postId}`, {
            method: 'PUT',
            headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: editedTitle, body: editedBody }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Post updated successfully!');
            setEditingIdea(null); // Exit edit mode
            fetchPosts(); // Refresh posts after successful update
        } else {
            alert(data.message || 'Failed to update post');
        }
        } catch (error) {
        console.error('Error updating post:', error);
        alert('An error occurred while updating the post.');
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
                {editingIdea?.id === idea.id ? (
                  <div className="edit-form">
                    <input
                      type="text"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                      placeholder="Edit Title"
                    />

                    <textarea
                      value={editedBody}
                      onChange={(e) => setEditedBody(e.target.value)}
                      placeholder="Edit Body"
                    ></textarea>
                    
                    <div className='update-buttons'>
                        <div className='save-button'>
                            <button onClick={() => editPost(idea.id)}>Save</button>
                        </div>
                        <div className='edit-button'>
                            <button onClick={() => setEditingIdea(null)}>Cancel</button>
                        </div>
                    </div>

                  </div>
                ) : (
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
                      <div className="edit-button">
                        <button
                          onClick={() => {
                            setEditingIdea(idea); // Set the post being edited
                            setEditedTitle(idea.title); // Pre-fill the title
                            setEditedBody(idea.body); // Pre-fill the body
                          }}
                        >
                          Edit
                        </button>
                      </div>
                      <div className="edit-button">
                        <button onClick={() => deletePost(idea.id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyIdeaList;


 

