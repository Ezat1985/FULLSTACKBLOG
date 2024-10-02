import { useState } from "react";

const CreateBlog = () => {
  const menu = [
    { text: "Natur", path: "/" },
    { text: "Travel", path: "/" },
    { text: "Technology", path: "/" },
    { text: "Politics", path: "/" },
  ];
  // form config
  const inintialstate = {
    title: "",
    post: "",
  };
  const [form, setForm] = useState("inintialstate");
  const handelChange = (e) => {
    const newblog = { ...form, [e.target.name]: e.target.value };
    setForm(newblog);
    console.log(form);
  };
  return (
    <div className="flex items-center justify-center mt-5 mx-auto ">
      <div className="bg-slate-200 w-[35%] rounded-lg">
        <h1 className="text-2xl mb-5 ml-5">Create Blog Post</h1>
        <div className="flex flex-col">
          <label className="ml-5 text-gray-500" htmlFor="">
            Title
          </label>
          <input
            className="border border-gray-300 h-10 rounded-lg my-2 mx-4"
            type="text"
            name="title"
            id="title"
            value={form.title}
            onChange={handelChange}
          />
          <label className="ml-5 text-gray-500" htmlFor="">
            Catagory
          </label>
          <select
            className="border border-gray-300 h-10 rounded-lg my-2 mx-4"
            name=""
            id=""
          >
            {menu.map((x) => {
              return <option value={x.text}>{x.text}</option>;
            })}
          </select>
          <label className="ml-6 text-gray-500" htmlFor="">
            Image
          </label>
          <input className="border-gray-300 rounded-lg my-2 mx-6" type="file" />
          <label className="ml-6 text-gray-500" htmlFor="">
            Post
          </label>
          <textarea
            className="border-gray-300 rounded-lg my-2 mx-6"
            cols="30"
            rows="2"
            name="post"
            id="post"
            value={form.post}
            onChange={handelChange}
          ></textarea>
          <hr />

          <button className="bg-slate-700 rounded-lg text-white h-8 w-[100px] ml-6 mb-2 mt-2  ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
