import React from "react";
import { FiPhone, FiMail } from "react-icons/fi"; // Import modern icons
import avatarImg from "../../assets/desk.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        {/* Added margin between name and description */}
        <p className="text-sm md:text-2xl tracking-tight mt-6 text-justify">
          A Graduate in information science and engineering and is eager to work for a company that can help employees develop their professional skills while also beneﬁting the company.
        </p>
        <div className="mt-8 md:mt-12 space-y-3">
          <div className="flex items-center space-x-3 text-sm md:text-lg">
            <FiPhone className="text-[#465697] text-xl" />
            <span className="font-medium">+91 8073155802</span>
          </div>
          <div className="flex items-center space-x-3 text-sm md:text-lg">
            <FiMail className="text-[#465697] text-xl" />
            <span className="font-medium">salman.kulur@gmail.com</span>
          </div>
        </div>
      </div>
      <div>
        <img className="" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
