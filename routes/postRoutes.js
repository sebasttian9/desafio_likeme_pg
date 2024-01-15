import express from 'express';
import { getHola, getAllPosts, addPost, updatePost, deletePost } from "../src/controllers/postsController.js";

const router = express.Router();

router.get('/', getHola);
router.get("/posts", getAllPosts);
router.post("/posts", addPost);
router.put("/posts/like/:id", updatePost);
router.delete("/posts/:id", deletePost);

export default router;