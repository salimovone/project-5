import React from "react";
import Title from "../Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Clients = () => {
  return (
    <div className="w-full py-20">
      <div className="max">
        <div className="service-grid gap-10">
          <Title name={"CLIENTS"} title={"Our CLients"} />
          <div className="w-full">
            <p className="p6 mt-10">
              Far far away, behind the lorem word mountains, ipsum far from the
              countries Vokalia and Consonantia, there dolor live the blind sit
              texts.
            </p>
          </div>
        </div>

        <Swiper
          pagination={true}
          spaceBetween={15}
          modules={[Pagination, Autoplay]}
          className="mt-10"
          autoplay={true}
          loop
          slidesPerView={1}
          breakpoints={{
            425: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
          }}
        >
          {Array(7)
            .fill(1)
            .map((item, index) => (
              <SwiperSlide
                data-aos="fade-up"
                key={index + 1}
                className="border mb-10 text-center py-12 font-black hover:text-[#0033c7] client-logo"
              >
                CLIENT LOGO {index + 1}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
