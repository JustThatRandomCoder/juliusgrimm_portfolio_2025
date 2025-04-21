import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../styles/IndexPage.css";
import Header from "../components/Header";
import Project from "../components/Project";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IndexPage: React.FC = () => {
  const projectContainerRef = useRef<HTMLDivElement>(null);
  const workSectionRef = useRef<HTMLElement>(null);
  const hrRef = useRef<HTMLHRElement>(null);

  useEffect(() => {
    const projects = projectContainerRef.current?.querySelectorAll(".project");

    if (projects) {
      projects.forEach((project) => {
        gsap.fromTo(
          project,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: project,
              start: "top 90%",
              end: "top 10%",
              scrub: 1.5,
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }

    if (projectContainerRef.current) {
      gsap.fromTo(
        projectContainerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: projectContainerRef.current,
            start: "top 90%",
            end: "top 10%",
            scrub: 1.5,
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (hrRef.current) {
      gsap.fromTo(
        hrRef.current,
        { opacity: 0, scaleX: 0 },
        {
          opacity: 1,
          scaleX: 1,
          duration: 1.5,
          ease: "power4.out",
          onComplete: () => {
            ScrollTrigger.create({
              trigger: hrRef.current,
              start: "top 95%",
              end: "top 50%",
              onEnter: () => gsap.set(hrRef.current, { clearProps: "all" }),
            });
          },
        }
      );
    }
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Header />
      <motion.section
        className="landing-page"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="head">
          <div className="emoji-co">
            <span role="img" aria-label="peace">
              ✌️
            </span>
            <span role="img" aria-label="guy sitting in front of a computer">
              👨‍💻
            </span>
            <span role="img" aria-label="running">
              🏃‍♂️
            </span>
            <span role="img" aria-label="rowing">
              🚣‍♂️
            </span>
            <span role="img" aria-label="tennis ball">
              🎾
            </span>
            <span role="img" aria-label="cook">
              👨‍🍳
            </span>
          </div>
          <div className="social-links">
            <a
              href="mailto:me@juliusgrimm.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/julius-gr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/julius_gr_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://github.com/justtatrandomcoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="text">
            Hey there! I’m Julius Grimm, a 15 y/o fullstack web developer & UI /
            UX designer, driven by his passion and love for technology,
            currently experementing with{" "}
            <span className="highlighted">@FestiFly</span>.
          </div>
        </div>
      </motion.section>
      <section className="work" ref={workSectionRef}>
        <motion.hr
          ref={hrRef}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        />
        <motion.div
          className="project-container"
          ref={projectContainerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Project
            id="festifly"
            logoSrc="../../public/logos/festifly_logo.png"
            altText="FestiFly"
            name="FestiFly"
            description="UI / UX Design & Fullstack Development"
          />
          <Project
            id="vibevote"
            logoSrc="../../public/logos/vibeVote_logo.png"
            altText="VibeVote"
            name="VibeVote"
            description="UI / UX Design & Fullstack Development"
          />
          <Project
            id="openweatherhub"
            logoSrc="../../public/logos/openWeatherHub_logo.png"
            altText="OpenWeatherHub"
            name="OpenWeatherHub"
            description="Product-Design & Fullstack Development"
          />
          <Project
            id="skyview"
            logoSrc="../../public/logos/skyview_logo.svg"
            altText="SkyView"
            name="SkyView"
            description="UI / UX Design  & Fullstack Development"
          />
        </motion.div>
      </section>
    </motion.main>
  );
};

export default IndexPage;
