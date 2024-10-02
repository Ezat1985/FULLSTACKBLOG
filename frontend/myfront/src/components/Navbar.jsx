import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* <header></header> */}
      <div className="border-b">
        <div className="container flex mx-auto px-5 py-5 justify-between ">
          <Link to="/">
            <span className="font-extrabold text-2xl">BLOGGER</span>{" "}
          </Link>
          <div className="flex space-x-4">
            <ul className="flex space-x-5 items-center">
              <li>
                <Link>
                  <span>Natur</span>
                </Link>
              </li>
              <li>
                <Link>
                  <span>Travel</span>
                </Link>
              </li>
              <li>
                <Link>
                  <span>Technology</span>
                </Link>
              </li>
              <li>
                <Link>
                  <span>Politics</span>
                </Link>
              </li>
            </ul>
            <button className="bg-slate-500 text-white px-2 py-1 rounded-full">
              <Link to="/createblog">Add New Post</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
