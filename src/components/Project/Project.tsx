import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/nitinryali/Library-Management-System" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Library Management System</h3>
              <p>
                The Library Management System is a web application built using Django, Python, SQLite, Solidity, and HTML/CSS/JS. It allows librarians to manage books and track student attendance, along with additional features such as due date reminders. The system includes a functionality for students to admit their entry by scanning their ID. Both librarians and students have a variety of options, including sending due date reminders via email and the ability to add, delete, and update books. The system also integrates Soulbound Tokens (SBT) for proof of identity.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Django</li>
                <li>SQLite</li>
                <li>Html / Css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/nitinryali/chat-analysis-adv" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://nitinryali-chat-analysis-adv-app-q1q3vn.streamlit.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
                </div>
            </header>
            <div className="body">
              <h3>Chat Analyzer</h3>
              <p> Chat Analyzer is a tool developed using the Pandas library in Python. It allows users to analyze and gain insights from their WhatsApp chat data. The tool can read and process chat logs exported from WhatsApp, extracting information such as message timestamps, sender names, and message content. By leveraging the power of Pandas, the analyzer provides features like counting messages, generating word frequency statistics, identifying the most active participants, and visualizing chat trends. It enables users to gain a deeper understanding of their WhatsApp conversations quickly and efficiently. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Python</li> <li>Pandas</li> <li>Streamlit</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/nitinryali/Hair-condition-detection/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://nitinryali-hair-condition-detection-app-imo2qx.streamlit.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Hair Condition Detection</h3>
              <p>
                Hair Condition Detection is a system developed using Convolutional Neural Networks (CNN) and Scanning Electron Microscope (SEM) images to analyze and assess the condition of hair. By leveraging CNN, the system can effectively analyze the structural features present in SEM images of hair samples. This enables the system to identify and classify various hair conditions such as High damage,damage,weak damage.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Streamlit</li>
                <li>Python</li>
                <li>CNN</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}