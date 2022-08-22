import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/cfc_logo_2021.svg";
import Button from "./Button";
import "./Navbar.scss";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("");

  const toggleHamburger = (isActive) => {
    setIsActive(!isActive);
    setNavBarActiveClass(isActive ? "" : "is-active"); // ?
  };

  return (
    <>
      <nav class="navbar" aria-label="main">
        <button
          aria-label="open"
          onClick={() => toggleHamburger()}
          class="menu-icon"
        >
          <img
            src="/images/hamburger-open-menu.svg"
            alt="open menu"
            aria-hidden="true"
          />
        </button>
        <ul class="internal-links">
          <li id="logo-container">
            <Link to="/">
              <img
                class="brigade-logo"
                src={logo}
                alt="Code For Chicago Logo"
              />
            </Link>
          </li>
          <li class="hideable-int-link">
            <Link to="/projects">Projects</Link>
          </li>
          <li class="hideable-int-link">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li class="hideable-int-link">
            <Link to="/join">Join Us</Link>
          </li>
          <li class="hideable-int-link">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div class="donate-and-socials">
          <ul class="external-links">
            <li class="social-logo">
              <Link
                href="https://www.meetup.com/code-for-chicago"
                target="_blank"
              >
                <img class="social-img" src="/images/meetup.svg" alt="Meetup" />
              </Link>
            </li>
            <li class="social-logo">
              <a
                href="https://code-for-chicago-slack-invite.herokuapp.com/"
                target="_blank"
              >
                <img class="social-img" src="/images/slack.svg" alt="Slack" />
              </a>
            </li>
            <li class="social-logo">
              <a href="https://github.com/Code-For-Chicago/" target="_blank">
                <img class="social-img" src="/images/github.svg" alt="GitHub" />
              </a>
            </li>
          </ul>
          <Button
            href="https://www.codeforamerica.org/donate-to-a-brigade?utm_campaign=Code%20for%20Chicago&utm_source=Brigade%20site"
            variant="donate"
          >
            Donate
          </Button>
        </div>
      </nav>
      <nav aria-label="site" aria-expanded="false" class="mobile-nav">
        <ul></ul>
      </nav>
    </>
  );
};

export default Navbar;

// return (
//   <nav
//     className="navbar is-transparent"
//     role="navigation"
//     aria-label="main-navigation"
//   >
//     <div className="container">
//       <div className="navbar-brand">
//         <Link to="/" className="navbar-item" title="Logo">
//           <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
//         </Link>
//         {/* Hamburger menu */}
//         <div
//           className={`navbar-burger burger ${navBarActiveClass}`}
//           data-target="navMenu"
//           role="menuitem"
//           tabIndex={0}
//           onKeyPress={() => toggleHamburger(isActive)}
//           onClick={() => toggleHamburger(isActive)}
//         >
//           <span />
//           <span />
//           <span />
//         </div>
//       </div>
//       <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
//         <div className="navbar-start has-text-centered">
//           <Link className="navbar-item" to="/about">
//             About
//           </Link>
//           <Link className="navbar-item" to="/products">
//             Products
//           </Link>
//           <Link className="navbar-item" to="/blog">
//             Blog
//           </Link>
//           <Link className="navbar-item" to="/contact">
//             Contact
//           </Link>
//           <Link className="navbar-item" to="/contact/examples">
//             Form Examples
//           </Link>
//         </div>
//         <div className="navbar-end has-text-centered">
//           <a
//             className="navbar-item"
//             href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <span className="icon">
//               <img src={github} alt="Github" />
//             </span>
//           </a>
//         </div>
//       </div>
//     </div>
//   </nav>
// );
