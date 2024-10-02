import BlogCard from "../components/BlogCard";

const Home = () => {
  const data = [
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/200/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/208/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
    {
      title:
        "Is it worth investing in real estate ? Advantages and disadvantages",
      image: "https://picsum.photos/id/207/300/200",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
      createdon: "24 Jan, 2024",
      comments: "0",
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-5 px-40 mx-auto gap-5">
      {data.map((x) => (
        <BlogCard />
      ))}
    </div>
  );
};

export default Home;
