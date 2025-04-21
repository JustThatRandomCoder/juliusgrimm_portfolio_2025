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
                currently crafting in Tübingen, Germany and student{" "}
                <span className="highlighted">@Uhland-Gymnasium</span> Tübingen
              </p>
              <p className="text-block first">
                Hey, I’m Julius Grimm, 14 y/o and I’m supposingly a nerd. I am
                currently crafting in Tübingen, Germany and student{" "}
                <span className="highlighted">@Uhland-Gymnasium</span> Tübingen
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
