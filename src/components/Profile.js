import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import photo from "../assets/photo.jpg";
import profilePic from "../assets/profile-pic.jpg";
import cv from "../assets/resumeSushant.pdf";
const Profile = () => (
  <div className="profile-container">
    <div className="profile-image-container">
      <img src={photo} alt="bg-pic" />
    </div>
    <div className="profile-image-wrapper">
      <img src={profilePic} alt="sushant" />
    </div>
    <div className="profile-info-wrapper">
      <div className="profile-info-name">Sushant Kumar Singh</div>
      <div className="profile-info-title">Software Developer</div>
      <div className="social-links-container">
        <a
          href="https://www.linkedin.com/in/sushantkrsingh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/razorrahul123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="social-icon" icon={faGithub} />
        </a>
      </div>
      <div className="cv-wrapper">
        <a href={cv} download="Sushantresume.pdf" className="cv-btn">
          Download CV
          <FontAwesomeIcon className="social-icon" icon={faDownload} />
        </a>
      </div>
    </div>
  </div>
);

export default Profile;
