# Cappuccino Final Project

## Team Members
* <b>Alex Burmeister</b>
    * Project Manager
    * @aeb225
* <b>Henry Granberry</b> 
    * Backend Developer
    * @hcg225
* <b> Harry Novak</b> 
    * Backend Developer
    * @ALotofEagles
* <b> Jordan Layos</b> 
    * Front End Developer
    * @jol225
* <b> Earl Chambers</b> 
    * Front End Developer
    * @elc225


## Description
Cappuccino is a social media app that allows users to share their ideas on a collaborative message board. Regular users can view posts from others, as well as create, edit, and delete their own posts. Admin users have additional privileges, including the ability to delete any user's posts. Additionally, all users can access the weekly weather forecast for their local area, making Cappuccino a platform that combines creativity and practical information.

## User Story

- A user opens the app and lands on the login screen:
  - A new user can sign up with a unique username and password.
  - An existing user can log in using their username and password.

- After logging in, the user is directed to the **"All Ideas"** board, where they can scroll through and view all previously posted ideas.

- Users can post an idea by clicking the **"Add Idea"** button, allowing them to submit an idea with a title and a message.

- **Permissions**:
  - **Normal Users**: Can view, create, edit, and delete their own posts.
  - **Admin Users**: Have extended privileges, including the ability to delete any user's posts.

- The navigation bar at the top of the page allows users to:
  - **Weather Icon**: View the local weather.
  - **Heart Icon**: View all ideas they’ve posted under **"Your Ideas"**.
  - **Home Icon**: Navigate back to the **"All Ideas"** board to see posts from all users.
  - **Profile Icon**: View their profile, which includes their:
    - Username
    - User status (Admin or Normal User)
    - A sign-out button
  - **Cappuccino Logo (Easter Egg)**: Access the **"About Us"** page to meet the team behind Cappuccino.



## Functionality
* <b>User Accounts:</b>
    * <i>Normal User:</i> can view posts, create posts, and delete or edit only their own posts
    * <i>Admin User:</i> has additional privileges to delete any user's posts

* <b>Database:</b> <i>Elephant SQL</i>

* <b>Interactive UI:</b> <i>React</i>

* <b>Library or framework not discussed in class:</b>
    * <i>Tailwind CSS</i>
    * <i>Styled-Components</i>
    * <i>JWT Decode</i>
    * <i>JavaScript XML (JSX)</i>: syntax extension for JavaScript used in React
    * <i>Figma</i>: used for prototyping and UI/UX design

* <b>Outside REST API:</b> <i>OpenWeatherMap API</i>
    * provides detailed weather forecasts based on the user's geographic location

## Technical Stack
### Database:
Elephant SQL Queries:

```
CREATE TABLE posts (
    id SERIAL PRIMARY KEY                         -- Auto-incrementing ID for each post
    title VARCHAR(255) NOT NULL,                  -- Title of the post
    body TEXT NOT NULL,                           -- Body/content of the post
    user_id INT NOT NULL,                         -- ID of the user who created the post
    likes INT DEFAULT 0,                          -- Number of likes for the post, default is 0
    FOREIGN KEY (user_id) REFERENCES users(id)    -- Foreign key linking to the users table
);
```

```
CREATE TABLE users (
    id SERIAL PRIMARY KEY,                        -- Auto-incrementing ID
    username VARCHAR(255) UNIQUE NOT NULL,        -- Username should be unique
    password VARCHAR(255) NOT NULL                -- Password is required
);
```


<b>Tables</b>
* <u>Users Table:</u>
    * <b>id (integer):</b> Primary key that uniquely identifies each user.
    * <b>username (varchar):</b> Stores the username of the user.
    * <b>password (varchar):</b> Stores the hashed password of the user for authentication purposes.

* <u>Posts Table:</u>
    * <b>id (integer):</b> Primary key that uniquely identifies each post.
    * <b>title (varchar):</b> The title of the post.
    * <b>body (text):</b> The content of the post.
    * <b>user_id (integer):</b> Foreign key referencing the id column in the users table, establishing a relationship between a post and its author.
    * <b>likes (integer):</b> Stores the number of likes a post has received.

<b>Relationships</b>
* There is a one-to-many relationship between the users table and the posts table:
Each user can create multiple posts (one user → many posts).
* The user_id column in the posts table links each post to its respective user in the users table.


