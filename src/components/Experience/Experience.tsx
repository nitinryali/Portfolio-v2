import {
  Container,
  ExperienceList,
  ExperienceCard,
  CompanyLogo,
  ExpContent,
  CompanyName,
  RoleTitle,
  ExpDates,
  ExpDescription,
} from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  location: string;
  description: string[];
  logo: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Phenom",
    role: "Software Development Engineer – II",
    dates: "Feb 2026 – Present",
    location: "Hyderabad, India",
    description: [
      "Architected, developed, and deployed a Workflow Engine microservice from scratch using Temporal, orchestrating 100K+ workflow executions annually and providing a scalable platform for long-running, event-driven business processes.",
      "Refactored duplicated code across microservices into a centralized utils-package and migrated services to a Maven multi-module project, improving code reusability, reducing redundancy, and streamlining dependency management.",
      "Automated Weekly Business Review (WBR) metrics aggregation, reducing manual reporting effort by 66% (90 min → 30 min) and enabling near-real-time integrity checks for SLI monitoring.",
      "Contributed to FedRAMP readiness by remediating security findings, enforcing secure coding practices, and implementing compliance-driven enhancements across enterprise microservices.",
    ],
    logo: "https://images.ctfassets.net/0d3i1kfsuaq3/6VEB0kGTUBUz05Z7lxsMvc/34e5beb2c74dd7961f2d93725d051d54/Phenom_Updated_e-05.png",
  },
  {
    company: "Phenom",
    role: "Software Development Engineer – I",
    dates: "May 2024 – Jan 2026",
    location: "Hyderabad, India",
    description: [
      "Owned delivery of enterprise offer-management integrations with Adobe Sign and DocuSign, building a resilient resync framework that processed 50K+ transactions annually and reduced support escalations by ~40%.",
      "Designed configurable offer-letter branding capabilities, enabling recruiters to dynamically customize headers and footers across 20+ enterprise tenants, improving customer onboarding and adoption.",
      "Architected end-to-end integrations with Universal and Leegality, automating candidate screening workflows for 25+ enterprise customers in the US region and reducing manual processing effort by ~70%.",
      "Improved operational excellence by implementing automated Slack-based alerting across 10+ microservices for production failures and critical business events, reducing incident detection time by ~60%.",
    ],
    logo: "https://images.ctfassets.net/0d3i1kfsuaq3/6VEB0kGTUBUz05Z7lxsMvc/34e5beb2c74dd7961f2d93725d051d54/Phenom_Updated_e-05.png",
  },
];

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <ScrollAnimation animateIn="flipInX">
        <ExperienceList>
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx}>
              <CompanyLogo src={exp.logo} alt={`${exp.company} logo`} />
              <ExpContent>
                <RoleTitle>{exp.role}</RoleTitle>
                <CompanyName>{exp.company} · {exp.location}</CompanyName>
                <ExpDates>{exp.dates}</ExpDates>
                <ul>
                  {exp.description.map((point, i) => (
                    <ExpDescription key={i}>{point}</ExpDescription>
                  ))}
                </ul>
              </ExpContent>
            </ExperienceCard>
          ))}
        </ExperienceList>
      </ScrollAnimation>
    </Container>
  );
}
