import React, { useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLaptopCode,
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  const [tab, setTab] = useState("About");

  const TabChange = (item) => {
    setTab(item);
  };

  let tabToShow;

  switch (tab) {
    case "Skills": {
      tabToShow = <Skills />;
      break;
    }
    case "Experience": {
      tabToShow = <Experience />;
      break;
    }
    case "Education": {
      tabToShow = <Education />;
      break;
    }
    default: {
      tabToShow = <About />;
    }
  }
  return (
    <div className="info-container">
      <div className="nav-container">
        <div
          className={`nav-item ${tab === "About" ? "active" : ""}`}
          onClick={() => TabChange("About")}
        >
          <FontAwesomeIcon className="social-icon-nav" icon={faUser} />
          <div className="nav-info">About</div>
        </div>
        <div
          className={`nav-item ${tab === "Skills" ? "active" : ""}`}
          onClick={() => TabChange("Skills")}
        >
          <FontAwesomeIcon className="social-icon-nav" icon={faLaptopCode} />
          <div className="nav-info">Skills</div>
        </div>
        <div
          className={`nav-item ${tab === "Experience" ? "active" : ""}`}
          onClick={() => TabChange("Experience")}
        >
          <FontAwesomeIcon className="social-icon-nav" icon={faBriefcase} />
          <div className="nav-info">Experience</div>
        </div>
        <div
          className={`nav-item ${tab === "Education" ? "active" : ""}`}
          onClick={() => TabChange("Education")}
        >
          <FontAwesomeIcon className="social-icon-nav" icon={faGraduationCap} />
          <div className="nav-info">Education</div>
        </div>
      </div>
      <div className="info-container-wrapper">{tabToShow}</div>
    </div>
  );
};

export default Info;
