import { useState, useEffect } from "react";
import "./Home.css";
import profilePic from "../assets/profile.png";

export default function Home() {
  const titles = [
    "A FRONTEND DEVELOPER",
    "A BACK-END DEVELOPER",
    "A FULL-STACK DEVELOPER",
    "A WEB DEVELOPER",
    "A SOFTWARE ENGINEER",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const currentFullText = titles[currentTitleIndex];
    let typingSpeed = 100;

    if (isDeleting) {
      typingSpeed = 50;
    }

    if (!isDeleting && currentText === currentFullText) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? currentFullText.substring(0, currentText.length - 1)
          : currentFullText.substring(0, currentText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="home-container">
      <section className="home-content">
        {/* --- SEARCH BOX --- */}
        <form onSubmit={handleSearch} className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search projects, skills, or tech stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        <br />
        <h1 className="me">HELLO, I'M PACIFIQUE</h1>

        <div>
          <br />
          <h2 className="my-status">
            {currentText}
            <span className="cursor">|</span>
          </h2>
          <br />
          <p className="hero-description">
            I Develop secure servers, database structures, and fast RESTful APIs
            to power applications
          </p>
        </div>

       
        {/* --- INTERACTIVE METRICS SECTION --- */}
        <div className="metrics-container">
          <div className="metric-card">
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>
          <div className="metric-card">
            <h3>5</h3>
            <p>Live Projects</p>
          </div>
          <div className="metric-card">
            <h3>100%</h3>
            <p>Clean & Scalable Code</p>
          </div>
        </div>
 {/* --- SOCIAL MEDIA LINKS MUNSI YA METRICS WITH ICONS --- */}
<div className="home-social-links">
  <a href="https://github.com/PACIFIQUEVIBUCODER" target="_blank" rel="noreferrer" className="social-icon-link">
    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="social-icon-img" />
  </a>
  <a href="https://linkedin.com/in/your_username" target="_blank" rel="noreferrer" className="social-icon-link">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="social-icon-img" />
  </a>
  <a href="https://t.me/your_telegram_username" target="_blank" rel="noreferrer" className="social-icon-link">
    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" className="social-icon-img" />
  </a>
</div>
      </section>

      {/* --- IFATA RUHANDE RW'IBURYO RYOSE --- */}
      <div className="right-sidebar">
        <aside className="home-image">
          <h2 className="tell-about">My Portfolio</h2>
          <img src={profilePic} alt="Pacifique" className="img1" />
          <br />
          <h3 className="name">PACIFIQUE</h3>
          <div className="list">
            <h5 className="list1">imanirumvapacifique39@gmail.com</h5>
            <h5 className="list2">github.com/PACIFIQUEVIBUCODER</h5>
          </div>
        </aside>

        {/* --- NGAYI CARD IRI MUNSI YAYO NEZA --- */}
        <div className="dev-object-card">
          <pre>
            {`const developer = {
  name: "Imanirumva Pacifique",
  skills: [
    "PHP", "HTML", "React", 
    "Vue.js", "UI Design", 
    "Javascript", "Git Version Control System"
  ],
  my_vision: "Build Useful Thingsand Discovering Solutions That Help Real People"
};`}
          </pre>
        </div>
      </div>
    </div>
  );
}
