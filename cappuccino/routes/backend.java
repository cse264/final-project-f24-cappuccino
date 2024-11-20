const express = require("express");
const router = express.Router();
const db = require("../db/connectPostgres");

// GET all posts
router.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM post");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// GET a single post by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query("SELECT * FROM post WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ error: "Failed to fetch post" });
  }
});

// CREATE a new post
router.post("/", async (req, res) => {
  const { title, body, user_id, likes } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO post (title, body, user_id, likes) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, body, user_id, likes || 0]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
});

// UPDATE a post
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, body, user_id, likes } = req.body;
  try {
    const result = await db.query(
      "UPDATE post SET title = $1, body = $2, user_id = $3, likes = $4 WHERE id = $5 RETURNING *",
      [title, body, user_id, likes, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ error: "Failed to update post" });
  }
});

// DELETE a post
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query("DELETE FROM post WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json({ message: "Post deleted", post: result.rows[0] });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Failed to delete post" });
  }
});

module.exports = router;
