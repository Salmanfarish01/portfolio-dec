import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap justify-center gap-5">
        <ProjectCard
          title="SalmanEstate - Your Trusted Real Estate Hub"
          main="SalmanEstate is a trusted platform for selling and renting properties, offering easy listings and detailed searches. Connect with potential buyers, tenants, or property owners and make hassle-free deals!"
          demoLink="https://mern-real-estate-ut8s.onrender.com/"
          sourceCodeLink="https://github.com/Salmanfarish01/mern-real-estate"
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlGDLLJQZJ9pvZjBbT0cQz3kehlhjgUJxWw&s" // Replace with your real image URL
        />
        <ProjectCard
          title="Redux To-Do List Application"
          main="Built a basic yet functional To-Do list application using React and Redux for state management. The application enables users to add, toggle completion status, delete, and filter tasks based on their completion status."
          demoLink="https://salmanfarish01.github.io/to-do-redux/"
          sourceCodeLink="https://github.com/Salmanfarish01/to-do-redux"
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsU8Usu80H7T9dl2iwz96L1XINvqdsoFjm2V346C0mLWNXCdf9Y3HBuIB3wJCcOPHfDs&usqp=CAU" // Replace with your real image URL
        />
        <ProjectCard
          title="React Shopping Cart"
          main="The React cart page web application provides users with a seamless shopping experience, allowing them to view, manage, and purchase items in their online cart efficiently."
          demoLink="https://salmanfarish01.github.io/shopping-cart/"
          sourceCodeLink="https://github.com/Salmanfarish01/shopping-cart"
          imageSrc="https://images.ctfassets.net/lh3zuq09vnm2/6oq2ZPwvjuUcLQqoA2KIhY/a2b99af5df3803009d33c70aa4391e9b/shopping-cart-design-ideas-under-armour.png" // Replace with your real image URL
        />
      </div>
    </div>
  );
};

export default Projects;
