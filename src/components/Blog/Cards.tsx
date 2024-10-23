import { TbMessage } from "react-icons/tb";
import React from "react";
import { data, lessData } from "../../views/BlogPage/data";
import { Link } from "react-router-dom";

type prop = {
  big?: string
}

const Cards = ({ big }:prop) => {
  let arr = big ? data : lessData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {arr.map((item) => (
        <div data-aos="fade-up" key={item.id}>
        <Link to={"/blog-single"} className="w-full block flex-wrap">
          <img src={item.img} alt="" />
        </Link>

        <div className="w-full flex justify-between mt-5 gap-2 mb-10">
          <div className="text-right">
            <p className="text-[#b3b3b3] w-max">Jan. 20, 2019</p>
            <p className="text-[#b3b3b3]">Admin</p>
            <p className="text-[#b3b3b3] justify-end flex gap-1">
              <TbMessage /> 3
            </p>
          </div>

          <div className="text-2xl max-w-[300px] cursor-pointer hover:text-[#0033c7]">
            Even the all-powerful Pointing has no control about the blind
            texts
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Cards;
