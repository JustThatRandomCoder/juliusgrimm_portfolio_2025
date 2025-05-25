import React, { useEffect, useRef } from "react";
import "../styles/InfoPage.css";

/* Components */
import Header from "../components/Header";
import Footer from "../components/Footer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const IndexPage: React.FC = () => {
  const navigate = useNavigate();
  const textBlocksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textBlocksRef.current) {
      const textBlocks = textBlocksRef.current.querySelectorAll(".text-block");

      textBlocks.forEach((block) => {
        const childNodes = Array.from(block.childNodes);

        childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const textContent = node.textContent || "";
            const words = textContent
              .split(" ")
              .filter((word) => word.trim() !== "");

            words.forEach((word) => {
              const span = document.createElement("span");
              span.className = "word";
              span.style.opacity = "0.4";
              span.textContent = word + " ";
              block.insertBefore(span, node);
            });

            block.removeChild(node);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            if (element.classList.contains("highlighted")) {
              element.style.opacity = "0.4";
              element.classList.add("word");
            }
          }
        });
      });

      const words = textBlocksRef.current.querySelectorAll(".word");
      gsap.set(words, { opacity: 0.4 });
      words.forEach((word) => {
        gsap.to(word, {
          opacity: 1,
          scrollTrigger: {
            trigger: word,
            start: "top 90%",
            end: "top 60%",
            scrub: 1.5,
          },
        });
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Header />
      <motion.div className="content-container" variants={itemVariants}>
        <div className="content-inner">
          <motion.div
            className="text-container"
            ref={textBlocksRef}
            variants={itemVariants}
          >
            <section className="about">
              <p className="text-block first">
                Hey, I’m Julius Grimm, 15 y/o and I realy like to think things
                through. I'm located in{" "}
                <span className="highlighted">Tübingen, Germany</span> and
                student 📚{" "}
                <span className="highlighted">@Uhland-Gymnasium Tübingen</span>
              </p>
              <p className="text-block">
                I'm currently working on different projects, including{" "}
                <span
                  className="highlighted"
                  onClick={() => navigate("/projects/festifly")}
                  style={{ cursor: "pointer" }}
                >
                  @FestiFly
                </span>{" "}
                with the goal of making interactions and user experiences as
                intuitive and easy as possible.
              </p>
              <p className="text-block first">
                Loving technology, my journey began, at the age of 10, driven by
                the obsession of creating something new and trying to do things,
                which have never been done before, writing code became an
                essential part of my life.
              </p>
              <p className="text-block">
                I tried various different things, among these starting a Podcast
                🎙️ and a YouTube Chanel 🎞️, but one thing I always sticked to
                was coding 👨‍💻.{" "}
              </p>
              <p className="text-block">
                I got into design out of necessity — early on, when building
                tech projects, I didn’t have existing design concepts to rely
                on, so I had to create my own. Around the age of 12, I started
                using Figma and other tools, which sparked a strong interest in
                design alongside my passion for technology.
              </p>
              <p className="text-block">
                But besides my love and passion for coding I also tried
                different other things, finding myself sticking with, regularly
                hitting the courts 🎾, going to the gym 🏋️ , rowing 🚣, cooking
                👨‍🍳 for my Family ❤️ and playing with my cat Leo 🐈.
              </p>
              <p className="text-block">
                I’m always excited about exploring new ideas 💡 and pushing
                boundaries — especially when it comes to design. Lately, I’ve
                been drawn to VR and AR 🕶️, and in the future, I see myself
                designing the human interfaces 🖱️ that make these experiences
                feel natural and intuitive. I want to see things differently,
                use them differently, and help shape the way people interact
                with technology in new dimensions 🌐.
              </p>
            </section>
            <section className="education">
              <hr />
              <p className="text-block">Education:</p>
              <div className="text-block">
                Uhland-Gymnasium - Tübingen, Germany
              </div>
              <span className="text-block text-description">
                2019 - Present, 9th grade
              </span>
            </section>
            <section className="skillset">
              <hr />
              <p className="text-block">Skillset:</p>
              <div className="item-list">
                <span className="text-block text-description">
                  Fullstack Web Development
                </span>
                <span className="text-block text-description">
                  Backend Development
                </span>
                <span className="text-block text-description">
                  UI / UX Design
                </span>
                <span className="text-block text-description">
                  Interaction Design
                </span>
                <span className="text-block text-description">
                  Sound Design
                </span>
              </div>
            </section>
            <section className="tools">
              <hr />
              <p className="text-block">Tools:</p>
              <div className="item-list">
                <span className="text-block text-description">
                  Visual Studio Code
                </span>
                <span className="text-block text-description">Xcode</span>
                <span className="text-block text-description">Figma</span>
                <span className="text-block text-description">Audacity</span>
                <span className="text-block text-description">
                  DaVinci Resolve
                </span>
              </div>
            </section>
            <section className="tools">
              <hr />
              <p className="text-block">Coding Languages:</p>
              <div className="item-list">
                <span className="text-block text-description">React</span>
                <span className="text-block text-description">Typescript</span>
                <span className="text-block text-description">Javascript</span>
                <span className="text-block text-description">Node.js</span>
                <span className="text-block text-description">Python</span>
                <span className="text-block text-description">Swift</span>
                <span className="text-block text-description">HTML / CSS</span>
                <span className="text-block text-description">
                  Tailwind CSS
                </span>
                <span className="text-block text-description">Arduino</span>
              </div>
            </section>
          </motion.div>
          <motion.div className="image-container" variants={itemVariants}>
            <div className="frame">
              <img src="/figures/figure1.jpeg" alt="Figure 1" />
              <div className="description-co">
                <div className="title">Figure 1 - Me & My Family</div>
                <div className="description">Würzburg, Germany - 2025</div>
              </div>
            </div>
            <div className="frame">
              <img src="/figures/figure7.jpeg" alt="Figure 2" />
              <div className="description-co">
                <div className="title">Figure 2 - My cat Leo</div>
                <div className="description">Tübingen, Germany - 2025</div>
              </div>
            </div>
            <div className="frame">
              <img src="/figures/figure3.jpeg" alt="Figure 3" />
              <div className="description-co">
                <div className="title">Figure 3</div>
                <div className="description">Lisbon, Portugal - 2025</div>
              </div>
            </div>
            <div className="frame">
              <img src="/figures/figure4.jpeg" alt="Figure 4" />
              <div className="description-co">
                <div className="title">Figure 4</div>
                <div className="description">Lisbon, Portugal - 2025</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </motion.main>
  );
};

export default IndexPage;
