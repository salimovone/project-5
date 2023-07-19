import React from "react";
import Title from "../Title";
import Cards from "./Cards";

const Blog = () => {
  return (
    <div className="w-full bg-[#fafafa] py-20">
      <div className="max">
        <div className="service-grid gap-10 mb-10">
          <Title name={"BLOG"} title={"Recent Blog"} />
          <div className="w-full">
            <p className="p6 mt-10">
              Far far away, behind the lorem word mountains, ipsum far from the countries
              Vokalia and Consonantia, there dolor live the blind sit texts.
            </p>
          </div>
        </div>

        <Cards />

      </div>
    </div>
  );
};

export default Blog;
