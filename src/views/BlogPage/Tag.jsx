import React from "react";

const Tag = ({ name }) => {
  return (
    <div className="uppercase py-1 px-[10px] border text-[11px] rounded border-gray-300 hover:border-gray-950 cursor-pointer">
      {name}
    </div>
  );
};

export default Tag;
