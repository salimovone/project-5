import React, { useEffect, useState } from "react";
import img from "../../assets/images/bg_3.jpg";

type prop = {
  name: string,
  className?: string
}

const Intro = ({name, className} : prop) => {
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
      className={`w-full bg-cover ${className}`}
      style={{
        backgroundImage: `url("${img}")`,
        backgroundPosition: `50% ${scrollPosition / 3}px`,
      }}
    >
      <div className="w-full bg-[#0033c7] py-24 opacity-80 text-center text-white">
        <h1 className="font-black text-5xl mb-3">{name}</h1>
        <p className="font-light text-white">Home {'>'} {name} {'>'}</p>
      </div>
    </div>
  );
};

export default Intro;
