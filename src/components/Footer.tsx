import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  const mainLinks = [
    { label: "Index", href: "/" },
    { label: "Info", href: "/info" },
    { label: "Resume", href: "https://example.com/resume", external: true },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/julius-gr/",
      external: true,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/julius_gr_",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/justthatrandomcoder",
      external: true,
    },
    { label: "Email", href: "mailto:me@juliusgrimm.dev", external: true },
  ];

  const infoText =
    "This website was created with lot’s of ❤️ sitting in cafes ☕️";
  const copyrightText = "© 2025 Julius Grimm; All rights reserved";

  const renderLinks = (
    links: { label: string; href: string; external?: boolean }[]
  ) =>
    links.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target={link.external ? "_blank" : "_self"}
        rel={link.external ? "noopener noreferrer" : undefined}
      >
        {link.label}
      </a>
    ));

  return (
    <footer className="footer">
      <hr />
      <div className="footer-content">
        <div className="footer-inner">
          <div className="link-container">
            <div className="link-headline">MAIN</div>
            <div className="footer-links">{renderLinks(mainLinks)}</div>
          </div>
          <div className="link-container">
            <div className="link-headline">SOCIALS</div>
            <div className="footer-links">{renderLinks(socialLinks)}</div>
          </div>
          <div className="link-container">
            <div className="link-headline">INFO</div>
            <div className="footer-text">{infoText}</div>
          </div>
          <div className="link-container">
            <div className="link-headline">COPYRIGHT</div>
            <div className="footer-text">{copyrightText}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
