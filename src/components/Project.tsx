import React from "react";
import { motion } from "framer-motion";
import "../styles/Project.css";

interface ProjectProps {
  id: string;
  logoSrc: string;
  altText: string;
  name: string;
  description: string;
  link?: string; // Optional link for navigation
}

const Project: React.FC<ProjectProps> = ({
  id,
  logoSrc,
  altText,
  name,
  description,
  link,
}) => {
  const handleClick = () => {
    if (link) {
      if (link.startsWith("/")) {
        window.location.href = link;
      } else {
        window.open(link, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <motion.div
      id={id}
      className={`project ${link ? "clickable" : "in-development"}`}
      whileTap={link ? { scale: 0.95 } : undefined}
      onClick={link ? handleClick : undefined}
    >
      <div className="logo">
        <img className="logo" src={logoSrc} alt={altText} />
      </div>
      <div className="overlay">
        <div className="name">{name}</div>
        {!link && <div className="status">In Development</div>}{" "}
        <div className="description">{description}</div>
      </div>
    </motion.div>
  );
};

export default Project;
