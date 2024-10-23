import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";

const Card = ({ img } : {img: string}) => {
  return (
    <div data-aos="fade-up" className="teamCard flex flex-col justify-between mb-32 max-md:mb-96 max-sm:mb-20">
      <img src={img} alt="" className="" />
      <div className="bg-white p-5 team-card-body">
        <h1 className="text-lg">David Smith</h1>
        <p className="text-[#0033c7]">Achitect</p>

        <div className="team-card-text">
          <p className="p6">
            I am an ambitious workaholic, but apart from that, pretty simple
            person.
          </p>
          <div className="text-[#0033c7] flex cursor-pointer">
            <AiOutlineTwitter />
            <CgFacebook />
            <AiOutlineGooglePlus />
            <AiOutlineInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
