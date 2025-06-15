import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../../components/Header";
import "../../styles/CaseStudie.css";
import Footer from "../../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const FestiFly: React.FC = () => {
  const textBlocksRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

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

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const loaderVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

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
    <>
      {isLoading && (
        <motion.div
          className="loader"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={loaderVariants}
        >
          <div className="spinner"></div>
        </motion.div>
      )}
      <motion.main
        className="festifly-page"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Header />
        <motion.div
          className="content-container"
          ref={textBlocksRef}
          variants={itemVariants}
        >
          <section className="thumbnail-section">
            <motion.img
              className="thumbnail"
              src="/projects/thumbnails/festifly_thumbnail.jpg"
              alt="Festifly Thumbnail"
              variants={itemVariants}
              onLoad={handleImageLoad}
            />
            <motion.div className="title-container" variants={itemVariants}>
              <div className="title">
                <span className="highlighted">@FestiFly</span> is an all-in-one
                eventmanagement tool to plan and host your own event.{" "}
              </div>
              <div className="role">
                UI / UX Design & Fullstack Development{" "}
              </div>
            </motion.div>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Overview</p>
            <div className="text-block information">
              <span>Team:&nbsp;</span>
              <span className="gray-60">2 People</span>
            </div>
            <div className="text-block information">
              <span>Tools: &nbsp;</span>
              <span className="gray-60">Figma, VS Code, TypeScript, React</span>
            </div>
            <div className="text-block information">
              <span>Duration: &nbsp;</span>
              <span className="gray-60">September 2024 - April 2025 </span>
            </div>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">
              FestiFly is a modern web app that aimed to streamline event
              planning for young people through intuitive design and smart
              automation. We decided not to continue development after
              completing the frontend. However during the project we gained
              valuable lessons in product design, team collaboration and
              user-centered thinking.
            </p>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">The Problem</p>
            <p className="text-block">
              Planning events is often chaotic and fragmented, especially for
              young people. Existing tools are either too complex or lack
              modern, user-friendly designs. FestiFly set out to solve this by
              creating an intuitive, all-in-one platform. To achieve that
              organizing events becommes effortless and enjoyable.
            </p>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Research & Insights</p>
            <p className="text-block">
              We talked to potential users and explored competing products. Key
              insights:
            </p>
            <div className="text-block bullet-points">
              <span>
                1. Most existing tools were outdated or overly complicated.
              </span>
              <span>
                2. Users wanted clarity, flexibility and visual appeal.
              </span>
              <span>
                3. Coordinating tasks were especially painful in a group.
              </span>
            </div>
            <p className="text-block mb-0">
              Therefore we focused on three main design goals: simplicity,
              speed, and individuality.
            </p>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Ideation & Wireframing</p>
            <p className="text-block">
              I created initial low-fidelity wireframes in Figma, exploring
              different flows for onboarding, event creation and user
              collaboration.
            </p>
            <div className="frames">
              <div className="frame figure1">
                <img
                  src="/projects/frames/festifly/figure1.png"
                  alt="Figure 1"
                />
                <span className="frame-description">
                  Figure 1 - First Figma sketch
                </span>
              </div>
              <div className="frame figure2">
                <img
                  src="/projects/frames/festifly/figure2.png"
                  alt="Figure 2"
                />
                <span className="frame-description">
                  Figure 2 - Idea for the website
                </span>
              </div>
            </div>
          </section>
          <section className="text-block">
            <hr />
            <p className="text-block">Design Process</p>
            <p className="text-block">
              We developed a colorful, clean UI using a consistent design system
              in Tailwind CSS. Animations were built from the start with Framer
              Motion and GSAP, creating smooth transitions and dynamic effects
              that made the product feel responsive and alive.
            </p>
            <div className="frames">
              <div className="frame figure3">
                <img
                  src="/projects/frames/festifly/figure3.png"
                  alt="Figure 3"
                />
                <span className="frame-description">
                  Figure 3 - Final website
                </span>
              </div>
              <div className="frame figure4">
                <img
                  src="/projects/frames/festifly/figure4.png"
                  alt="Figure 4"
                />
                <span className="frame-description">
                  Figure 4 - Final design language
                </span>
              </div>
            </div>
            <p className="text-block mt-4">
              Key features I fully developed in{" "}
              <a
                href="https://www.figma.com/design/lRYgfX8UyjW5NuXghUjkg4/FestiFly?node-id=0-1&t=Hjy4nAClX4WKu9fx-1"
                target="_blank"
                className="link"
              >
                Figma
              </a>
              :
            </p>
            <div className="text-block bullet-points">
              <span>
                1. Creating events with a few clicks, including sending invites
              </span>
              <span>2. Selecting the service providers and locations</span>
              <span>
                3. Managing the event with services like a shared photo album
              </span>
            </div>
            <div className="demo-container">
              <div className="video-wrapper">
                <video
                  className="background-video"
                  src="/projects/frames/festifly/figure5.MP4"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
                <img
                  src="/mockup_iphone-16-pro.png"
                  alt="Figure 5 - iPhone 16 Pro MockUp"
                  className="mockup iphone16"
                />
              </div>
            </div>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Frontend Development</p>
            <p className="text-block">
              I built the full frontend in TypeScript with React and Vite.
              Styling was done with Tailwind CSS and animations were handled
              using GSAP and Framer Motion. My teammate focused on backend logic
              in Node.js, while I focused on user flows, visual design and
              responsiveness.
            </p>
            <p className="text-block">
              We used{" "}
              <a
                href="https://github.com/justthatrandomcoder"
                target="_blank"
                className="link wm"
              >
                GitHub
              </a>{" "}
              for version control and collaboration, ensuring smooth integration
              of our work.
            </p>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Outcome</p>
            <p className="text-block">
              Although we successfully completed the Figma sketches and parts of
              the Frontend, we decided to stop short of a full development.
              Building and maintaining a production-ready backend with AI
              features would have exceeded our current budget and time
              resources.
            </p>
            <p className="text-block">
              Still, the project was a major success in terms of:
            </p>
            <div className="text-block bullet-points">
              <span>1. Skill development</span>
              <span>2. Team collaboration</span>
              <span>3. User-first thinking and design principles</span>
            </div>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">What I learned</p>
            <p className="text-block">
              I enjoyed the process of creating a product from scratch, from
              ideation to design and development. I learned valuable skills and
              I cloud furhter improve my design and coding abilities. I also
              learned how to work in a group, communicate effectively and manage
              my time and resources. I did better understand to what extent,
              building and handling big software projects is a complex task that
              requires a lot of planning, testing, and iteration.
            </p>
            <p className="text-block">...but in a nutshell, I learned:</p>
            <div className="text-block bullet-points wm">
              <span className="first">
                Designing from wireframes to final animations taught me how to
                create consistent, engaging UI experiences.
              </span>
              <span>
                Working with animation libraries like GSAP requires detailed
                planning to maintain performance and code readability.
              </span>
              <span>Real-world product scope often changes.</span>
            </div>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Next Steps</p>
            <p className="text-block">
              While FestiFly won’t be launched publicly, the knowledge and
              components we created are already being used in our new projects.
              I plan to reuse parts of the design system and UI logic in
              upcoming apps.
            </p>
            <p className="text-block">
              If you have any questions or want to know more about the project,
              feel free to cantact me via{" "}
              <a
                href="mailto:me@juliusgrimm.dev"
                target="_blank"
                className="link wm"
              >
                mail
              </a>{" "}
              or on my{" "}
              <a
                href="https://www.instagram.com/julius_gr_/"
                target="_blank"
                className="link wm"
              >
                socials
              </a>
            </p>
          </section>
        </motion.div>
        <Footer />
      </motion.main>
    </>
  );
};

export default FestiFly;
