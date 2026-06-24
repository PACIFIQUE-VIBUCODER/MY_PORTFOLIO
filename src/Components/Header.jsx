import "./Header.css";

export default function Header() {
  return (
    <div>
    <header className="header">
      <div className="logo">
        <h2>PACIFIQUE</h2>
      </div>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    </div>
  );
}