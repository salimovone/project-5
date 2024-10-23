import React from "react";
import Intro from "../../components/Intro";
import AboutComponent from "../../components/About";
import Counter from "../../components/Counter";
import Testimony from "../../components/Testimony";
const About = () => {
  return (
    <div className="w-full overflow-hidden">
      <Intro name={"About Us"} />
      <AboutComponent />
      <div className="max gap-5 grid grid-cols-1 md:grid-cols-3 py-16">
        <div>
          <h1 className="text-2xl">Mission</h1>
          <p className="p6">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div>
          <h1 className="text-2xl">Vission</h1>
          <p className="p6">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div>
          <h1 className="text-2xl">Mosaic</h1>
          <p className="p6">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </div>
      <Counter />
      <Testimony />
    </div>
  );
};

export default About;
