import { AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full pb-11  bg-[#141313]">
      <div className="max mt-[100px] pt-[100px] text-white grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="orders">
          <div className="text-[18px] mb-10">Mosaic</div>

          <div className="mb-[20px]">
            <p className="text-[#ffffffb3]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <div className="flex gap-5 text-[25px]">
            <div
              data-aos="fade-up"
              className="w-10 h-10 flex justify-center items-center text-2xl rounded-full bg-[#FFFFFF0d]"
            >
              <AiOutlineTwitter />
            </div>
            <div
              data-aos="fade-up"
              className="w-10 h-10 flex justify-center items-center text-2xl rounded-full bg-[#FFFFFF0d]"
            >
              <CgFacebook />
            </div>
            <div
              data-aos="fade-up"
              className="w-10 h-10 flex justify-center items-center text-2xl rounded-full bg-[#FFFFFF0d]"
            >
              <AiOutlineInstagram />
            </div>
          </div>
        </div>

        <div className="order1">
          <div>
            <div className="text-[18px] mb-10">
              <p>Links</p>
            </div>

            <div className="grid grid-cols-1 mt-[20px]">
              <div className="flex">
                <Link to="/" className="flex mt-1 items-center gap-2">
                  <BsArrowRight />
                  <span className="text-[#ffffffb3]">Home</span>
                </Link>
              </div>
              <div className="flex">
                <Link to="/" className="flex mt-1 items-center gap-2">
                  <BsArrowRight />
                  <span className="text-[#ffffffb3]">About</span>
                </Link>
              </div>
              <div className="flex">
                <Link to="/" className="flex mt-1 items-center gap-2">
                  <BsArrowRight />
                  <span className="text-[#ffffffb3]">Services</span>
                </Link>
              </div>
              <div className="flex">
                <Link to="/" className="flex mt-1 items-center gap-2">
                  <BsArrowRight />
                  <span className="text-[#ffffffb3]">Projects</span>
                </Link>
              </div>
              <div className="flex">
                <Link to="/" className="flex mt-1 items-center gap-2">
                  <BsArrowRight />
                  <span className="text-[#ffffffb3]">Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="order2">
          <div>
            <div className="text-[18px] mb-10">
              <p>Services</p>
            </div>

            <div className="grid grid-cols-1 mt-[20px]">
              <div className="flex">
                <Link to="/" className="flex mt-1 items-center gap-2">
                  <BsArrowRight />
                  <span className="text-[#ffffffb3]">Architectural Design</span>
                </Link>
              </div>
              <div className="flex">
                <Link to="/" className="flex mt-1 items-center gap-2">
                  <BsArrowRight />
                  <span className="text-[#ffffffb3]">Interior Design</span>
                </Link>
              </div>
              <div className="flex">
                <Link to="/" className="flex mt-1 items-center gap-2">
                  <BsArrowRight />
                  <span className="text-[#ffffffb3]">Exterior Design</span>
                </Link>
              </div>
              <div className="flex">
                <Link to="/" className="flex mt-1 items-center gap-2">
                  <BsArrowRight />
                  <span className="text-[#ffffffb3]">Lightning Design</span>
                </Link>
              </div>
              <div className="flex">
                <Link to="/" className="flex mt-1 items-center gap-2">
                  <BsArrowRight />
                  <span className="text-[#ffffffb3]">AutoCAD Service</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className="text-[18px] mb-10">Newsletter</p>
          </div>

          <div className="mb-[20px]">
            <p className="text-[#ffffffb3]">
              Far far away, behind the word mountains, far from the countries.
            </p>
          </div>

          <div className="text-[rgba(255, 255, 255, 0.7)]">
            <input
              placeholder="Enter Email Address"
              className="w-full text-center mb-2 bg-[#ffffff1a] rounded px-3 py-[14px]"
            />
            <button className="w-full bg-[#0033c7] rounded px-3 py-[14px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[100px] bg-[#141313]">
        <div className="text-[#ffffffa1] text-center pt-[40px]">
          Copyright ©2023 All rights reserved | This template is made with by
          Colorlib
        </div>
      </div>
    </div>
  );
}

export default Footer;
