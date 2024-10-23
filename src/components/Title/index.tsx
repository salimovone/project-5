import React from "react";

type prop = {
  name?: string,
  title?: string,
  desc?: string,
  className?: string
}

const Title = ({ name, title, desc, className } : prop) => {
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
