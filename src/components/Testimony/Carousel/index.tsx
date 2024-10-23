import { BsQuote } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { data } from "./data";

const Carousel = ({ className } : {className?:string}) => {
  return (
    <Swiper
      className={`${className} mt-10`}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={true}
      modules={[Pagination]}
      breakpoints={{
        '768':{
            slidesPerView: 3
        }
      }}
    >
      {data.map((item) => (
        <SwiperSlide data-aos="fade-up" key={item.id} className="my-16">
          <div className="w-full bg-[#ffffff1a] py-10 px-5">
            <div
              className="w-[100px] h-[100px] bg-white relative -mt-20 ml-14 rounded-full bg-cover"
              style={{ backgroundImage: `url("${item.img}")` }}
            >
              <div className="w-10 h-10 bg-white rounded-full right-0 absolute bottom-0 text-[#0033c7] text-2xl flex justify-center items-center">
                <BsQuote />
              </div>
            </div>

            <div className="border-l-2 px-4 mt-6 relative">
              <p className="p6  ">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="absolute h-6 top-8 left-0 bg-[#0033c7] w-1"></div>
            </div>

            <div className="m-auto w-max mt-5 max-lg:w-auto">
                <h1 className="text-lg">Garreth Smith</h1>
                <p className="p5">CEO Founder of Commerical Building</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
