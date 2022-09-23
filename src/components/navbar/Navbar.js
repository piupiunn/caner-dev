import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [showContact, setShowContact] = useState(false);

  const showContactInfo = (e) => {
    setShowContact(!showContact);

    showContact
      ? (document.querySelector(".seriousness").textContent =
          "Then click for some seriousness  .")
      : (document.querySelector(".seriousness").textContent =
          "  Enough of this seriousness");
  };

  return (
    <div className="navbar-parent">
      <p className="seriousness" onClick={showContactInfo}>
        Then click for some seriousness
      </p>
      <div class={`navbar ${showContact && "show-contact-info"}`}>
        <p>
          <button>
            <span>
              <a
                className="navbar-link"
                href="https://www.linkedin.com/in/caner-demir-frontend-developer/"
              >
                My Linkedin
              </a>
            </span>
            <div class="top"></div>
            <div class="left"></div>
            <div class="bottom"></div>
            <div class="right"></div>
          </button>
        </p>
        <p>
          <button>
            <span>
              <a className="navbar-link" href="https://github.com/piupiunn">
                My Github
              </a>
            </span>
            <div class="top"></div>
            <div class="left"></div>
            <div class="bottom"></div>
            <div class="right"></div>
          </button>
        </p>
      </div>
    </div>
  );
}
