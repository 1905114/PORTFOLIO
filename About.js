import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "./About.css";
import backgroundVideo from "../assets/normal.mp4";

/* Floating Tech Icons */
const FloatingTechIcons = () => {
  const techIcons = [
    { icon: "⚛️", name: "React" },
    { icon: "🟨", name: "JavaScript" },
    { icon: "🟩", name: "Node.js" },
    { icon: "🟦", name: "CSS" },
    { icon: "🟧", name: "HTML" },
    { icon: "🟪", name: "MongoDB" },
    { icon: "⬛", name: "Express" },
    { icon: "🟫", name: "Git" },
  ];

  return (
    <div className="floating-tech-icons">
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          className="tech-icon"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {tech.icon}
          <span className="tech-tooltip">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

function About() {
  const skills = [
    { name: "React", level: 85, icon: "⚛️", color: "#61dafb" },
    { name: "Node.js", level: 80, icon: "🟩", color: "#68A063" },
    { name: "MongoDB", level: 75, icon: "🟪", color: "#4DB33D" },
    { name: "Express", level: 70, icon: "⬛", color: "#000000" },
    { name: "JavaScript", level: 85, icon: "🟨", color: "#F7DF1E" },
    { name: "HTML", level: 90, icon: "🟧", color: "#E44D26" },
    { name: "CSS", level: 80, icon: "🔗", color: "#00A0DC" },
    { name: "Git / GitHub", level: 80, icon: "🔀", color: "#F05032" },
  ];

  const experiences = [
    {
      role: "MERN Stack Developer Intern",
      company: "Appin Technology Lab, Coimbatore",
      period: "February – April 2025",
      description: [
        "Developed a full-stack E-Commerce website using MERN stack.",
        "Built responsive UI using React, Bootstrap, HTML, and CSS.",
      ],
      projects: [
        {
          name: "Online E-Commerce Website",
          tools: "React, Node.js, Express, MongoDB",
          description: [
            "Product browsing, cart, checkout and admin dashboard",
            "Authentication and responsive design",
          ],
        },
        {
          name: "Coffee Shop Website",
          tools: "HTML, CSS, JavaScript, Bootstrap",
          description: [
            "Fully responsive modern UI",
            "Interactive menu and contact form",
          ],
        },
        {
          name: "Look-Based Media Player",
          tools: "OpenCV, MediaPipe",
          description: [
            "Auto play/pause based on eye detection",
            "Sleep detection with system shutdown",
          ],
        },
      ],
    },
  ];

  const education = [
    {
      degree: "B.E Computer Science",
      institution: "Coimbatore Institute of Technology",
      year: "2019 – 2023",
      achievements: [
        "Graduated with GPA 8.5",
        "Final Year Project: AI Fitness Trainer",
      ],
    },
    {
      degree: "HSC",
      institution: "RoseMary Matriculation School",
      year: "2018 – 2019",
      achievements: ["Scored 85%"],
    },
    {
      degree: "SSLC",
      institution: "SSM Matriculation School",
      year: "2016 – 2017",
      achievements: ["Scored 94%"],
    },
  ];

  const certifications = [
    { name: "MERN Stack Certification", issuer: "Appin", year: "2025" },
    { name: "Employability Skills", issuer: "Magic Bus", year: "2025" },
  ];

  const hobbies = ["Sketching", "Travelling", "Reading", "Exploring cultures"];

  return (
    <div className="about-page">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted className="video-bg">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <Navbar />
      <FloatingTechIcons />

      <motion.section
        className="about-section py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container">
          <h2 className="text-center fw-bold mb-4">About Me</h2>

          <div className="row">
            {/* LEFT */}
            <div className="col-lg-6">
              <div className="about-card p-4 mb-4">
                <h4>Who I Am</h4>
                <p>
                  Detail-oriented <strong>MERN Stack Developer</strong> with
                  experience building scalable and responsive web applications.
                </p>
                <p>
                  I am a strong communicator who continuously adapts to emerging
                  technologies and contributes value to organizations.
                </p>

                <ul>
                  {hobbies.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="skills-card p-4 mb-4">
                <h4>Technical Skills</h4>
                {skills.map((skill, i) => (
                  <div key={i} className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span>{skill.icon} {skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="certifications-card p-4">
                <h4>Certifications</h4>
                {certifications.map((c, i) => (
                  <p key={i}>
                    <strong>{c.name}</strong> – {c.issuer} ({c.year})
                  </p>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6">
              <div className="experience-card p-4 mb-4">
                <h4>Experience</h4>
                {experiences.map((exp, i) => (
                  <div key={i}>
                    <h5>{exp.role}</h5>
                    <p className="text-primary">
                      {exp.company} | {exp.period}
                    </p>
                    <ul>
                      {exp.description.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>

                    <h6>Projects</h6>
                    {exp.projects.map((p, k) => (
                      <div key={k}>
                        <strong>{p.name}</strong> ({p.tools})
                        <ul>
                          {p.description.map((desc, x) => (
                            <li key={x}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="education-card p-4">
                <h4>Education</h4>
                {education.map((edu, i) => (
                  <div key={i}>
                    <h5>{edu.degree}</h5>
                    <p>{edu.institution} | {edu.year}</p>
                    <ul>
                      {edu.achievements.map((a, j) => (
                        <li key={j}>{a}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;
