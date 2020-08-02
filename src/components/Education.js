import React from "react";

const Education = () => (
  <div>
    <div className="info-header">Education</div>
    <div className="info-main-section">
      <div className="workCard">
        <div className="badge-container">
          <span className="badge-text workCard-badge">
            Aug, 2014 - May, 2018
          </span>
        </div>
        <div className="workCard-role">
          Bacherlors of Technology, Information Technology
        </div>
        <div className="workCard-company">GGSIPU</div>
        <div className="workCard-description">
          <div>Scored 79%</div>
          <div>Worked on image security and cryptography projects</div>
        </div>
        <div className="workCard-divider"></div>
      </div>

      <div className="workCard">
        <div className="badge-container">
          <span class="badge-text workCard-badge">March, 2013 - May, 2014</span>
        </div>
        <div className="workCard-role">Senior Secondary School</div>
        <div className="workCard-company">Kendriya Vidyalaya, Delhi Cantt</div>
        <div className="workCard-description">
          <div>Scored 92%</div>
          <div>Participated in youth parliament</div>
        </div>
        <div className="workCard-divider"></div>
      </div>

      <div className="workCard">
        <div className="badge-container">
          <span class="badge-text workCard-badge">March, 2011 - May, 2012</span>
        </div>
        <div className="workCard-role">Secondary School</div>
        <div className="workCard-company">Kendriya Vidyalaya, Delhi Cantt</div>
        <div className="workCard-description">
          <div>Scored 95%</div>
          <div>
            Worked on social science project on the topic of sustainable
            development which was selected at regional level
          </div>
          <div>Participated in Swimming summer camp</div>
        </div>
        <div className="workCard-divider"></div>
      </div>
    </div>
  </div>
);

export default Education;
