import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Milestones</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="May'25 - Jun'25(expected)"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Docker & Microservices
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              microservices architecture for scalability
            </h4>
            <p>
              Currently learning Docker🐋 and Microservices🔬 to build Scalable
              Practical Projects.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Mar'25 - May'25"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">SpringBoot</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Backend
            </h4>
            <p>
              learned JAVA Backend Concepts and build Job-Portal🕹️, QuickKart🛒,
              Evently🗓️.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Mar'25 - May'25"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Hackathon Experience
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              national level Hackathon by AITR
            </h4>
            <p>
              build fire compliance system to StreamLine NOC Issuance - FireSaathi🔥🚒 .
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Jan'25 - Mar'25"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">React js</h3>
            <h4 className="vertical-timeline-element-subtitle">Frontend</h4>
            <p>
              build projects like Weather App🌡️, Finance Tracker💸, 25-mini-Projects⚒️
              to build critical basic UI Components.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2024 - Jan 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">JavaScript</h3>
            <h4 className="vertical-timeline-element-subtitle">Vanilla JS</h4>
            <p>
              build projects like Etch-a-Sketch🧊, Calculator🧮, Library 📑, CV
              Builder📜 etc
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="
            July 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Core Java Projects
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              OOps Concepts
            </h4>
            <p>
              learned JDBC and DataBase integration , build JAVA projects like
              Car Rental System🚙,Airline Reservation System🛫 etc.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Structures and Algorithms
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Basic to Intermediate</h4>
            <p>
              learned basics of C++©️and JAVA🍵 , eventually chose JAVA as primary
              Languauge, participating in contests 1560+ Rating📊 on leetcode
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;