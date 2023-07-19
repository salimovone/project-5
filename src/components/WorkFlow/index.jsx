import React from "react";
import Title from "../Title";
import { data } from "./data";
import Card from "./Card";

const WorkFlow = () => {
  return (
    <div className="w-full">
      <div className="max">
        <div className="grid grid-cols-2 max-md:grid-cols-1 justify-between items-center">
          <Title title={"Our Work Flow"} />
          <Title
            desc={
              "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in."
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-32 md:gap-8">
            {data.map(item=><Card icon={item.icon} name={item.name} key={item.id} />)}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
