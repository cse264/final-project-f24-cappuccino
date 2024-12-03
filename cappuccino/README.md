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

## Functionality
* <b>User Accounts:</b>
    * <i>Normal User:</i> can view posts, create posts, and delete or edit only their own posts
    * <i>Admin User:</i> has additional privileges to delete any user's posts

* <b>Database:</b> <i>Elephant SQL</i>

* <b>Interactive UI:</b> <i>React</i>

* <b>Library or framework not discussed in class:</b>
    * <i>Tailwind CSS</i>
    * <i>JavaScript XML (JSX)</i>: syntax extension for JavaScript used in React
    * <i>Figma</i>: used for prototyping and UI/UX design

* <b>Outside REST API:</b> <i>OpenWeatherMap API</i>
    * provides detailed weather forecasts based on the user's geographic location

## Technical Stack
### Database:
Elephant SQL
* DB_NAME=sfctizgx
* DB_USER=sfctizgx
* DB_PASS=oPSR69xCjlCIOqykl_HiH8rRtdw2h_wU
* DB_HOST=peanut.db.elephantsql.com
* DB_PORT=5432
* PORT=5001
* JWT_SECRET=TeamCappuccino22

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

### Front End:

### Weather API:

The API functionality implemented in our app fetches and displays detailed weather forecasts based on the user's current geographic location. It uses the <b>OpenWeatherMap API</b> to retrieve a 5-day weather forecast, broken into 3-hour intervals. Our app only displays the next 24 hours. The system first retrieves the user's geolocation using the browser's navigator.geolocation API to obtain latitude and longitude coordinates. These coordinates are then sent to a helper function, which interacts with the OpenWeatherMap API to retrieve the weather data. <https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial>

The app uses three key states (weather, error, and loading) to provide a responsive and user-friendly interface. Users can click a button to fetch their local weather, with a spinner displayed during the loading process. The forecast includes temperature, humidity, wind speed, and visibility, accompanied by intuitive icons (e.g., cloudy, sunny, partly cloudy) for easy visualization.


## Install & Run


## Deliverables
* <b>Proposal:</b> Due Monday Oct 28, 2024 (email from @jol225 on 10/18/24)
* <b>Presentation:</b> Class on Monday Dec 2, 2024
* <b>Demo:</b> Cappuccino Demo Link
* <b>Code: </b> Due Wednesday Dec 3, 2024
