import React from "react";
import { motion } from "framer-motion";
import "../styles/Project.css";

interface ProjectProps {
  id: string;
  logoSrc: string;
  altText: string;
  name: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({
  id,
  logoSrc,
  altText,
  name,
  description,
}) => {
  return (
    <motion.div id={id} className="project" whileTap={{ scale: 0.95 }}>
      <div className="logo">
        <img className="logo" src={logoSrc} alt={altText} />
      </div>
      <div className="overlay">
        <div className="name">{name}</div>
        <div className="description">{description}</div>
      </div>
    </motion.div>
  );
};

export default Project;
