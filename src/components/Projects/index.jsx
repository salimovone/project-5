import React, { useState } from "react";
import Title from "../Title";
import { data, lessData } from "./data";
import Card from "./Card";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Projects = ({ big }) => {
  let arr = big ? data : lessData;

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const gallery = (id) => {
    setOpen(true);
    setIndex(id);
  };

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={data}
      />
      <div className="w-full">
        <div className="max">
          <div className="service-grid gap-10">
            <Title name={"PROJECTS"} title={"Featured Projects"} />
            <div className="w-full">
              <p className="p6 mt-10">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in. A small river named Duden flows by their place and
                supplies it with the necessary regelialia. It is a paradisematic
                country, in which roasted parts of sentences fly into your
                mouth.
              </p>
            </div>
          </div>
        </div>
        <ul className="font-light text-xs flex gap-3 w-full justify-center mt-8">
          <li className="font-medium">
            <a href="./">ALL WORK</a>
          </li>
          <li>
            <a href="./">INTERIOR</a>
          </li>
          <li>
            <a href="./">EXTERIOR</a>
          </li>
          <li>
            <a href="./">LANDSCAPE</a>
          </li>
        </ul>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 mt-10">
          {arr.map((item, idx) => (
            <Card key={item.id} img={item.img} func={gallery} imgId={idx} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
