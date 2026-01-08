import React from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "./Home.css";
import photo from "../assets/silviyaimage.jpg";
import backgroundVideo from "../assets/normal.mp4";

function Home() {
  const navigate = useNavigate();

  const navigateToAbout = () => navigate("/about");
  const navigateToContact = () => navigate("/contact");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="home-page">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Animated floating elements */}
      <div className="floating-elements">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="shape"
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{
              opacity: [0, 0.2, 0],
              scale: [0, 1.2, 0],
              x: [
                Math.random() * 100 - 50,
                Math.random() * 200 - 100,
                Math.random() * 100 - 50
              ],
              y: [
                Math.random() * 100 - 50,
                Math.random() * 200 - 100,
                Math.random() * 100 - 50
              ]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
            style={{
              position: "absolute",
              width: `${Math.random() * 100 + 30}px`,
              height: `${Math.random() * 100 + 30}px`,
              borderRadius: "50%",
              background: `rgba(13, 110, 253, ${Math.random() * 0.1})`,
              zIndex: 1
            }}
          />
        ))}
      </div>

      <Navbar />

      <section className="home d-flex align-items-center" id="home">
        <div className="container">
          <motion.div
            className="row align-items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Left Text Content */}
            <motion.div className="col-lg-6" variants={itemVariants}>
              <motion.h6
                className="text-primary mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello I'm
              </motion.h6>

              <motion.h1
                className="display-4 fw-bold mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <strong>Silviya M</strong>
              </motion.h1>

              <div className="mb-4" style={{ height: "80px" }}>
                <TypeAnimation
                  sequence={[
                    "MERN Stack Developer",
                    1000,
                    "Frontend Developer",
                    1000,
                    "Software Engineer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Freelancer",
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{
                    fontSize: "1.5rem",
                    display: "inline-block",
                    fontWeight: 600,
                    color: "#0d6efd"
                  }}
                  repeat={Infinity}
                />
              </div>

              <motion.p
                className="lead mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Detail-oriented MERN Stack Developer with strong expertise in building dynamic, responsive, and scalable 
                web applications. Proficient in React.js, Node.js, MongoDB, and modern front-end frameworks. Experienced 
                in developing AI-powered applications using OpenCV and Mediapipe, integrating databases, and 
                implementing full-stack solutions. Adept at collaborating in cross-functional teams, solving complex 
                problems, and delivering high-quality software solutions in fast-paced environments. 
              </motion.p>

              <motion.div
                className="btn-group mt-4 gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <button
                  className="btn btn-primary btn-lg px-4"
                  onClick={navigateToAbout}
                >
                  About Me
                </button>

                <button
                  className="btn btn-outline-primary btn-lg px-4"
                  onClick={navigateToContact}
                >
                  Contact
                </button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="social-links mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <i className="bi bi-github fs-4 me-3"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin fs-4 me-3"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <i className="bi bi-twitter fs-4 me-3"></i>
                </a>
                <a href="mailto:your.email@example.com">
                  <i className="bi bi-envelope fs-4"></i>
                </a>
              </motion.div>
            </motion.div>

            {/* Enhanced Image Section */}
            <motion.div className="col-lg-6 text-center" variants={itemVariants}>
              <div className="image-container position-relative">
                <motion.div
                  className="profile-image-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="glow-effect"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "mirror" }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, #0d6efd 0%, transparent 70%)',
                      zIndex: 1,
                    }}
                  />

                  <motion.img
                    src={photo}
                    alt="Silviya M"
                    className="img-fluid rounded-circle shadow-lg"
                    initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1, 
                      rotate: 0,
                      y: [0, -15, 0],
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.4,
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: 3,
                      boxShadow: "0px 10px 30px rgba(13, 110, 253, 0.5)",
                      filter: 'brightness(1.1)',
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }
                    }}
                    whileTap={{
                      scale: 0.95,
                      rotate: -2
                    }}
                    style={{
                      border: "5px solid #ffffff",
                      position: "relative",
                      zIndex: 2,
                      cursor: "pointer",
                      maxWidth: "400px",
                    }}
                  />

                  {/* Floating Badges */}
                  

                  
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;