### Backend:

For full details, see: [structure.md](backend/structure.md)

<b>Routes:</b>

* <u>auth.js file</u>
    * <b>POST /auth/signup</b> - Register a new user
    * <b>POST /auth/login</b> - Log in an existing user and generate a token

* <u>posts.js file</u>

    * <b>POST /posts/</b> - Create a new post
    * <b>GET /posts/</b> - Get all posts
    * <b>GET /posts/:id</b> - Get a specific post by ID
    * <b>PUT /posts/:id</b> - Update a specific post by ID
    * <b>DELETE /posts/:id</b> - Delete a specific post by ID
    * <b>GET /posts/user/:username</b> - Get all posts by a specific username

### Front End:

* <u>Framework</u>
    * <b>React:</b> The frontend of the application is built using React, a popular JavaScript library for building dynamic and responsive user interfaces.
* <u>Styling</u>
    * <b>Tailwind CSS:</b> Used for styling the application with a utility-first CSS framework, enabling rapid development of responsive designs.
    * <b>Styled-Components:</b> Employed for scoped CSS-in-JS styling, ensuring modular and maintainable styles for React components.

* <u>Prototyping</u>
    * <b>Figma:</b>The user interface was designed and prototyped in Figma to visualize the app's layout and user experience before development.

* <u>Routing</u>
    * <b>React Router:</b> Implemented for navigating between pages like login, idea boards, and user profiles seamlessly.

* <b>API Integration:</b>
Integrated with the backend using RESTful APIs to manage authentication, user ideas, and the weather forecast feature.


* <b>pages/</b>
    * AboutUs/
    * AddIdea/
    * AllIdeas/
    * LogIn/
    * Profile/
    * Weather/
    * YourIdeas/
    * NotFound.jsx


### Weather API:

The API functionality implemented in our app fetches and displays detailed weather forecasts based on the user's current geographic location. It uses the <b>OpenWeatherMap API</b> to retrieve a 5-day weather forecast, broken into 3-hour intervals. Our app only displays the next 24 hours. The system first retrieves the user's geolocation using the browser's navigator.geolocation API to obtain latitude and longitude coordinates. These coordinates are then sent to a helper function, which interacts with the OpenWeatherMap API to retrieve the weather data. <https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial>

The app uses three key states (weather, error, and loading) to provide a responsive and user-friendly interface. Users can click a button to fetch their local weather, with a spinner displayed during the loading process. The forecast includes temperature, humidity, wind speed, and visibility, accompanied by intuitive icons (e.g., cloudy, sunny, partly cloudy) for easy visualization.


## Install & Run

* open a new terminal
* git clone <https://github.com/cse264/final-project-f24-cappuccino.git>
* cd final-project-f24-cappuccino/cappuccino

* <b>Start Backend</b>
    * open a new terminal
    * cd final-project-f24-cappuccino/cappuccino/backend
    * npm install cors
    * touch .env in the root of the backend/ (replace touch with New-Item for windows)
        ```
        DB_NAME=sfctizgx
        DB_USER=sfctizgx
        DB_PASS=oPSR69xCjlCIOqykl_HiH8rRtdw2h_wU
        DB_HOST=peanut.db.elephantsql.com
        DB_PORT=5432
        PORT=5001
        JWT_SECRET=TeamCappuccino22
        ```
    * save file
    * node server.js
    * should see message that says:
        * Server is running on port 5001
        * Database synced successfully.
    * open http://localhost:5001/ in a browser
        * should see message: Welcome to the Social Media API!

* <b>Start Front End</b>
    * open http://localhost:3000/ in a browser
    * open a new terminal
    * cd final-project-f24-cappuccino/cappuccino
    * npm install react
    * npm start
    * Should see message that says:
        * cappuccino@0.1.0 start
        * react-scripts start



## Deliverables
* <b>Proposal:</b> Due Monday Oct 28, 2024 (email from @jol225 on 10/18/24)
* <b>Presentation:</b> Class on Monday Dec 2, 2024
* <b>Demo:</b> [Cappuccino Demo Link](https://drive.google.com/file/d/1Y0gLsfPQ9moW96k4cVd4GVHSbdgrrmYj/view?usp=sharing)
* <b>Code: </b> Due Wednesday Dec 3, 2024
