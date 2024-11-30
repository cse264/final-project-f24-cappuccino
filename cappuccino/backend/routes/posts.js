// routes/posts.js
const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const Post = require('../models/Post');
const User = require('../models/User');

// Create a new post
router.post('/', authenticate, async (req, res) => {
  try {
    const { title, body } = req.body;
    const userId = req.userId;

    const post = await Post.create({
      title,
      body,
      user_id: userId,
    });

    res.status(201).json({ message: 'Post created!', post });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: User, attributes: ['username'] }],
    });
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a specific post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['username'] }],
    });
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a post
router.put('/:id', authenticate, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.user_id !== req.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const { title, body } = req.body;
    await post.update({ title, body });

    res.json({ message: 'Post updated!', post });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a post
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.user_id !== req.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await post.destroy();
    res.json({ message: 'Post deleted!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
