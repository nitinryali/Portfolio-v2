import { Container } from "./styles";
import cppIcon from "../../assets/cpp.svg"
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import kafkaIcon from "../../assets/kafka.svg";
import redisIcon from "../../assets/redis.svg";
import reactIcon from "../../assets/react-icon.svg";
import springbootIcon from "../../assets/spring-boot.svg";
import mongoDBIcon from "../../assets/MongoDB.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            I’m a product developer who enjoys turning complex requirements into clean, scalable, and maintainable solutions. Over time, I’ve worked with a variety of technologies and discovered a strong interest in building robust backend systems and modular, user-focused applications.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I enjoy creating and implementing event-driven architectures, microservices, and micro-frontend systems that scale effectively and are simple to modify. I am skilled in C++, Java, Javascript, React.js, Spring Boot, and have a strong foundation in data structures, algorithms, and troubleshooting.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            My key areas of interest include developing web applications, building distributed systems, and exploring the use of AI Agents and modern developments in tech to improve developer productivity and system intelligence.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          {/*<div className="education">
            <h3>Education:</h3>
            <h4> Master of Computer Applications (MCA)</h4>
            <p>Vellore Institute of Technology, Chennai | July 2023 - Present</p>
            <p>8.09 CGPA</p>
          </div> */}
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={cppIcon} alt="c++" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={springbootIcon} alt="Spring Boot" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={kafkaIcon} alt="Kafka" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={redisIcon} alt="Redis" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={mongoDBIcon} alt="MongoDB" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={"https://nitinryali.github.io/Portfolio/static/media/avatar.5923588cff0168a41357386de9bd02b5.svg"} alt="Nithin Ryali" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
