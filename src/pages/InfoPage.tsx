import React, { useEffect, useRef } from "react";
import "../styles/InfoPage.css";

/* Components */
import Header from "../components/Header";
import Footer from "../components/Footer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion"; // Import Framer Motion

gsap.registerPlugin(ScrollTrigger);

const IndexPage: React.FC = () => {
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
      words.forEach((word, index) => {
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
                Hey, I’m Julius Grimm, 15 y/o and I'm a thinker. I'm located in{" "}
                <span className="highlighted"> Tübingen, Germany </span> and
                student 📚{" "}
                <span className="highlighted">@Uhland-Gymnasium</span> Tübingen
              </p>
              <p className="text-block">
                I'm currently working on different projects, including{" "}
                <span className="highlighted"> @Festifly</span> with the goal of
                making interactions and user experiences as intuitive and easy
                as possible.
              </p>
              <p className="text-block first">
                Loving technology, my journey began, at the young age of 10,
                driven by the obsession of creating things that have never been
                there before, writing code became an essential part of my life.
              </p>
              <p className="text-block">
                I tried various different things, among these starting a Podcast
                🎙️ and a YouTube Chanel 🎞️, but one thing I always sticked to
                was coding 👨‍💻.{" "}
              </p>
              <p className="text-block">
                Inevitable when working on various tech projects alone, with no
                budget is needing to design something. So around at the age of
                12 I started working with Figma and other tools, strongly
                promoting my love for technology.
              </p>
              <p className="text-block">
                But besides my love and passion for coding I also tried
                different other things, finding myself sticking with, regularly
                hitting the courts 🎾, going to the gym 🏋️ , rowing 🚣 and
                cooking 👨‍🍳 for my Family ❤️.
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
              </div>
            </section>
            <section className="tools">
              <hr />
              <p className="text-block">Coding Languages:</p>
              <div className="item-list">
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
              <img src="../../public/figures/figure1.heic" alt="" />
              <div className="description-co">
                <div className="title">Figure 1 - Me & My Family</div>
                <div className="description">Würzburg, Germany - 2025</div>
              </div>
            </div>
            <div className="frame">
              <img src="../../public/figures/figure2.heic" alt="" />
              <div className="description-co">
                <div className="title">Figure 2 - Me</div>
                <div className="description">Lisbon, Porto - 2025</div>
              </div>
            </div>
            <div className="frame">
              <img src="../../public/figures/figure3.heic" alt="" />
              <div className="description-co">
                <div className="title">Figure 3</div>
                <div className="description">Lisbon, Porto - 2025</div>
              </div>
            </div>
            <div className="frame">
              <img src="../../public/figures/figure4.heic" alt="" />
              <div className="description-co">
                <div className="title">Figure 4</div>
                <div className="description">Lisbon, Porto - 2025</div>
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
