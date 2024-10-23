import React from "react";
import Title from "../Title";
import { data, lessData } from "./data";
import Card from "./Card";

const Team = ({ big } : {big?: boolean}) => {
  let arr = big ? data : lessData;

  return (
    <div className='px-5'>
      <div className="">
        <Title
          className={"m-auto"}
          name={"EXPERT TEAM"}
          title={"Our Architect Team"}
          desc={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in"
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {arr.map((item) => (
          <Card key={item.id} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default Team;
