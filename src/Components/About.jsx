import React from "react";
import "./About.css";

export default function About() {
  // Icya mbere: Twakuyeho "const skills = [...]" kuko itagikenewe hano.

  return (
    <div className="about-container">  
      <section className="about-content">
        <h1 className="about-title">ABOUT ME</h1>
        
        {/* --- TOP SECTION: SPLIT LAYOUT --- */}
        <div className="top-section">
          
          {/* LEFT: Bio & Mission/Vision */}
          <div className="about-left">
            <p className="about-description">
              I am a passionate Full-Stack Developer dedicated to creating
              modern, scalable, and secure digital solutions.
              <br /><br />
              My journey in software development started with curiosity
              about how websites work, and it has evolved into a commitment
              to building applications that solve real-world problems.
              <br /><br />
              I specialize in designing responsive user interfaces using
              modern frontend technologies while also developing robust
              backend systems, RESTful APIs, and database architectures.
            </p>

            {/* Mission & Vision Row */}
            <div className="mv-container">
              <div className="mv-card">
                <h2>Mission</h2>
                <p>
                  To create impactful software solutions that empower
                  individuals, businesses, and communities through
                  technology and innovation.
                </p>
              </div>

              <div className="mv-card">
                <h2>Vision</h2>
                <p>
                  To build useful things, discovering automated solutions that help real 
                  people streamline their daily lives and expand human potential.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Timeline Journey */}
          <div className="about-right">
            <h3 className="section-subtitle">My Journey</h3>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="timeline-date">2024 - Present</span>
                <h4 className="timeline-title">Full-Stack Developer</h4>
                <p className="timeline-text">Building production-ready software, crafting scalable database structures, and designing fast RESTful APIs.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="timeline-date">2022 - 2024</span>
                <h4 className="timeline-title">Frontend & UI Specialist</h4>
                <p className="timeline-text">Deep-dived into React, UI systems, and responsive layouts to match absolute pixel-perfection designs.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Igice cya LOWER SECTION cyari kirimo skills cyakuwemo zvose */}

      </section>
    </div>
  );
}