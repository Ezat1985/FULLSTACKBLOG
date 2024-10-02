import pool from "../db/server.js";

// ADD NEW BLOG
export const AddNewBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const ImageUrl = req.file.path;
  try {
    if (!req.file.path) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    if (!title || !description) {
      return res.status(418).json({ error: "file und author required" });
    }
    const results = await pool.query(
      "INSERT INTO blogs (name,author,image_url) VALUES ($1,$2,$3) RETURNING *",
      [title, description, ImageUrl]
    );

    res
      .status(201)
      .json({ message: "blog uploaded succesfully", blog: results.row[0] });
  } catch (error) {
    next(error);
  }
};
// Get All Blogs
export const getAllBlogs = async (req, res, next) => {
  try {
    const results = await pool.query("SELECT * FROM blogs");
    res(results.rows);
  } catch (error) {
    next(error);
  }
};

// Get Blog by id
export const getBlogById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await pool.query("SELECT * FROM blogs WHERE id=$1", [id]);
    res(results.rows[0]);
  } catch (error) {
    next(error);
  }
};
// Update Blog
export const upDateBlog = async (req, res, next) => {
  const { id } = req.params;
  const { title, description, image_url } = req.body;
  try {
    const results = await pool.query(
      "UPDATE blogs SET name=$1, author=$2,image_url=$3, WHERE id=$4 RETURNING *",
      [title, description, image_url, id]
    );
    res(results.row[0]);
  } catch (error) {
    next(error);
  }
};

// Delete Blog
export const DeleteBlog = async (req, res, next) => {
  const { id } = req.params;
  try {
    await pool.query(" DELETE * FROM blogs WHERE id=$1", [id]);
    res.json({ message: `The blog with id: ${id} was deleted` });
  } catch (error) {
    next(error);
  }
};
