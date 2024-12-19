import React from "react";

const ProjectCard = ({ title, main, demoLink, sourceCodeLink, imageSrc }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      {/* Image */}
      <img
        className="p-4 rounded-t-2xl"
        src={imageSrc}
        alt={title}
      />

      {/* Content */}
      <div className="flex-grow px-4">
        <h3 className="text-xl md:text-2xl font-bold leading-normal">{title}</h3>
        <p className="text-sm md:text-md leading-tight py-2">{main}</p>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-2 justify-center">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Demo
          </a>
        )}
        {sourceCodeLink && (
          <a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
