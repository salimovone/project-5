import React from "react";
import Intro from "../../components/Intro";

const Contact = () => {
  return (
    <div className="w-full">
      <Intro name={"Contact Us"} className={"-mb-20"} />
      <div className="w-full bg-[#fafafa] py-28">
        <div className="max">
          <h1 className="font-bold mt-20 mb-10 text-2xl text-[#000c]">
            Contact Information
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full">
            <p className="p6">
              Address: 198 West 21th Street, Suite 721 New York NY 10016
            </p>
            <p className="p6">
              Phone: <span className="text-black">+ 1235 2355 98</span>
            </p>
            <p className="p6">
              Email: <span className="text-black">info@yoursite.com</span>
            </p>
            <p className="p6">
              Website: <span className="text-black">yoursite.com</span>
            </p>
          </div>
        </div>
      </div>

      <div className="max grid grid-cols-1 md:grid-cols-2">
        <div className=""></div>

        <form action="./" className="text-[#666666] w-full p-12 mb-32">
          <input
            type="text"
            placeholder="Your Name"
            className="placeholder:text-gray-500 border pl-2 bg-white w-full outline-black mt-5 mb-2 h-[52px]"
          />

          <input
            type="text"
            placeholder="Your Email"
            className="placeholder:text-gray-500 border pl-2 bg-white w-full outline-black mt-5 mb-2 h-[52px]"
          />

          <input
            type="text"
            placeholder="Subject"
            className="placeholder:text-gray-500 border pl-2 bg-white w-full outline-black mt-5 mb-2 h-[52px]"
          />

          <textarea
            type="text"
            placeholder="Message"
            className="placeholder:text-gray-500 border pl-2 bg-white w-full outline-black mt-5 mb-2 h-[200px]"
          />

          <button className="bg-[#0033c7] text-white border border-[#0033c7] hover:bg-white hover:text-[#0033c7] rounded-full px-[24px] py-[16px]">
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
