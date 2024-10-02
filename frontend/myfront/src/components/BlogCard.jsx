import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <Link
      to="/singleBlog/id"
      className="bg-white shadow-md overflow-hidden rounded-lg"
    >
      <div className="flex flex-col">
        <img src="https://picsum.photos/300/200" alt="blog images" />
        <div className="p-2">
          <h1 className="mt-1 text-xl text-left">title</h1>
          <p className="text-sm text-left opacity-70">Blog Description</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
