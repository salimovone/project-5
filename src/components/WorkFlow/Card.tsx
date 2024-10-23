import { IoMdArrowDropright } from "react-icons/io";

const Card = ({ icon, name }: {icon: React.ReactNode, name: string}) => {
  return (
    <div data-aos="fade-up">
      <div className="w-full flex justify-between relative items-center -z-50">
        <div className="bg-[#0033c7] absolute z-10 text-white w-24 h-24 rounded-full flex justify-center items-center text-4xl">
          {icon}
        </div>
        <div className="h-[0.5px] bg-gray-300 w-full absolute"></div>
        <span className="text-gray-300 text-xl absolute right-[-10px]">
          <IoMdArrowDropright />
        </span>
      </div>

      <h1 className="mt-[75px] opacity-80">{name}</h1>
      <p className="p6 mt-3">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic.
      </p>
    </div>
  );
};

export default Card;
