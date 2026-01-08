import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "React Portfolio",
      description: "Personal portfolio website built using React and Framer Motion.",
      tech: "React, CSS, Framer Motion",
      github: "https://github.com/your-username/react-portfolio",
      live: "https://your-username.github.io/react-portfolio/",
    },
    {
      id: 2,
      title: "E-commerce Admin Panel",
      description: "Admin dashboard to manage products using MERN stack.",
      tech: "React, Node.js, MongoDB",
      github: "https://github.com/your-username/ecommerce-admin-panel",
      live: "https://ecommerce-admin-demo.netlify.app/",
    },
    {
      id: 3,
      title: "Restaurant Management System",
      description: "Frontend system for managing restaurant orders.",
      tech: "React, Bootstrap",
      github: "https://github.com/your-username/restaurant-management",
      live: "https://restaurant-management-demo.netlify.app/",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tech">{project.tech}</span>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
