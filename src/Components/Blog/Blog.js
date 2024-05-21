import React from "react";
import data from "../../Content/Blog/Blog.json";
const Blog = () => {
  return (
    <div className="my-24 md:px-16 sm:px-8 px-2">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 ">
        {data.blog.map((value) => (
          <div className="">
            <img
              src={value.img}
              alt=""
              className="md:w-[600px] w-[700px] rounded-md mb-5"
            />
            <div className="grid space-y-3">
              <h4 className="text-lg font-semibold hover:text-[#F77055]">
                {value.title}
              </h4>
              <p className="tracking-wide">{value.description}</p>
              <p className="text-gray-500">{value.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
