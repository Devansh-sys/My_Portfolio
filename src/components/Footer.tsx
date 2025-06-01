import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
const LeetCode = () => (
  <img
    src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
    alt="leetcode"
    style={{
      width: 25,
      height: 25,
      transition: "filter 0.2s, background 0.2s",
      filter: "grayscale(10%)",
      background: "transparent",
      borderRadius: "6px",
      
    }}
    className="leetcode-icon"
  />
);

function Footer() {
  return (
    <footer>
      <div>
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
      <p>
        © {new Date().getFullYear()} Devansh Bhargava. Made with ☕, 🎧, and way too much <span style={{color: "#f5ba13"}}>curiosity</span>!
      </p>
    </footer>
  );
}

export default Footer;