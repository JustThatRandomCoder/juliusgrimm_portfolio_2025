import React from "react";
import Header from "../../components/Header";
import "../../styles/CaseStudie.css";

const FestiFly: React.FC = () => {
  return (
    <main className="festifly-page">
      <Header />
      <div className="content-container">
        <section className="thumbnail-section">
          <img
            className="thumbnail"
            src="/projects/thumbnails/festifly_thumbnail.jpg"
            alt="Festifly Thumbnail"
          />
          <div className="title-container">
            <div className="title">
              <span className="highlighted">@FestiFly</span> is an all-in-one
              eventmanagement tool to plan and host your own event.{" "}
            </div>
            <div className="role">UI / UX Design & Fullstack Development </div>
          </div>
        </section>
        <section className="text-block first">
          <hr />
          <p className="text-block">Overview</p>
          <div className="text-block">
            <span>Team:</span>&nbsp;
            <span className="gray-60">2 People</span>
          </div>
          <div className="text-block">
            <span>Tools:</span>&nbsp;
            <span className="gray-60">Figma, VS Code, TypeScript, React</span>
          </div>
          <div className="text-block">
            <span>Duration:</span>&nbsp;
            <span className="gray-60">September 2024 - April 2025 </span>
          </div>
        </section>
        <section className="text-block first">
          <hr />
          <p className="text-block m-0">
            FestiFly is a modern web app that aimed to streamline event planning
            for young people through intuitive design and smart automation.
            Although we decided not to continue development after completing the
            frontend, the project taught us valuable lessons in product design,
            team collaboration, and user-centered thinking.
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
              1. Most existing tools felt outdated or overly corporate.
            </span>
            <span>
              2. Users wanted clarity, flexibility, and visual appeal.
            </span>
            <span>
              3. Coordinating tasks in a group was especially painful.
            </span>
          </div>
          <p className="text-block mb-0">
            From this, we focused on three main design goals: simplicity, speed,
            and personality.
          </p>
        </section>
        <section className="text-block first">
          <hr />
          <p className="text-block">Ideation & Wireframing</p>
          <p className="text-block">
            I created initial low-fidelity wireframes in Figma, exploring
            different flows for onboarding, event creation, and user
            collaboration.
          </p>
          <div className="frames">
            <div className="frame figure1">
              <img src="/projects/frames/figure1.png" alt="Figure 1" />
              <span className="frame-description">
                Figure 1 - First Figma sketch
              </span>
            </div>
            <div className="frame figure2">
              <img src="/projects/frames/figure2.png" alt="Figure 2" />
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
              <img src="/projects/frames/figure3.png" alt="Figure 3" />
              <span className="frame-description">
                Figure 3 - Final website
              </span>
            </div>
            <div className="frame figure4">
              <img src="/projects/frames/figure4.png" alt="Figure 4" />
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
                src="/projects/frames/figure5.MP4"
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
      </div>
    </main>
  );
};

export default FestiFly;
