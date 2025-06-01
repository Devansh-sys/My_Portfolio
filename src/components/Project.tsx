import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";

import '../assets/styles/Project.scss';

function Project() {
    return (
      <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
          <div className="project">
            <a
              href="https://github.com/Devansh-sys/Evently"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
            </a>
            <a
              href="https://github.com/Devansh-sys/Evently"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Evently - message to Event creation</h2>
            </a>
            <p>
              Evently delivers intelligent , secure , and persistent event
              management for Telegram users—powered by Java , Google Gemini &
              Calendar APIs , and Supabase Postgres . Effortlessly manage
              events: just forward details and let Evently handle scheduling ,
              user authorization , and calendar integration with robust security
            </p>
          </div>
          <div className="project">
            <a
              href="https://github.com/Devansh-sys/QuickCart"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
            </a>
            <a
              href="https://github.com/Devansh-sys/QuickCart"
              target="_blank"
              rel="noreferrer"
            >
              <h2>QuickKart - Ecommerce using SpringBoot</h2>
            </a>
            <p>
              Built a full-stack eCommerce app using React and Java Spring Boot
              with PostgreSQL . Implemented product CRUD , image upload , search
              , and cart features via REST APIs. Used Spring MVC, JPA, and Axios
              for seamless frontend-backend integration.
            </p>
          </div>
          <div className="project">
            <a
              href="https://github.com/Devansh-sys/Finance-Tracker"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
            </a>
            <a
              href="https://github.com/Devansh-sys/Finance-Tracker"
              target="_blank"
              rel="noreferrer"
            >
              <h2>FinPath - Finance Tracker</h2>
            </a>
            <p>
              Personal Finance Tracker is a web app for managing income and
              expenses. Users log in securely, add and categorize transactions ,
              and view financial summaries . Built with React and Firebase for
              real-time data and authentication.
            </p>
          </div>
          <div className="project">
            <a
              href="https://github.com/Devansh-sys/fireSathi_frontend"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
            </a>
            <a
              href="https://github.com/Devansh-sys/fireSathi_frontend"
              target="_blank"
              rel="noreferrer"
            >
              <h2>FireSaathi - StreamLine Fire NOC Issuance</h2>
            </a>
            <p>
              A system to streamline Fire NOC issuance, cutting processing time
              by 25% and ensuring transparency! Built with React for a sleek
              frontend and Spring Boot for a solid backend . Features role-based
              views for 3 roles , onsite photo uploads to curb corruption , and
              efficiency analysis for NOC officers using Gemini and Streamlit .
            </p>
          </div>
          <div className="project">
            <a
              href="https://github.com/Devansh-sys/JobPortalApp"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
            </a>
            <a
              href="https://github.com/Devansh-sys/JobPortalApp"
              target="_blank"
              rel="noreferrer"
            >
              <h2>JopPortal(Basic) - view all jobs and add job</h2>
            </a>
            <p>
              A simple job portal to display job listings and explore Java MVC
              architecture! Built with Java MVC for backend logic and JSP pages
              for views to understand the MVC structure . Features include
              viewing posted jobs and an admin section to add new job openings .
              A beginner-friendly project to learn core concepts!
            </p>
          </div>
          <div className="project">
            <a
              href="https://devansh-sys.github.io/Etch-a-Sketch/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
            </a>
            <a
              href="https://devansh-sys.github.io/Etch-a-Sketch/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Etech-a-Sketch - Project to learn js DOM in depth</h2>
            </a>
            <p>
              A dynamic Etch-a-Sketch app with a customizable grid! Built with
              JS, users can set grid size via a button 🖱️, see random colors on
              interaction , and watch opacity rise by 10% per touch (up to 10)
              with full visibility on hover . Learned random color generation,
              opacity tricks, dynamic grid manipulation, and event handling with
              DOMContentLoaded
            </p>
          </div>
        </div>
      </div>
    );
}

export default Project;