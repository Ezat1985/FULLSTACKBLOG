import express from "express";
import {
  DeleteBlog,
  getAllBlogs,
  getBlogById,
  upDateBlog,
} from "../controller/blogs.js";

const router = express.Router();

router.route("/").get(getAllBlogs);
router.route("/:id").get(getBlogById).put(upDateBlog).delete(DeleteBlog);

export default router;
