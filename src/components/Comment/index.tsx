import React from "react";
import img from "../../assets/images/person_1.jpg";

const Comment = () => {
  return (
    <div className="flex gap-5 mt-12">
      <img src={img} className="w-12 h-12 rounded-full" alt="" />
      <div>
        <h1 className="text-lg font-bold">John Doe</h1>
        <p className="text-[lightgray] text-[13px] mt-2 mb-5">
          JANUARY 03, 2019 AT 2:21PM
        </p>
        <p className="p6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia,
          fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit
          necessitatibus, nihil?
        </p>
        <button
          className="px-[10px] py-[5px] rounded bg-[#e6e6e6] text-[11px] hover:text-white hover:bg-black"
          style={{ transition: "ease-in-out 0.2s all" }}
        >
          REPLY
        </button>
      </div>
    </div>
  );
};

export default Comment;
