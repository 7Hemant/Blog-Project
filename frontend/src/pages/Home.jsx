import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const fetchFunc = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/v1/blog/allpost");
      const resdata = await res.json();

      const transformData = resdata.Blogpost.map((tdata) => {
        return {
          title: tdata.title,
          description: tdata.description,
          imageUrl: tdata.image,
          author: tdata.author,
        };
      });
      setData(transformData);
    } catch (error) {
      setData(error);
    }
  };
  console.log(data);
  useEffect(() => {
    fetchFunc();
  }, fetchFunc);
  return (
    <div className="mt-[7rem] flex flex-col  items-center ">
      {data.map((post, index) => (
        <div className="border rounded w-3/4   p-4 m-4 shadow" key={index}>
          <div className="img">
            <img src={post.imageUrl} alt="image" />
          </div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <h1>{post.author}</h1>
        </div>
      ))}
    </div>
  );
};

export default Home;
