import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../../components/Header";
import "../../styles/CaseStudie.css";
import Footer from "../../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const SkyView: React.FC = () => {
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
              src="/projects/thumbnails/skyview_thumbnail.png"
              alt="Festifly Thumbnail"
              variants={itemVariants}
              onLoad={handleImageLoad}
            />
            <motion.div className="title-container" variants={itemVariants}>
              <div className="title">
                <span className="highlighted">@SkyView</span> is is an
                Open-Source weather service I developped during a Hackathon in
                2024
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
              <span className="gray-60">Just me</span>
            </div>
            <div className="text-block information">
              <span>Tools: &nbsp;</span>
              <span className="gray-60">
                Figma, VS Code, Python, Flask, HTML, CSS, JavaScript,
                OpenWeatherMap API
              </span>
            </div>
            <div className="text-block information">
              <span>Duration: &nbsp;</span>
              <span className="gray-60">14 July 2024 - 16 July 2024 </span>
            </div>
            <div className="text-block information">
              <span>Part of: &nbsp;</span>
              <span className="gray-60">MiniHackathon by Kevin Chromik</span>
            </div>
            <div className="text-block information">
              <span>URL: &nbsp;</span>
              <a
                href="https://skyview.juliusgrimm.dev"
                target="_blank"
                className="gray-60"
              >
                https://skyview.juliusgrimm.dev
              </a>
            </div>
            <div className="text-block information">
              <span>GitHub: &nbsp;</span>
              <a
                href="https://github.com/justthatrandomcoder/skyview"
                className="gray-60"
                target="_blank"
              >
                https://github.com
              </a>
            </div>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">
              SkyView is a fast, no-tracking, open-source weather app created
              for a mini-hackathon hosted by YouTuber{" "}
              <a
                href="https://www.youtube.com/@KevinChromik"
                target="_blank"
                className="link wm"
              >
                @Kevin Chromik
              </a>
              . The challenge: Build something useful using the OpenWeatherMap
              API over a weekend.
            </p>
            <p className="text-block">
              I decided to build a tool that respects user privacy, doesn’t
              track data, and still looks great across devices — all within a
              48-hour sprint.
            </p>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">The Idea</p>
            <p className="text-block">
              Many weather apps are overloaded with ads, require GPS
              permissions, or ask users to sign up. Why can’t checking the
              weather just be… simple?
            </p>
            <p className="text-block">
              Inspired by minimalist tools and the hackathon’s tight time
              constraint, I set out to make a clean, open-source weather app
              that:
            </p>
            <div className="text-block bullet-points wm">
              <span className="first">1. Requires no login</span>
              <span>2. Doesn’t track the user</span>
              <span>3. Gives real-time results from anywhere in the world</span>
              <span>4. Looks good on mobile and desktop</span>
            </div>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Hackathon Context</p>
            <p className="text-block">
              This project was built as part of a community mini-hackathon
              hosted by Kevin Chromik — a developer-focused creator on YouTube.
              The challenge was to build anything using the OpenWeatherMap API
              in just a couple of days.
            </p>
            <p className="text-block">
              My goal was to create something that felt complete, polished, and
              immediately usable — not just a prototype.
            </p>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Research & Planning</p>
            <p className="text-block">
              looked at popular weather apps and found three recurring problems:
            </p>
            <div className="text-block bullet-points wm">
              <span className="first">
                Privacy Invasion – Forced location permissions and tracking.
              </span>
              <span>
                Cluttered UIs – Weather data buried under ads and widgets.
              </span>
              <span>
                Slow Performance – Overuse of JavaScript frameworks slowed
                things down.
              </span>
            </div>
            <p className="text-block mb-0">
              I decided to go in the opposite direction: Fast. Clean. Anonymous.
              Useful.
            </p>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Ideation & Wireframing</p>
            <p className="text-block">
              With just 48 hours, I sketched the key screens on paper first,
              then quickly moved into Figma to visualize the layout. I focused
              on:
            </p>
            <div className="text-block bullet-points wm">
              <span className="first">1. Large, readable weather data</span>
              <span>2. Minimal input (just a city name)</span>
              <span>
                3. Responsive layout that works equally well on phones and
                desktops
              </span>
            </div>
            <div className="frames">
              <div className="frame figure1">
                <img
                  src="/projects/frames/skyview/figure1.png"
                  alt="Figure 1"
                />
                <span className="frame-description">
                  Figure 1 - Final Figma sketch
                </span>
              </div>
              <div className="frame figure2">
                <img
                  src="/projects/frames/skyview/figure2.png"
                  alt="Figure 2"
                />
                <span className="frame-description">Figure 2 - Final App</span>
              </div>
            </div>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Development</p>
            <p className="text-block">
              SkyView was built with simplicity and speed in mind, both in terms
              of user experience and development approach. I used Python with
              Flask as the backend framework to handle routing and API requests
              to OpenWeatherMap, while the frontend was kept intentionally
              lightweight using HTML, CSS, and JavaScript.
            </p>
            <p className="text-block">
              The core functionality revolves around a user input field where
              anyone can type in a city name. This triggers a call to the
              OpenWeatherMap API, and the relevant weather data — temperature,
              description, humidity, wind speed, and more — is displayed
              instantly on the page.
            </p>
            <p className="text-block">
              To ensure the app respects privacy, I deliberately avoided any
              kind of location tracking, cookie usage, or analytics scripts. All
              requests are initiated manually by the user, and no data is stored
              or logged in the backend.
            </p>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Challenges</p>
            <p className="text-block">
              One of the biggest challenges during the development of SkyView
              was working with the OpenWeatherMap API under a tight time
              constraint. While the API is powerful, its documentation is fairly
              extensive, and understanding the exact structure of the data
              response took more time than expected — especially in a fast-paced
              hackathon setting.
            </p>
            <p className="text-block">
              At first, I struggled to filter out only the essential information
              (like temperature, description, and wind speed) without getting
              lost in the broader documentation. Parsing nested JSON responses
              and mapping them cleanly into the frontend required extra
              attention.
            </p>
            <p className="text-block">
              However, once I got familiar with the API’s structure, things
              started to click. I was able to build a functional integration
              that reliably fetched and displayed the right weather data for any
              city, and I even added proper error handling for invalid inputs or
              failed requests.
            </p>
            <p className="text-block">
              This challenge taught me how to quickly navigate documentation,
              identify what’s truly important, and make something work under
              pressure—all valuable lessons for future API-driven projects.
            </p>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Presentation</p>
            <p className="text-block">
              To showcase SkyView to other participants at the end of the
              hackathon, I created a simple promo poster and a short video demo.
              The poster highlighted the app’s key features and clean interface,
              while the video walked viewers through the core functionality —
              from entering a city to getting real-time weather data.
            </p>
            <p className="text-block">
              This quick presentation helped communicate the app’s purpose
              clearly and gave it a more polished, product-like feel despite the
              short development window.
            </p>
            <p className="text-block">
              This Figure shows the poster I created for the presentation:
            </p>
            <img
              style={{ marginTop: "2vw", width: "100%", height: "100%" }}
              src="/projects/frames/skyview/figure3.png"
              alt="Figure 3"
            />
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Outcome</p>
            <p className="text-block">
              SkyView successfully delivered on its goal: a clean, privacy -
              focused weather app built in under 48 hours. Despite the time
              constraints, it turned into a fully functional tool with a smooth
              user experience and a clear purpose. The feedback from other
              participants was positive, especially around the simplicity and
              visual design. While it’s a small project, it serves as a complete
              example of what can be achieved in a short, focused sprint.
            </p>
            <p className="text-block">
              The Features I implemeted in the final version are:
            </p>
            <div className="text-block bullet-points">
              <span>1. Functional landing page</span>
              <span>2. 48-hour weather forecast</span>
              <span>3. Responsive and clean design</span>
            </div>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">What I learned</p>
            <p className="text-block">
              This mini-hackathon was my first ever hackathon, and needing to
              complete a full project in just 48 hours was a great learning
              experience. It challenged me to make fast, focused decisions and
              balance both design and development under pressure. SkyView
              specifically taught me how to quickly navigate and work with a
              large API under tight time pressure. Understanding the
              OpenWeatherMap structure, pulling only what I needed, and turning
              it into something usable was a valuable hands-on experience.
            </p>
            <p className="text-block">
              Beyond the technical side, the project pushed me to build,
              document, and present a complete app — all within a weekend. It
              was a crash course in fast-paced development and clear
              communication.
            </p>
            <p className="text-block">
              summarizing the experience, I learned a lot about:
            </p>
            <div className="text-block bullet-points wm">
              <span className="first">
                1. Efficiently working with large, unfamiliar APIs
              </span>
              <span>
                2. Building and shipping a functional project on a deadline
              </span>
              <span>3. Presenting ideas clearly through visuals and demos</span>
            </div>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Next Steps</p>
            <p className="text-block">
              SkyView will remain available on GitHub as an open-source project,
              showcasing both the idea and the execution. I don’t plan to add
              new features for now, as the hackathon challenge has been
              completed — but the project stands as a finished, usable app and a
              personal milestone in rapid prototyping and clean design.
            </p>
            <p className="text-block">
              If you have any questions or want to know more about the project,
              feel free to reach out to me via{" "}
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

export default SkyView;
