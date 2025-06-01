import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact,faCodepen,faGoogle} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "Postman",
    "Spring",
    "Spring Boot",
    "Hibernate",
    "Maven",
    "REST APIs"
];

const labelsSecond = [
  "Arrays",
  "Linked Lists",
  "Stacks & Queues",
  "Trees ",
  "Graphs",
  "Hash Maps","Hash Sets",
  "Heaps","Priority Queues",
  "Dynamic Programming",
  "Greedy Algorithms","Sorting",
  "Recursion & Backtracking",
];

const labelsThird = [
    "OpenAI",
    "Gemini",
    "Perplexity",
    "Llama","DeepSeek",
    "Streamlit",
];

function Expertise() {
    return (
      <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills & Strengths</h1>
          <div className="skills-grid">
            <div className="skill">
              <FontAwesomeIcon icon={faReact} size="3x" />
              <h3>Full Stack Web Development</h3>
              <p>
                I focus on building scalable full stack applications using
                React.js and Spring Boot, with a strong emphasis on RESTful
                APIs, secure authentication, and maintainable code. I enjoy
                designing intuitive user interfaces and robust backend systems,
                and am currently expanding my expertise in Docker and
                microservices to deliver even more reliable solutions.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsFirst.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faCodepen} size="3x" />
              <h3>Data Structures and Algorithms</h3>
                <p>
                I have solved 200+ challenging DSA questions, developing a
                strong grasp of problem-solving and critical thinking. My
                LeetCode rating is 1560+, which demonstrates my strength in
                tackling algorithmic problems. These skills help me build robust
                and efficient solutions in my projects, and enable me to
                approach complex technical challenges with confidence. 
                </p>
              <div className="flex-chips">
                <span className="chip-title">Key topics:</span>
                {labelsSecond.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faGoogle} size="3x" />
              <h3>GenAI & LLM Integration</h3>
              <p>
                I actively integrate cutting-edge AI models and LLMs into my
                projects,enhancing user experiences and automating complex
                tasks. My recent work includes building intelligent features for
                hackathons and developing Evently, where I leveraged GenAI for
                smarter event management. I am committed to continuous learning
                and staying updated with advancements in AI.
              </p>
              <div className="flex-chips">
                <span className="chip-title">AI tools:</span>
                {labelsThird.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Expertise;