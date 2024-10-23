import React, { useEffect, useRef } from "react";

type countProp = {
  num: number,
  name: string
}

const Count = ({ num, name }:countProp) => {
  const countupRef = useRef(null);
  let countUpAnim;

  useEffect(() => {
    initCountUp();
    // eslint-disable-next-line
  }, []);

  async function initCountUp() {
    const countUpModule = await import("countup.js");
    countUpAnim = new countUpModule.CountUp(countupRef.current!, num);
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }
  }
  return (
    <div data-aos="fade-up" className="text-center">
      <span className="text-[40px]" ref={countupRef}>0</span>
      <p>{name}</p>
    </div>
  )
};

export default Count;
