import React, { useState, useRef } from 'react';
import { Img, Text } from "components";
import "./index.css";
import { useNavigate } from "react-router-dom";
// const IdeaList = ({ ideas, title, handleDelete, handleSubmit, incrementLikes, decrementLikes, editIdea }) => {

const MyIdeaList = ({ ideas, title, handleDelete, handleSubmit, incrementLikes, decrementLikes, editIdea }) => {


  const [editedTitle, setEditedTitle] = useState('');
  const [editMode, setEditMode] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(null);


  const handleAddIdeaClick = () => {
    navigate('/addidea'); // Navigate to the "Add Idea" page
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
                            <button>Delete</button>
                        </div>
                    </div> 
                    {/* <button onClick={() => deletePost(post.id)}>Delete</button> */}
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


 

