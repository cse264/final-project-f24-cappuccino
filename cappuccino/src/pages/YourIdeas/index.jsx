import React from "react";
import { useState, useEffect } from "react";

import { Button, Img, List, Text } from "components";
import Navbar from "components/Navbar";
import YourIdeasScreen from "components/YourIdeasScreen";

// const backendUrl = "http://localhost:4567";
const backendUrl = "https://team-cappuccino.dokku.cse.lehigh.edu";

const YourIdeasPage = () => {

  const [ideas, setIdeas] = useState([]);
  const [editingIdea, setEditingIdea] = useState(null);

/**
 * Fetches a list of ideas from the backend API and updates the component state with the retrieved data.
 * @async
 * @function
 * @throws {Error} Throws an error if the network response is not successful or if there's an issue with the data structure.
 */
const fetchIdeas = async () => {
  try {
    const response = await fetch(`${backendUrl}/messages`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    /**
     * If the data structure is as expected, it updates the component state with the retrieved ideas.
     * @type {object[]} mData - An array of idea objects.
     */
    if (data.mData) {
      setIdeas(data.mData);
    } else {
      console.error('Unexpected data structure:', data);
    }
  } catch (error) {
    /**
     * Handles errors that may occur during the fetching process.
     * @param {Error} error - The error object representing the issue.
     */
    console.error('Error fetching ideas:', error);
  }
};

/**
 * Deletes an idea with the specified ID from the backend API.
 *
 * @async
 * @function
 * @param {number} id - The ID of the idea to be deleted.
 * @throws {Error} Throws an error if the network response is not successful or if there's an issue with the deletion process.
 */
const handleDelete = async (id) => {
  try {
    const response = await fetch(`${backendUrl}/messages/${id}`, {
      method: 'DELETE',
    });

    /**
     * Checks if the network response indicates success.
     * @type {boolean} response.ok - A boolean indicating whether the network response was successful.
     */
    if (!response.ok) {
      throw Error('Network response was not ok');
    }

    // Refresh the list of ideas after a successful deletion.
    fetchIdeas();
  } catch (error) {
    /**
     * Handles errors that may occur during the idea deletion process.
     * @param {Error} error - The error object representing the issue.
     */
    console.error('Error deleting an idea:', error);
  }
};

/**
 * Adds a new idea to the backend API with the provided title.
 *
 * @async
 * @function
 * @param {string} title - The title of the new idea to be added.
 * @throws {Error} Throws an error if the network response is not successful or if there's an issue with adding the new idea.
 */
const addIdea = async (title) => {
  try {
    const response = await fetch(`${backendUrl}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      /**
       * The request body containing the new idea's title.
       * @type {string} mTitle - The title of the new idea.
       * @type {string} mMessage - The message content of the new idea (same as title).
       */
      body: JSON.stringify({ mTitle: title, mMessage: title }),
    });

    /**
     * Checks if the network response indicates success.
     * @type {boolean} response.ok - A boolean indicating whether the network response was successful.
     */
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Refresh the list of ideas after a successful addition.
    fetchIdeas();
  } catch (error) {
    /**
     * Handles errors that may occur during the idea creation process.
     * @param {Error} error - The error object representing the issue.
     */
    console.error('Error creating an idea:', error);
  }
};

/**
 * Increments the like count for an idea with the specified ID, both locally and on the backend.
 *
 * @async
 * @function
 * @param {number} id - The ID of the idea to be liked.
 * @throws {Error} Throws an error if the network response is not successful or if there's an issue with incrementing the likes.
 */
const incrementLikes = async (id) => {
  try {
    /**
     * Find the idea with the given ID in the component's "ideas" state.
     * @param {object} idea - An idea object from the "ideas" state.
     * @type {number} idea.mId - The unique ID of the idea.
     */
    const ideaToIncrement = ideas.find((idea) => idea.mId === id);

    /**
     * Checks if the idea with the specified ID exists in the component's state.
     * @type {boolean} ideaToIncrement - A boolean indicating whether the idea was found.
     */
    if (!ideaToIncrement) {
      console.error(`Idea with ID ${id} not found.`);
      return;
    }

    // Increment the likes locally for a responsive UI.
    const updatedIdeas = ideas?.map((idea) =>
      idea.mId === id ? { ...idea, mLikes: idea.mLikes + 1 } : idea
    );

    // Update the component state with the new "ideas" array.
    setIdeas(updatedIdeas);

    /**
     * Make an API call to increment the likes on the backend.
     * @param {string} `${backendUrl}/messages/${id}/likes` - The URL for updating the likes of the idea on the backend.
     * @param {object} headers - The request headers specifying the content type.
     * @type {string} headers['Content-Type'] - The content type of the request.
     */
    const response = await fetch(`${backendUrl}/messages/${id}/likes`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
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
     * Handles errors that may occur during the process of incrementing likes.
     * @param {Error} error - The error object representing the issue.
     */
    console.error('Error incrementing likes:', error);
  }
};

  
  /**
 * Decrements the like count for an idea with the specified ID, both locally and on the backend.
 *
 * @async
 * @function
 * @param {number} id - The ID of the idea to be unliked.
 * @throws {Error} Throws an error if the network response is not successful or if there's an issue with decrementing the likes.
 */
const decrementLikes = async (id) => {
  try {
    /**
     * Find the idea with the given ID in the component's "ideas" state.
     * @param {object} idea - An idea object from the "ideas" state.
     * @type {number} idea.mId - The unique ID of the idea.
     */
    const ideaToDecrement = ideas.find((idea) => idea.mId === id);

    /**
     * Checks if the idea with the specified ID exists in the component's state.
     * @type {boolean} ideaToDecrement - A boolean indicating whether the idea was found.
     */
    if (!ideaToDecrement) {
      console.error(`Idea with ID ${id} not found.`);
      return;
    }

    // Decrement the likes locally for a responsive UI, but only if the like count is greater than 0.
    const updatedIdeas = ideas?.map((idea) =>
      idea.mId === id && idea.mLikes > 0
        ? { ...idea, mLikes: idea.mLikes - 1 }
        : idea
    );

    // Update the component state with the new "ideas" array.
    setIdeas(updatedIdeas);

    /**
     * Make an API call to decrement the likes on the backend.
     * @param {string} `${backendUrl}/messages/${id}/likes` - The URL for updating the likes of the idea on the backend.
     * @param {object} headers - The request headers specifying the content type.
     * @type {string} headers['Content-Type'] - The content type of the request.
     */
    const response = await fetch(`${backendUrl}/messages/${id}/likes`, {
      method: 'DELETE',
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
     * Handles errors that may occur during the process of decrementing likes.
     * @param {Error} error - The error object representing the issue.
     */
    console.error('Error decrementing likes:', error);
  }
};

  

/**
 * Edits an existing idea with a new title and updates the component state.
 *
 * @function
 * @param {object} editedIdea - The idea to be edited.
 * @param {string} newTitle - The new title for the idea.
 */
const editIdea = (editedIdea, newTitle) => {
  /**
   * Find the index of the edited idea in the component's "ideas" state.
   * @param {object} idea - An idea object from the "ideas" state.
   * @type {number} idea.mId - The unique ID of the idea.
   */
  const ideaIndex = ideas.findIndex((idea) => idea.mId === editedIdea.mId);

  /**
   * Checks if the edited idea with the specified ID exists in the component's state.
   * @type {number} ideaIndex - The index of the edited idea in the "ideas" array or -1 if not found.
   */
  if (ideaIndex !== -1) {
    // Clone the "ideas" array to make changes without directly modifying the state.
    const updatedIdeas = [...ideas];
    
    // Update the title of the edited idea in the cloned "ideas" array.
    updatedIdeas[ideaIndex].mTitle = newTitle;

    // Update the component state with the updated "ideas" array.
    setIdeas(updatedIdeas);
    
    // Reset the editing state by setting the editingIdea to null.
    setEditingIdea(null);
  }
};

  
/**
 * Handles the submission of a new idea or an edited idea's title.
 *
 * @function
 */
const handleSubmit = () => {
  if (editingIdea) {
    // If editing an idea, prompt the user to enter a new title for the editingIdea.
    /**
     * The edited title for the editingIdea obtained from a user prompt.
     * @type {string | null} editedTitle - The new title for the editingIdea or null if the user cancels the prompt.
     */
    const editedTitle = window.prompt('Edit your idea', editingIdea.mTitle);

    if (editedTitle) {
      // Update the title of the editingIdea using the provided editedTitle.
      editIdea({ ...editingIdea, mTitle: editedTitle });
    }
  } else {
    // If not editing, prompt the user to enter a new idea title.
    /**
     * The title for the new idea obtained from a user prompt.
     * @type {string | null} title - The title for the new idea or null if the user cancels the prompt.
     */
    const title = window.prompt('Tell us your idea');

    if (title) {
      // Add a new idea with the provided title.
      addIdea(title);
    }
  }
};


useEffect(() => {
  fetchIdeas()
    .then((data) => {
      if (data) {
        console.log("Fetched ideas:", data);
        setIdeas(data.mData);
      }
    })
    .catch((error) => {
      console.error("Error fetching ideas:", error);
    });
}, []);



  return (
    <>
      <div className="bg-gray-300 flex flex-col font-inter gap-[34px] items-center justify-start mx-auto p-[34px] sm:px-5 w-full">
        <Navbar
          // className="flex md:flex-col flex-row md:gap-5 items-start justify-end max-w-[1419px] mx-auto pb-[7px] pl-[7px] md:px-5 w-full"
          cicon="images/img_icon-Clogo.svg"
            // commenticon="images/img_icon-comment.svg"
            weathericon="images/img_icon-weather.svg"
            hearticon="images/img_icon-heart.svg"
            homeicon="images/img_icon-home.svg"
            profileicon="images/img_icon-profile.svg"
        />

        <YourIdeasScreen
          className="bg-white-A700 flex flex-col items-center justify-start max-w-[958px] mb-[5px] mx-auto p-10 md:px-5 rounded-[20px] w-full"
          heading="Your Ideas"
          ideas={ideas}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          editIdea={editIdea} // Pass the editIdea function
          incrementLikes={incrementLikes}
          decrementLikes={decrementLikes}
        />
      </div>
    </>
  );
};

export default YourIdeasPage;
