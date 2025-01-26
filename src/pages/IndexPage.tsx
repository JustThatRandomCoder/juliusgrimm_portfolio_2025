import React from "react";

const IndexPage: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>This is the about me section.</p>
        </section>
        <section>
          <h2>Projects</h2>
          <p>This is the projects section.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>This is the contact section.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Julius Grimm</p>
      </footer>
    </div>
  );
};

export default IndexPage;
