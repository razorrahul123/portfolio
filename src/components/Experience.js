import React from "react";

const Experience = () => (
  <div>
    <div className="info-header">Work Experience</div>
    <div className="info-main-section">
      <div className="workCard">
        <div className="badge-container">
          <span class="badge-text workCard-badge">Sep, 2020 - Present</span>
        </div>
        <div className="workCard-role">Product Engineer</div>
        <div className="workCard-company">UrbanPiper</div>
        <div className="workCard-description">
          <div>
            Working on restaurant automation products.
          </div>
        </div>
        <div className="workCard-divider"></div>
      </div>
      <div className="workCard">
        <div className="badge-container">
          <span className="badge-text workCard-badge">Jan, 2020 - Sep, 2020</span>
        </div>
        <div className="workCard-role">Software Developer</div>
        <div className="workCard-company">Xcelerator</div>

        <div className="workCard-description">
          <div>
            Part of Platform Development team, Working in the development of
            xcelerator platform built using ReactJS which is used by teachers,
            students, mentors, and institutes.
          </div>
          <div>Worked on full UI revamp of the platform.</div>
          <div>Added new features and functionality to the platform</div>
        </div>
        <div className="workCard-divider"></div>
      </div>

      <div className="workCard">
        <div className="badge-container">
          <span class="badge-text workCard-badge">Jun, 2019 - Jan, 2020</span>
        </div>
        <div className="workCard-role">SDE 1</div>
        <div className="workCard-company">Cowrks</div>
        <div className="workCard-description">
          <div>
            Worked on the development of cowrks as well as convergehere websites
            and internally used products honcho and nucleus using react and
            redux-saga.
          </div>
          <div>
            Migrated Class based components to Functional components using
            Hooks.
          </div>
          <div>Created web scraper for finding issues in the web apps.</div>
          <div>Added new features and functionality to the platform.</div>
        </div>
        <div className="workCard-divider"></div>
      </div>

      <div className="workCard">
        <div className="badge-container">
          <span class="badge-text workCard-badge">Dec, 2018 - Jun, 2019</span>
        </div>
        <div className="workCard-role">Data Science Research Analyst</div>
        <div className="workCard-company">Shyftpath</div>
        <div className="workCard-description">
          <div>
            Developed Interactive dashboard for HR using tableau (Team Lead)
          </div>
          <div>
            Worked on applying data analytics in HR domain using R and found
            solutions to problem such as Employee segmentation using RFM (Team
            Lead), Employee satisfaction key factors identification using factor
            analysis,
          </div>
          <div>
            Creating responsive dashboards using tableau and providing detailed
            insights
          </div>
        </div>
        <div className="workCard-divider"></div>
      </div>

      <div className="workCard">
        <div className="badge-container">
          <span class="badge-text workCard-badge">July, 2018 - Sep, 2018</span>
        </div>
        <div className="workCard-role">Intern</div>
        <div className="workCard-company">Samsung R&amp;D Institute, Noida</div>
        <div className="workCard-description">
          <div>
            Developed Interactive dashboard for HR using tableau (Team Lead)
          </div>
          <div>
            Working closely with the Tizen OS UI development team to improve the
            responsiveness of Samsung Smart TVs
          </div>
          <div>
            Worked on developing test cases, finding and reporting issues to the
            development team
          </div>
        </div>
        <div className="workCard-divider"></div>
      </div>
    </div>
  </div>
);

export default Experience;
