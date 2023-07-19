import { AiOutlineExpandAlt } from "react-icons/ai";
import React from "react";

const Card = ({ img, func, imgId }) => {
  return (
    <div data-aos="fade-up" className="relative w-full project-card overflow-hidden">
      <img src={img} alt="" className="" />
      <div className="-overlay px-8">
        <div>
          <p className="text-[#fffc]">INTERIOR DESIGN</p>
          <h1 className="text-white text-3xl">Office Interior Design</h1>
        </div>

        <button onClick={()=>func(imgId)} className="w-12 h-12 border border-white rounded-full flex justify-center items-center text-white font-bold text-3xl">
          <AiOutlineExpandAlt />
        </button>
      </div>
    </div>
  );
};

export default Card;
