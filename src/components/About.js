import React from "react";

const About = () => (
  <div>
    <div className="info-header">About Me</div>
    <div className="info-mid-section">
      Software Developer with experience in working with several frontend
      projects using react JS and Redux. A quick learner and creative web
      developer.
    </div>
    <div className="info-main-section">
      <div className="badge-container">
        <span className="badge-text">Age</span>
        <span className="badge-sub-text">24</span>
      </div>
      <div className="badge-container">
        <span className="badge-text">Location</span>
        <span className="badge-sub-text">Bengaluru</span>
      </div>
      <div className="badge-container">
        <span className="badge-text">Professional Experience</span>
        <span className="badge-sub-text">2 years</span>
      </div>
      <div className="badge-container">
        <span className="badge-text">Current Role</span>
        <span className="badge-sub-text">Software Developer </span>
      </div>
      <div className="badge-container">
        <span className="badge-text">Email</span>
        <span className="badge-sub-text">rahul.kr.sushant@gmail.com</span>
      </div>
      <div className="info-header">Highlights</div>
      <div>
        <div className="highlights">
          <ul>
            <li>Worked on 5 different projects in 2 different organizations</li>
            <li>
              Improved the performance of react app by removing unnecessary
              packages
            </li>
            <li>Worked on building optimal web apps as per the designs</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default About;
