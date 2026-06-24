import { useState, useEffect } from 'react';
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Project";
import Testimon from "./Components/Testimon";
import Contact from "./Components/Contact";
import Loading from "./Components/Loading";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className={`app ${loading ? 'hidden' : 'fade-in'}`}>
        <Header />
        <main>
          <section id="home" className="section"><Home /></section>
          <section id="about" className="section"><About /></section>
          <section id="skills" className="section"><Skills /></section>
          <section id="experience" className="section"><Experience /></section>
          <section id="projects" className="section"><Projects /></section>
          <section id="testimonials" className="section"><Testimon /></section>
          <section id="contact" className="section"><Contact /></section>
        </main>
      </div>
    </>
  );
}