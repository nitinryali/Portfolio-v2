import {
  Container,
  EducationList,
  EducationCard,
  EduLogo,
  EduContent,
  EduName,
  EduCourse,
  EduDates,
  EduGrade,
} from "./styles";
import gayatriLogo from "../../assets/gayatriLogo.jpg";
import SasiLogo from "../../assets/SasiLogo.png";
import AdityaLogo from "../../assets/AdityaLogo.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export function Education() {
  const educations = [
    {
      name: "Gayatri Vidya Parishad College of Engineering",
      course: "Bachelor of Technology in Computer Science",
      dates: "2020 - 2024",
      cgpa: "9.2",
      image: gayatriLogo,
    },
    {
      name: "Sasi Junior College",
      course: "Intermediate (MPC)",
      dates: "2018 - 2020",
      cgpa: "10 CGPA",
      image: SasiLogo,
    },
    {
      name: "Aditya (E.M) High School",
      course: "Secondary Education",
      dates: "2018",
      cgpa: "10 CGPA",
      image: AdityaLogo,
    },
  ];

  return (
    <Container id="education">
      <h2>My Education</h2>
      <div>
        <ScrollAnimation animateIn="flipInX">
          <EducationList>
            {educations.map((edu, idx) => (
              <EducationCard key={idx}>
                <EduLogo src={edu.image} alt={`${edu.name} logo`} />
                <EduContent>
                  <EduName>{edu.name}</EduName>
                  <EduCourse>{edu.course}</EduCourse>
                  <EduDates>{edu.dates}</EduDates>
                  <EduGrade>
                    <strong>Grade:</strong> {edu.cgpa}
                  </EduGrade>
                </EduContent>
              </EducationCard>
            ))}
          </EducationList>
        </ScrollAnimation>
      </div>
    </Container>
  );
}