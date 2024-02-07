import * as React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import "animate.css/animate.compat.css";
import "animate.css";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
// import "animate.css/animate.min.css";
// import ScrollAnimation from 'react-animate-on-scroll';
import ContactPage from "../Contact/ContactPage";
import CodePage from "../Code/CodePage";
import UXPage from "../UX/UXPage";
import "./AboutPage.css";

function AboutPage() {
  const Component = <SocialIcon url="https://twitter.com" />;
  return (
    <>
      <div className="welcome">
        <h1 className="animate__animated animate__heartBeat">
          Welcome! I'm Siv (seef).
        </h1>

        <p>
          I am a frontend developer and UX designer based out of Minneapolis,
          MN.
          <br />I am deeply committed to infusing curiosity, a sense of whimsy,
          and a spirit of inclusion into everything I do.
          <br />
          Let's turn ideas into reality!
        </p>
        <div className="social-icons-container">
          <SocialIcon className="git-icon" url="https://github.com/searley96" target="_blank"/>
          <SocialIcon className="linked-in-icon" url="https://www.linkedin.com/in/siv-earley-93b41326a/" target="_blank" />
        </div>
      </div>
      <ScrollLink to="contact" smooth={true} duration={500}>
        {/* Scroll to Contact */}
      </ScrollLink>

      <Zoom>
        <Element name="contact">
          <ContactPage />
        </Element>
      </Zoom>

      <ScrollLink to="code" smooth={true} duration={500}>
        {/* Scroll to Code */}
      </ScrollLink>

      <Zoom>
        <Element name="code">
          <CodePage />
        </Element>
      </Zoom>

      <ScrollLink to="ux" smooth={true} duration={500}>
        {/* Scroll to ux */}
      </ScrollLink>

      <Zoom>
        <Element name="ux">
          <UXPage />
        </Element>
      </Zoom>
    </>
  );
}

export default AboutPage;
