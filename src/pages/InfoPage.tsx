import React, { useEffect, useRef } from "react";
/*import { motion } from "framer-motion";*/
import "../styles/InfoPage.css";

/* Components */
import Header from "../components/Header";
import Footer from "../components/Footer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IndexPage: React.FC = () => {
  return (
    <main>
      <Header />
      <div className="content-container">
        <div className="content-inner">
          <div className="text-container">
            <section className="about">
              <p className="text-block first">
                Hey, I’m Julius Grimm, 14 y/o and I’m supposingly a nerd. I am
                currently crafting in{" "}
                <span className="highlighted"> Tübingen, Germany</span> and
                student <span className="highlighted">@Uhland-Gymnasium</span>{" "}
                Tübingen
              </p>
              <p className="text-block">
                I'm currentlly working on different projects, including{" "}
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
                and a YouTube Chanel, but one thing I always sticked to was
                coding.{" "}
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
                hitting the courts, going to the gym daily, rowing sometimes and
                cooking.
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
          </div>
          <div className="image-container">
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
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default IndexPage;
