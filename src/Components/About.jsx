import React from "react";
import "./About.css";

export default function About() {
  const technicalSkills = [
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Vue.js", level: "Beginner" },
    { name: "PHP", level: "Advanced" },
    { name: "HTML & CSS", level: "Advanced" },
    { name: "UI Design", level: "Intermediate" },
    { name: "Git Version Control", level: "Advanced" },
  ];

  return (
    <div className="about-container">
      {/* --- LEFT SIDE: BIO & TIMELINE --- */}
      <section className="about-content">
        <h1 className="about-title">ABOUT ME</h1>
        
        <div>
          <p className="about-description">
            I am a dedicated Full-Stack Developer passionate about crafting secure, 
            high-performance web applications. With a solid foundation in both front-end 
            interactivity and robust back-end logic, I focus on turning complex challenges 
            into clean, scalable code.
          </p>
        </div>

        {/* --- TIMELINE SECTION --- */}
        <h2 className="section-subtitle">My Development Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024 - PRESENT</div>
            <h3 className="timeline-title">Full-Stack Software Engineer</h3>
            <p className="timeline-text">
              Designing secure server architectures, managing relational databases, 
              and deploying optimized RESTful APIs.
            </p>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022 - 2024</div>
            <h3 className="timeline-title">Frontend & UI/UX Specialist</h3>
            <p className="timeline-text">
              Mastered modern JavaScript frameworks, responsive web designs, and 
              intuitive user interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* --- RIGHT SIDEBAR: SKILLS & CODE OBJECT --- */}
      <div className="about-sidebar">
        {/* --- SKILLS FLOATING CARD --- */}
        <aside className="skills-card">
          <h2 className="skills-title">Core Tech Stack</h2>
          <div className="skills-grid">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* --- CODE OBJECT CARD --- */}
        <div className="vision-card">
          <pre>
            {`const mission = {
  focus: "Clean Architecture",
  passion: "Problem Solving",
  goal: "Building Useful Tools",
  motto: "Code that helps real people"
};`}
          </pre>
        </div>
      </div>
    </div>
  );
}