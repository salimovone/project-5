import React, { useEffect, useState } from "react";
import img from "../../assets/images/bg_3.jpg";
import Count from "./Count";
import { data } from "./data";

const Counter = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full bg-cover"
      style={{
        backgroundImage: `url("${img}")`,
        backgroundPosition: `50% ${scrollPosition / 3}px`,
      }}
    >
      <div className="w-full bg-[#0033c7] opacity-80">
        <div className="max text-white py-[110px] grid grid-cols-1 md:grid-cols-4 gap-5 max-md:gap-20 lg:grid-cols-5">
          <div className="hidden lg:block"></div>
          {data.map((item) => (
            <Count num={item.count} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
