import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

import portfolioDP from "../assets/images/pd2.png";


const LeetCode = () => (
  <img
    src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
    alt="leetcode"
    style={{
      width: 30,
      height: 30,
      transition: "filter 0.2s, background 0.2s",
      filter: "grayscale(10%)",
      background: "transparent",
      borderRadius: "6px",
      padding: "2px"
    }}
    className="leetcode-icon"
  />
);

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={portfolioDP} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/Devansh-sys"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/devansh-bhargava/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://leetcode.com/u/ByteBender913/"
              target="_blank"
              rel="noreferrer"
            >
              <LeetCode />
            </a>
          </div>
          <h1
            style={{ whiteSpace: "nowrap", width: "100%", overflow: "visible" }}
          >
            Devansh Bhargava
          </h1>
            <p style={{fontSize:"1.5rem"}}>
              Web developer exploring modern tech and AI integration.
            </p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/Devansh-sys"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/devansh-bhargava/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;