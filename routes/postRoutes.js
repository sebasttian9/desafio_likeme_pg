import express from 'express';
import { getHola, getAllPosts, addPost } from "../src/controllers/postsController.js";
const router = express.Router();

router.get('/', getHola);
router.get("/posts", getAllPosts);
router.post("/posts", addPost);

export default router;