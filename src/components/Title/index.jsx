import React from "react";

const Title = ({ name, title, desc, className }) => {
  return (
    <div data-aos="fade-up" className={`max-w-[800px] mt-10 ${className}`}>
      <div className="w-full flex items-center">
        <span className="text-[80%]">{name}</span>
        <div className={`h-[1px] bg-gray-200 w-[85%] ${!name&&"hidden"}`}></div>
      </div>
      <h1 className="font-medium text-3xl mb-3">{title}</h1>

      <p className="text-[#666]">{desc}</p>
    </div>
  );
};

export default Title;
