// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection and models
const sequelize = require('./config/database');
const User = require('./models/User');
const Post = require('./models/Post');

// Define associations
User.hasMany(Post, { foreignKey: 'user_id' });
Post.belongsTo(User, { foreignKey: 'user_id' });

// Sync Database
sequelize
  .sync()
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch((err) => {
    console.error('Unable to sync database:', err);
  });

// Routes
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the Social Media API!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Server error:', err);
});
