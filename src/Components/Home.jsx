import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <p className="greeting">Hello, I'm</p>

        <h1 className="name">Pacifique</h1>

        <h2 className="profession">
          Frontend Developer & UI Designer
        </h2>

        <p className="description">
          I create modern, responsive, and user-friendly web applications
          using technologies like React, JavaScript, HTML, and CSS.
          I am passionate about transforming ideas into beautiful and
          functional digital experiences.
        </p>

      </div>

      <div className="home-image">
        <dir className="profile" >
          <img src="./src/assets/Asset 6.png" className="img2"/>
        </dir>
       
      </div>
    </div>
  );
}