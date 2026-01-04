import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .educations{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .education{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px){
    .educations{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .educations{
      grid-template-columns: 1fr;
    }
  }
`

export const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 8px 0 30px;
  width: min(800px, 80%);
  max-width: 1100px;
  margin: 0 auto;
`;

export const EducationCard = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  align-items: center;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 20px 22px;
  transition: box-shadow 0.35s ease, transform 0.15s ease, border-color 0.35s ease;
  overflow: hidden;
  min-height: 92px;

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
    box-shadow: 0 0 80px 10px rgba(0, 235, 210, 0.06), 0 0 28px rgba(124, 242, 228, 0.04) inset;
  }
`;

export const EduLogo = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 10px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
  flex-shrink: 0;
`;

export const EduContent = styled.div`
  color: var(--text);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  flex: 1;
  min-width: 0;
`;

export const EduName = styled.h3`
  margin: 0;
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--heading);
  line-height: 1.1;
  word-break: break-word;
`;

export const EduCourse = styled.p`
  color: var(--muted);
  margin: 0;
  font-size: 1.2rem;
`;

export const EduDates = styled.div`
  color: var(--muted-2);
  font-size: 0.92rem;
  font-weight: 400;
  margin-top: 4px;
`;

export const EduGrade = styled.div`
  color: var(--text);
  font-weight: 600;
  margin-top: 6px;
`;
