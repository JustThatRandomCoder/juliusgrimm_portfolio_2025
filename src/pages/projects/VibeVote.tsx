import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../../components/Header";
import "../../styles/CaseStudie.css";
import Footer from "../../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const VibeVote: React.FC = () => {
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
              src="/projects/thumbnails/vibevote_thumbnail.png"
              alt="Festifly Thumbnail"
              variants={itemVariants}
              onLoad={handleImageLoad}
            />
            <motion.div className="title-container" variants={itemVariants}>
              <div className="title">
                <span className="highlighted">@VibeVote</span> is a song
                requesting tool for DJ’s to simplify songrequesting during
                shows.
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
                Figma, VS Code, HTML, CSS, Python, MongoDB
              </span>
            </div>
            <div className="text-block information">
              <span>Duration: &nbsp;</span>
              <span className="gray-60">May 2024 - September 2024 </span>
            </div>
            <div className="text-block information">
              <span>URL: &nbsp;</span>
              <a href="https://vibevote.de" target="_blank" className="gray-60">
                https://vibevote.de
              </a>
            </div>
            <div className="text-block information">
              <span>Figma Sketch: &nbsp;</span>
              <a
                href="https://www.figma.com/design/j1938zaam803Krt20GTrOI/vibeVoteRedesign?node-id=0-1&t=Q19Dtr73gxTMpHdy-1"
                target="_blank"
                className="gray-60"
              >
                https://figma.com
              </a>
            </div>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">
              VibeVote is a digital tool that allows DJs and event organizers to
              easily collect and manage song requests. Each event gets a unique
              QR code. Every guests can theirfore submit their song requests
              directly from their phones. These requests then appear live on a
              dashboard tailored for DJs, making it seamless to interact with
              the crowd’s vibe.
            </p>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">The Idea</p>
            <p className="text-block">
              The inspiration for VibeVote came during a school event I helped
              to organize as part of my schools tech team. We were hosting a
              party for students and to keep the music engaging, we allowed
              guests to request songs, using pen and paper. That quickly turned
              chaotic. People scribbled illegibly, requests got lost and the
              list was hard to manage.
            </p>
            <p className="text-block">
              I thought: "Why not bring this online?"
            </p>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Research & Insights</p>
            <p className="text-block">
              Before starting development, I explored how song requests were
              typically handled at events, especially in smaller or more casual
              settings like school parties. My own experience at a school event
              highlighted how messy and inefficient paper-based systems were —
              but I also wanted to see what digital alternatives existed.
            </p>
            <div className="text-block bullet-points wm">
              <span className="first">
                Existing tools were overly complex: Some platforms did offer
                song request features, but they were often part of large,
                bloated DJ software ecosystems or required guests to download
                apps, create accounts, or navigate through unintuitive
                interfaces. For quick, casual parties, these were simply an
                overkill.
              </span>
              <span>
                Not optimized for guests: Many tools were DJ-focused, not
                guest-friendly. The barrier to entry (e.g. signing up or
                downloading something) turned people down from using these
                devices altogether.
              </span>
              <span>
                No instant setup: Most platforms didn’t offer a way to quickly
                set up a party, generate a shareable link or QR code and just
                start collecting requests. I wanted something that worked right
                out of the box—no tech skills required.
              </span>
            </div>
            <p className="text-block mb-0">
              From this research, the core values of VibeVote became clear: no
              downloads, no signups, just request and done!
            </p>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Ideation & Wireframing</p>
            <p className="text-block">
              I had to break down the whole idea and ask myself: "What are the
              core features I need to build?" I started with a simple sketch on
              paper, outlining the main components of the app. I then moved to
              Figma to create a more detailed wireframe, focusing on user
              friendly and intuitive desing.
            </p>
            <div className="frames">
              <div className="frame figure1">
                <img
                  src="/projects/frames/vibevote/figure1.png"
                  alt="Figure 1"
                />
                <span className="frame-description">
                  Figure 1 - Final Figma sketch
                </span>
              </div>
              <div className="frame figure2">
                <img
                  src="/projects/frames/vibevote/figure2.png"
                  alt="Figure 2"
                />
                <span className="frame-description">
                  Figure 2 - All important features
                </span>
              </div>
            </div>
          </section>
          <section className="text-block">
            <hr />
            <p className="text-block">First prototype</p>
            <p className="text-block">
              After sketching out the initial idea, I created a simple Figma
              Prototype, showing what the Application should look like and how I
              imagined it to work like.
            </p>

            <p className="text-block mt-4">
              Key features I fully developed in{" "}
              <a
                href="https://www.figma.com/design/j1938zaam803Krt20GTrOI/vibeVoteRedesign?node-id=0-1&t=Q19Dtr73gxTMpHdy-1"
                target="_blank"
                className="link"
              >
                Figma
              </a>
              :
            </p>
            <div className="text-block bullet-points">
              <span>1. Login screen for the DJ</span>
              <span>2. DJ Dashboard with Song Covers</span>
              <span>
                3. Generating and downloading the posters with the QR code
              </span>
            </div>
            <div className="frames">
              <div className="frame figure3 macbook-co">
                <video
                  className="macbook-video"
                  src="/projects/frames/vibevote/figure3.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
                <span className="frame-description">
                  Figure 3 - First Figma Prototype
                </span>
              </div>
            </div>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Development</p>
            <p className="text-block">
              I built VibeVote completely on my own, using a lightweight and
              flexible tech stack. The frontend is done in plain HTML and CSS
              for simplicity and speed, with all UI designs created in Figma. On
              the backend, I used Python with Flask to handle routing, user
              sessions and form logic.
            </p>
            <p className="text-block">
              MongoDB powers the database, allowing flexible storage for user
              accounts and individual song request collections. One technical
              challenge was building a secure login system with encrypted token
              handling, which I implemented from scratch.
            </p>
            <p className="text-block">
              At each event (party) a unique QR code and poster are generated
              using a Python library. Guests scan the code, submit their song
              via a simple form and the request appears live on the DJ’s
              dashboard. Everything runs on a Flask web server and is hosted @
              <a href="https://viebvote.de">vibevote.de</a>
            </p>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Challenges</p>
            <p className="text-block">
              One of the biggest challenges I faced was implementing a secure
              login and signup system. I wanted to ensure user authentication
              was smooth but also secure. I implemented encrypted token handling
              and ensured the data integrity of individual party sessions and
              user requests.
            </p>
            <p className="text-block">
              Another interesting challenge was designing a system to manage and
              save the Songrequests in the database. I came up with a system
              where each user (i.e., DJ or party host) would get their own
              collection in the database. This meant dynamically creating and
              managing collections in MongoDB based on user sessions.
            </p>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Promotion and Marketing</p>
            <p className="text-block">
              To present VibeVote and to find the people looking for an
              appropriate solution, I focused on a few targeted channels. I
              created a dedicated Instagram account to share updates, features
              and behind-the-scenes looks at the project. To give it a stronger
              visual presence, I produced a short promo video and launched a
              VibeVote YouTube channel, showcasing how the platform works in a
              real party scenario.
            </p>
            <p className="text-block">
              I also submitted the project to Product Hunt to reach a broader
              tech-savvy audience and gather feedback from early adopters. These
              efforts helped build initial visibility and brought the tool into
              the hands of DJs, organizers, and curious testers.
            </p>
            <p className="text-block">The short promo video for VibeVote:</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HMhPN_1uyFM?si=1UOhazRI1uwDExmE&amp;controls=0"
              title="YouTube video player"
              style={{
                border: "none",
                marginTop: "4vw",
                width: "100%",
                height: "100%",
                aspectRatio: "16/9",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Outcome</p>
            <p className="text-block">
              VibeVote turned a chaotic paper-based request system into a smooth
              digital experience. It’s now hosted live at vibevote.de and can be
              used at parties, school events, or even professional DJ gigs. It’s
              been a fun and challenging solo build — one that blends utility
              with a simple and intuitive user experience.
            </p>
            <p className="text-block">
              The features I implemeted in the final version are:
            </p>
            <div className="text-block bullet-points">
              <span>1. Easy set up of a Party for the DJ</span>
              <span>2. Generating and downloading the QR code with poster</span>
              <span>3. Sending and managing songrequests easily</span>
            </div>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">What I learned</p>
            <p className="text-block">
              VibeVote was my first really big software project and because I
              handled everything on my own, I had to step into many different
              roles beyond just coding. I built the entire system from the
              ground up—frontend, backend, database, authentication—but also
              created the brand, produced a YouTube trailer and promoted it
              across platforms.
            </p>
            <p className="text-block">
              This process was much more than just development. I got deeper
              into design thinking, product communication and even sound design
              while editing the promo video. It pushed me to learn how to tell a
              story around a product and present it in a way that is both clear
              and engaging.
            </p>
            <p className="text-block">
              Working across disciplines gave me a broader perspective on what
              it takes to build something real — and ship it.
            </p>
            <p className="text-block">
              Beyond the code, I also gained valuable experience in product
              thinking:
            </p>
            <div className="text-block bullet-points wm">
              <span className="first">
                1. designing for both DJs and guests
              </span>
              <span>2. keeping things simple</span>
              <span>
                3. promoting the project effectively across platforms.
              </span>
            </div>
          </section>
          <section className="text-block first">
            <hr />
            <p className="text-block">Next Steps</p>
            <p className="text-block">
              VibeVote will remain online and fully functional @{" "}
              <a href="https://vibevote.de">vibevote.de</a>, ready to be used at
              events and parties. However, I don't plan to add new features in
              the near future. Right noe I'm building new projects and continue
              to grow my skills as a developer and designer.
            </p>
            <p className="text-block">
              The project taught me a lot, and I’m proud of what it offers in
              its current state. While it may not go much for now, it stands as
              a complete and useful tool — and for me a milestone in my personal
              development journey.
            </p>
            <p className="text-block">
              If you have any questions or want to know more about the project,
              feel free to contact me via{" "}
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

export default VibeVote;
