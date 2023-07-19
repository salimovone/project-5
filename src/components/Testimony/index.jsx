import React from "react";
import Title from "../Title";
import Carousel from "./Carousel";

const Testimony = () => {
  return (
    <div className="w-full bg-[#fafafa] py-10">
      <div className="max">
        <div className="">
          <Title
            className={'m-auto'}
            name={"TESTIMONY"}
            title={"Our satisfied customer says"}
            desc={
              "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in"
            }
          />
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Testimony;
