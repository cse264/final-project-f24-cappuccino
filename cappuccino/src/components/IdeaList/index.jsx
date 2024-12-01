import React, { useState, useRef } from 'react';
import { Img, Text } from "components";
import "./index.css";
import { useNavigate } from "react-router-dom";
// const IdeaList = ({ ideas, title, handleDelete, handleSubmit, incrementLikes, decrementLikes, editIdea }) => {

const IdeaList = ({ ideas, title, handleDelete, handleSubmit, incrementLikes, decrementLikes, editIdea }) => {


  const [editedTitle, setEditedTitle] = useState('');
  const [editMode, setEditMode] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(null);


  const handleEdit = (idea) => {
    // Set the edited title in the state
    setEditedTitle(idea.mTitle);
    setEditMode(idea.mId); // Enter edit mode for this idea
  };

  const handleSave = (idea) => {
    // Call the editIdea function when the user clicks "Save"
    editIdea(idea, editedTitle);
    setEditMode(null); // Exit edit mode
  };

  const renderIdea = (idea) => {
    const isEditing = editMode === idea.mId;

    return (
      <div className="idea-preview" key={idea.mId}>
        {isEditing ? (
          // If editing, show an input field and "Save" button
          <div className="edit-field">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder="Edit your idea"
            />
            <div className="save-button">
              <button onClick={() => handleSave(idea)}>Save</button>
            </div>
          </div>
        ) : (
          // If not editing, show idea details and "Edit" link
          <div className="idea-content">
              <div className="message-side">
                <div className="message">
                  <h1>{idea.mTitle}</h1>
                </div>
              {/* <p>{idea.mMessage}</p> */}

            <div className="likes">
              <div className="like-count">
                <p>{idea.mLikes}</p>
              </div>
              <div className="like-buttons">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/005/490/492/original/realistic-freshly-brewed-cappuccino-with-foam-pattern-isolated-on-white-background-vector.jpg"
                  // src="img_favorite.svg"
                  width="20"
                  height="20"
                  alt="Cappuccino"
                  onClick={() => incrementLikes(idea.mId)} // Add onClick handler for the image
                  style={{ cursor: 'pointer' }} // Change cursor to pointer
                />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/026/237/662/original/spilled-cup-of-coffee-spray-and-drop-sloppy-handling-in-kitchen-drink-with-caffeine-cartoon-illustration-vector.jpg"
                  width="30"
                  height="30"
                  alt="Dislike"
                  onClick={() => decrementLikes(idea.mId)} // Add onClick handler for the image
                  style={{ cursor: 'pointer' }} // Change cursor to pointer
                />

                <Text
                  // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ficon%2Fcomment_5338282&psig=AOvVaw0qUXdNNfCDkVXizFSQ-ysO&ust=1699497284130000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMj94_Cus4IDFQAAAAAdAAAAABAR"
                  // width="30"
                  // height="30"
                  Comment
                  alt="Comment"
                  onClick={() => navigate("/addcomment")}
                  style={{ cursor: 'pointer' }} // Change cursor to pointer
                />
              </div>
            </div>
            </div>
              <div className="update-buttons"> 
                <div className="edit-button"> 
                  <button onClick={() => handleEdit(idea)}>Edit</button>
                </div>

                <div className="delete-button"> 
                  <button onClick={() => handleDelete(idea.mId)}>Delete</button>
                </div>
                
              </div>
            </div>
        )}
      </div>
    );
  };



  

  


  return (
    <div className="all-ideas-screen">
      <div className="header">
        <h1>All Ideas:</h1>
        <div className="add-idea-button">
            <button onClick={handleSubmit}>Add Idea</button>
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
                    <h1>{idea.title}</h1>
                    <h2>{idea.body}</h2>
                    </div>
                    </div>
                    <div className='username'>@ {idea.User?.username || 'Unknown'}</div>
                
                </div>
                </div>
                
                ))
            )}
      
        </div>
    </div>
  );

};

export default IdeaList;

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
 

