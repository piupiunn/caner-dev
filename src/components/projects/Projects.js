import React, { useState } from "react";

//style
import "./projects.css";

export default function Projects({
  projectImg,
  projectDetails,
  detailButton,
  projectLink,
}) {
  const [showInfo, setShowInfo] = useState(false);

  detailButton = document.querySelector(".about-the-project-button");

  const showDetails = (e) => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="project">
      <img src={projectImg} alt="" />
      <div className="project-info-p-parent">
        <p className={`project-info ${showInfo && "show"}`}>{projectDetails}</p>
      </div>

      <a href={projectLink}>
        <button className="to-the-project-button">To the project </button>
      </a>
      <button onClick={showDetails} className="about-the-project-button">
        About the project
      </button>
    </div>
  );
}
