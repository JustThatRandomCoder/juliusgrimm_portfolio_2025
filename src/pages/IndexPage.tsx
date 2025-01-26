import React from "react";
import "../styles/IndexPage.css";
import Header from "../components/header";

const IndexPage: React.FC = () => {
  return (
    <main>
      <Header />
      <section className="landing-page">
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
            Hey there! I’m Julius Grimm, a 14 y/o fullstack web developer & UI /
            UX designer, focusing on creating friendly user experiences, loving
            details, currently cofounding{" "}
            <span className="highlighted">@FestiFly</span>.
          </div>
        </div>
      </section>
      <section className="work">
        <hr />
      </section>
    </main>
  );
};

export default IndexPage;
