import React from "react";
import "./top-info.css";
import holagif from "../../img/hola.gif";
import talentgif from "../../img/talent.gif";
import projectgif from "../../img/project.gif";

import byegif from "../../img/bye.gif";

export default function TopInfo() {
  return (
    <div className="container">
      <div className="top-info">
        <div className="main-infos">
          <p className="main-infos-parent-p">
            Hi <img className="hola-gif" src={holagif} alt="" />, I'm Caner.
            <p className="middle-info-p">
              The following are all my talents
              <img className="hola-gif" src={talentgif} alt="" /> and projects
              <img className="hola-gif" src={projectgif} alt="" /> I've
              completed. If you want to meet, contact details are on the upper
              left.
              <p className="see-you-p">
                See you ^^ <img className="hola-gif" src={byegif} alt="" />
              </p>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
