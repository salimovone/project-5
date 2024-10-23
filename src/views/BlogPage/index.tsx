import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import React from "react";
import "./style.css";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { lessData, tagData } from "./data";
import Tag from "./Tag";
import Intro from "../../components/Intro";

const BlogPage = () => {
  return (
    <div className="w-full">
      <div className="mb-20 w-full">
        <Intro name={"Our Blog"} />
      </div>

      <div className="blogPage max">
        <Cards big />
        <div>
          <div className="">
            <h1 className="text-lg mb-5">Category</h1>
            {Array(4)
              .fill(0)
              .map((itm, idx) => (
                <p className="border-b flex justify-between mb-3">
                  <Link to="/" className={"text-[#1077c5]"}>
                    Interior Design
                  </Link>
                  <span className="text-[lightgray] pb-3">{"(6)"}</span>
                </p>
              ))}
          </div>

          <div className="mt-24">
            <h1 className="text-lg mb-5">Popular Articles</h1>

            {lessData.map((item) => (
              <div key={item.id} className="flex gap-8 mb-12">
                <img
                  src={item.img}
                  alt=""
                  className="w-[80px] h-[80px] object-cover"
                />
                <div className="">
                  <h1>
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </h1>
                  <p className="flex items-center mt-5 gap-3 text-[gray] text-sm">
                    <span className="flex items-center">
                      <BiCalendar /> Oct. 04. 2018
                    </span>
                    <span className="flex items-center">
                      <AiOutlineUser /> Dave Lewis
                    </span>
                    <span className="flex items-center">
                      <BiMessageDetail /> 19
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="">
            <h1 className="text-lg mb-5">Tag Cloud</h1>
            <div className="flex gap-3 flex-wrap">
              {tagData.map((item, idx) => (
                <Tag key={idx} name={item} />
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h1 className="text-lg mb-5">Category</h1>
            {Array(4)
              .fill(0)
              .map((itm, idx) => (
                <p className="border-b flex justify-between mb-3">
                  <Link to="/" className={"text-[#1077c5]"}>
                    December 2018
                  </Link>
                  <span className="text-[lightgray] pb-3">{"(30)"}</span>
                </p>
              ))}
          </div>

          <div className="mt-16">
            <h1 className="text-lg mb-5">Paragraph</h1>
            <p className="p5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              itaque, autem necessitatibus voluptate quod mollitia delectus aut,
              sunt placeat nam vero culpa sapiente consectetur similique,
              inventore eos fugit cupiditate numquam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
