# Explanation of Backend Structure #

- backend/: Root directory of the backend project
  - config/: Contains configuration files
    - database.js: Sets up the database connection
  - middleware/: Holds custom middleware functions
    - authenticate.js: Middleware for handling authentication
  - models/: Containse models representing database tables
    - User.js: Defines the User model (users table)
    - Posts.js: Defines the Post model (posts table)
  - routes/: Contians route handlers for different parts of the API
    - auth.js: Routes for user authentication (signup and login)
    - posts.js: Routes for CRUD operations on posts
  - .env: Environment variables file
  - server.js: The main entry point of the backend application, where we set up Express, middleware, and routes

# Dependencies Used #

- express: Web framework for building the server
- sequelize: ORM for database interaction
- pg: PostgreSQL driver
- cors: Middleware to handle cross origin resource sharing
- body-parser: Middleware to parse incoming request bodies
- jsonwebtoke: For JWT authentication
- bcrypt: For password hashing
- dotenv: To manage environment variables

# For Starting the Backend #

1. cd into the backend folder
2. open a terminal
3. type 'node server.js'
4. ensure you get the following message:
  1. Sever is running on port 5001
  2. Database synced succesfully
5. Open up postman or a browser
6. access http://localhost:5001/
  1. You should get a message "Welcome to the Social Media API!"

