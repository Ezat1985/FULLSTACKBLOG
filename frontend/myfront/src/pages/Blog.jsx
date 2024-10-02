const Blog = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-[60%] overflow-hidden">
        <h1 className="mt-1 text-3xl font-extrabold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis
          omnis veritatis mollitia voluptates vitae exercitationem quam
          perferendis necessitatibus hic.
        </h1>
        <div className="flex mt-4 mb-4">
          <small>Sep 26, 2024</small>
        </div>
        <img
          className="rounded-lg"
          src="https://picsum.photos/200/100"
          alt="blog foto"
        />
        <div>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, hic!
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            autem repudiandae recusandae fugit laudantium reprehenderit, vitae,
            impedit quasi distinctio omnis esse. Dignissimos quod error cum sed,
            numquam dolorum nisi porro iusto reiciendis praesentium commodi
            veritatis! Minus aut, officia tempora adipisci aspernatur, ipsam
            nihil consequuntur doloribus laboriosam sapiente cumque! Distinctio,
            rerum?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
