import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("");
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     active: false,
  //     navBarActiveClass: "",
  //   };
  // }

  const toggleHamburger = (isActive) => {
    setIsActive(!isActive);
    setNavBarActiveClass(isActive ? "" : "is-active"); // ?
    // toggle the active boolean in the state

    // this.setState(
    //   {
    //     active: !this.state.active,
    //   },
    //   // after state has been updated,
    //   () => {
    //     // set the class in state for the navbar accordingly
    //     this.state.active
    //       ? this.setState({
    //           navBarActiveClass: "is-active",
    //         })
    //       : this.setState({
    //           navBarActiveClass: "",
    //         });
    //   }
    // );
  };

  return (
    <>
      <nav class="navbar" aria-label="main">
        <button aria-label="open" onClick="toggleMenu()" class="menu-icon">
          <img
            src="/images/hamburger-open-menu.svg"
            alt="open menu"
            aria-hidden="true"
          />
        </button>
        <ul class="internal-links">
          <li id="logo-container">
            <a href="{{ site.baseurl }}/">
              <img
                class="brigade-logo"
                src="/images/cfc_logo_2021.svg"
                alt="Code For Chicago Logo"
              />
            </a>
          </li>
          <li class="hideable-int-link">
            <a href="/projects">Projects</a>
          </li>
          <li class="hideable-int-link">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li class="hideable-int-link">
            <a href="/join">Join Us</a>
          </li>
          <li class="hideable-int-link">
            <a href="/about">About</a>
          </li>
        </ul>
        <div class="donate-and-socials">
          <ul class="external-links">
            <li class="social-logo">
              <a href="https://www.meetup.com/code-for-chicago" target="_blank">
                <img class="social-img" src="/images/meetup.svg" alt="Meetup" />
              </a>
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
          <a
            href="https://www.codeforamerica.org/donate-to-a-brigade?utm_campaign=Code%20for%20Chicago&utm_source=Brigade%20site"
            target="blank"
            class="button donate-button"
          >
            Donate
          </a>
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
