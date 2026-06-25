import React from "react";
import "./Experience.css";

export default function Experience() {
  // Urutonde rw'aho wakoze cyamo imishinga wakoze mu myaka 2
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Freelance / Personal Projects",
      duration: "2025 - Present",
      description: "Developing scalable web applications using React, PHP, and JavaScript. Focused on building fast RESTful APIs, securing servers, and designing clean user interfaces.",
      skills: ["React", "JavaScript", "PHP", "Git"]
    },
    {
      role: "Frontend Developer & UI Designer",
      company: "Tech Solutions Hub (Junior Role/Intern)",
      duration: "2024 - 2025",
      description: "Created responsive user interfaces using HTML, CSS, and Vue.js. Collaborated with teams to implement seamless user experiences and managed version control using Git.",
      skills: ["HTML", "Vue.js", "UI Design", "Git"]
    }
  ];

  return (
    <div className="experience-page-container">
      <div className="experience-main-content">
        
        {/* INTERACTIVE METRICS HEADER FROM HOME */}
        <div className="experience-header">
          <h1 className="me">MY EXPERIENCE</h1>
          <h2 className="my-status">2+ Years of Professional Journey</h2>
          <p className="hero-description">
            I have spent the last 2 years honing my skills in full-stack web development, 
            moving from crafting pixel-perfect interfaces to building robust backend infrastructures.
          </p>
        </div>

        {/* TIMELINE SECTION */}
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div className="timeline-card" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{exp.duration}</div>
              
              <div className="experience-details">
                <h3 className="job-role">{exp.role}</h3>
                <h4 className="job-company">{exp.company}</h4>
                <p className="job-description">{exp.description}</p>
                
                {/* TECH TAGS */}
                <div className="tech-tags">
                  {exp.skills.map((skill, idx) => (
                    <span className="tech-tag" key={idx}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FOOTER (KAKA NYU) */}
      <footer className="contact-footer">
        <div className="footer-content">
          <div className="footer-column" style={{ textAlign: 'center' }}>
            <h4>SOCIAL MEDIA</h4>
            <div className="social-links">
              <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://wa.me/07834287653" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pacifique. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}