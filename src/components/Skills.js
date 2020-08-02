import React from "react";

const Skills = () => (
  <div>
    <div className="info-header">Skills</div>
    <div className="info-main-section">
      <div className="progress-bar-container">
        <div className="progress-bar-name">JavaScript</div>
        <div className="progress-bar-wrapper">
          <div className="progress-bar" style={{ width: "90%" }}></div>
        </div>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar-name">React JS</div>
        <div className="progress-bar-wrapper">
          <div className="progress-bar" style={{ width: "85%" }}></div>
        </div>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar-name">Redux JS</div>
        <div className="progress-bar-wrapper">
          <div className="progress-bar" style={{ width: "80%" }}></div>
        </div>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar-name">HTML</div>
        <div className="progress-bar-wrapper">
          <div className="progress-bar" style={{ width: "85%" }}></div>
        </div>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar-name">CSS</div>
        <div className="progress-bar-wrapper">
          <div className="progress-bar" style={{ width: "75%" }}></div>
        </div>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar-name">Node JS</div>
        <div className="progress-bar-wrapper">
          <div className="progress-bar" style={{ width: "75%" }}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
