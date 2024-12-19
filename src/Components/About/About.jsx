import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaNode } from "react-icons/fa";
import { SiRedux, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div
      id="Skills"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div className="w-full text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold">Skills</h2>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <p className="mt-2">HTML</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <p className="mt-2">CSS</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <p className="mt-2">JavaScript</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <p className="mt-2">React</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedux color="#764ABC" size={50} />
          </span>
          <p className="mt-2">Redux</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNode color="#339933" size={50} />
          </span>
          <p className="mt-2">Node.js</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiExpress color="#ffffff" size={50} />
          </span>
          <p className="mt-2">Express</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <p className="mt-2">MongoDB</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaBootstrap color="#7952B3" size={50} />
          </span>
          <p className="mt-2">Bootstrap</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#06B6D4" size={50} />
          </span>
          <p className="mt-2">Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
