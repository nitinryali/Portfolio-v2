import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    color: var(--green);
  }
`;

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 8px 0 30px;
  width: min(860px, 85%);
  margin: 0 auto;
`;

export const ExperienceCard = styled.div`
  position: relative;
  display: flex;
  gap: 22px;
  align-items: flex-start;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 22px 24px;
  transition: box-shadow 0.35s ease, transform 0.15s ease, border-color 0.35s ease;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 12px;
    pointer-events: none;
    box-shadow: var(--card-before-shadow);
    transition: box-shadow 0.35s ease, opacity 0.35s ease;
    opacity: 1;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: var(--card-hover-border);
    box-shadow: var(--card-hover-shadow);
  }

  &:hover::before {
    box-shadow: 0 0 80px 10px rgba(0, 235, 210, 0.06),
      0 0 28px rgba(124, 242, 228, 0.04) inset;
  }
`;

export const CompanyLogo = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 10px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
  flex-shrink: 0;
  margin-top: 2px;
`;

export const ExpContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`;

export const RoleTitle = styled.h3`
  margin: 0;
  font-size: 1.55rem;
  font-weight: 700;
  color: var(--heading);
  line-height: 1.2;
`;

export const CompanyName = styled.p`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--green);
`;

export const ExpDates = styled.div`
  font-size: 1.1rem;
  color: var(--muted-2);
  font-weight: 400;
  margin-bottom: 6px;
`;

export const ExpDescription = styled.li`
  color: var(--muted);
  font-size: 1.25rem;
  line-height: 1.6;
  list-style: disc;
  margin-left: 1.6rem;
  margin-bottom: 4px;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

export const TechBadge = styled.span`
  font-size: 1.05rem;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 20px;
  border: 1px solid var(--card-hover-border);
  color: var(--green);
  background: rgba(0, 176, 235, 0.07);
  letter-spacing: 0.02em;
`;
