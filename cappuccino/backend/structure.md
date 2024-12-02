# Explanation of Backend Structure #

- backend/: Root directory of the backend project
  - config/: Contains configuration files
    - database.js: Sets up the database connection
      - Purpose: Establishes a connection to the postgreSQL database using Sequelize, which is an object-relational mapping library for Node.js
      - Explanation:
        - Sequalize Initialization:
          - Creates a new sequalize instance with the provided daabase credentials
          - Selects the dialect to 'postgres' to indicate the use of PostgreSQL
          - Disables logging for cleaner console output
        - Exports:
          - Exports the sequelize instance for use in other parts of the application
  - middleware/: Holds custom middleware functions
    - authenticate.js: Middleware for handling authentication
      - Purpose: Provides authentication middleware to protect routes that require a logged in user. It verifies JSON web tokens sent in the authroization header of HTTP requests
      - Explanation:
        - Token Extraction:
          - Retrieves the token from the authroization header, expecting it to be in the format Bearer <token>
        - Token verification:
          - Uses jwt.vrify() to validate the token with the secret key
          - If valid, it decodes the token and attatches the userId to the req object
        - Error handling:
          - Returns 401 unauthorized if no token is provided
          - Returns 403 forbidden if the token is invalid
        - usage:
          - Applied as middleware to routes that require authentication
  - models/: Containse models representing database tables
    - User.js: Defines the User model (users table)
      - Purpose: Defines the User model, representing the users table in the database. manges user data such as usernames and passwords
      - Explanation:
        - Fields:
          - id: Primary key, auto incremnted integer
          - username: String, unique and required
          - password: String, required
        - Options: 
          - tableName: Specifies the exact table name in the database
          - timestamps: disables automatic addition of createdAt and updatedAt fields
        - Export:
          - Exports the User model for use in other files
    - Posts.js: Defines the Post model (posts table)
      - Purpose: Defines he Post model, representing the posts table in the database. manages post data such as titles, bodies, likes and the associated user
      - Explanation: 
        - Fields:
          - id: primary key, auto incremented integer
          - title: string up to 255 characters, required
          - body: text, required
          - likes: integer, defaults to 0
          - user_id: integer, required; foreign key refrencing users.id
        - Options:
          - tableName: specifies the exact table name in the database
          - timestamps: disables automatic addition of createdAt and UpdatedAt fields
        - Exports:
          - Exports the Post model for use in other files
  - routes/: Contians route handlers for different parts of the API
    - auth.js: Routes for user authentication (signup and login)
      - Purpose: Handles user authentication, including user registration (signup) and login. Manages the creation of new users and the issuance of JWT tokens upon successful login
      - Explanation:
        - Dpenedencies:
          - bcrypt: Library for hashing passwords securely
          - jsonwebtoken: Library for creating JWT tokens
        - Routes:
          - POST /auth/signup:
            - Validates that the username is unique
            - Hashes the password using bcrypt
            - Creates a new user in the database
            - Returns a success mesage with the user's ID and username
          - POST /auth/login:
            - Verfiies that the username exists
            - Compares the provided password with the stores hashed password
            - Issues a JWT token valid for 1 hour if authentication is successful
            - Returns a success message with the token
        - Error Handling:
          - Returns appropriate HTPP status codes and error messages for various failure cases
    - posts.js: Routes for CRUD operations on posts
      - Purpose: Manages CRUS operations for posts. Some routes require authentication and authorization
      - Dependencies:
        - Authenticate: Middleware to protect routes that require a logged in user
      - Routes:
        - POST /posts (create a new post):
          - Requires authentication
          - Creates a new post associated with the authenticated user
          - Returns a sucess message and the created post
        - GET /posts (get all posts): 
          - Publically accessible
          - Retrieves all posts, including the usernames of the authors
        - GET /posts/:id
          - Publically accessible
          - Retrieves a single post by ID, incluing the author's username
          - Returns 404 not found if the post doesnt exist
        - PUT /posts/:id
          - Requires authentication
          - Only the author of the post can update it
          - Updates the post's title and body
          - Returns a success message and the updated post
        - DELETE /posts/:id
          - Requires authentication
          - Only the author fo the post can delete it
          - Deletes the post from the database
          - Returns a sucess message
      - Error Handling:
        - Returns appropriate HTTP status codes and error messages for failure cases
  - .env: Environment variables file
  - server.js: The main entry point of the backend application, where we set up Express, middleware, and routes
    - Purpose: Acts as the main entry point of the backend application. Sets up the express server, intializes middleware, syncs the database, defines model associations, and registers routes
    - Explanation:
      - Imports: 
        - Express: web framework for building the server
        - cors: Middleware to enable cross-origin resource sharing
        - body-parser: middleware to parse JSON request bodies
        - dotenv: loads environment variables from the .env file
      - middleware setup: 
        - CORS: allows the frontend application to communicate with the backend
        - Body parser: automatically parses incoming JSON data and makes it available under req.body
      - Database and models:
        - Imports the squelize instance and the USer and Post models
        - Associations:
          - Defines the relationship between users and posts
          - User.hasMany(post): a user can have multiple posts
          - Post.belongsTo(user): each post is associated with a single user
      - Database synchronization:
        - Calls sequlize.sync() to synchornize the models with the database tables
        - Logs a success message if the sync is successful, or an error message if it fails
      - Route registration:
        - Registers the authentication routes under /auth
        - Registers the psot routes under /posts
      - Default route;
        - Defines a smiple root route / that sends a welcome message
      - Server start:
        - reads the prot number from the enviroonment variable PORT or defaults to 5001
        - starts the xpress sever and listens on the specified port
        - adds an error handler to log any server errors

# How the Components Work Together #

1. **Server Intialization (server.js):**
  - The server starts by initializing the Express application
  - Middleware for CORS and body parsing is set uo
  - The database connection is established via Sequelize
  - Model associations are defined to represent relationships in the database
  - The database is synchronized with the models
  - Routes for authentication and posts are registered
2. **Models (models/User.js, models/Post.js):**
  - Models define the structure of the data and map to the corresponding databse tables
  - The User model repreents users, and the Post model represents posts
  - Associations between models are established to reflect the relationships (one-to-many)
3. **Middleware (middleware/authenticate.js):**
  - The authenticate middleware protects certain routes by verifying JWT tokens
  - It ensures that only authenticated users can access specific resources
4. **Routes:**
  - **Authentication Routes:**
    - Handles user registration and login
    - Uses the User model to interact with the users table
    - Issues JWT tokens upon successful login
  - **Post Routes:**
    - Manages CRUD operations for posts
    - Uses the Post model to interact with the posts table
    - Some rotues require authentication and ownership verificiation
5. **Database Interaction:**
  - Sequelize ORM handles communication with the PostgreSQL database
  - Models and associations facilitate queiries and operations
6. **Error Handling and Responses:**
  - Appropriate HTTP status codes and JSON responses are provided for success and error cases
7. **Security Measures:**
  - Passwords are hashed using bcrypt before storage
  - JWT tokens are used for stateless authentication
  - Sensitive information is stored in environment variables

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
  - Sever is running on port 5001
  - Database synced succesfully
5. Open up postman or a browser
6. access http://localhost:5001/
  - You should get a message "Welcome to the Social Media API!"

