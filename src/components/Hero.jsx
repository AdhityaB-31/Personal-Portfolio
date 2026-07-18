import { useState, useEffect } from "react";
import Sparkles from "./Sparkles";
import "./Hero.css";

function useTyping(words, speed = 100, pause = 1500) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIdx];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplay((prev) => prev.slice(0, -1));
      }, speed / 2);
    } else {
      timer = setTimeout(() => {
        setDisplay(currentWord.slice(0, display.length + 1));
      }, speed);
    }

    if (!isDeleting && display === currentWord) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && display === "") {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [display, isDeleting, wordIdx, words, speed, pause]);

  return display;
}

const heroImagesGlob = import.meta.glob("../assets/Images/Hero-Section-Images/*.{png,jpg,jpeg,svg}", { eager: true });
const heroImages = [
  heroImagesGlob["../assets/Images/Hero-Section-Images/harry_potter.png"]?.default,
  heroImagesGlob["../assets/Images/Hero-Section-Images/hermione_granger.png"]?.default,
  heroImagesGlob["../assets/Images/Hero-Section-Images/hogwarts_trio.png"]?.default,
  heroImagesGlob["../assets/Images/Hero-Section-Images/freelance_workspace.png"]?.default,
  heroImagesGlob["../assets/Images/Hero-Section-Images/freelance_dashboard.png"]?.default,
];

export default function Hero() {
  const typed = useTyping([
    "Full Stack Developer",
    "Java Spring Boot Developer",
    "React Developer",
    "Freelance Software Developer",
    "Freelance Web Developer",
    "Technical Tutor"
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <Sparkles count={15} />
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for Freelance &amp; Tutoring
        </div>

        <h1 className="hero-heading">
          Hi, I'm
          <span className="hero-name"> Adhitya B.</span>
          <br />
          <span className="hero-typed">
            {typed}
            <span className="cursor">|</span>
          </span>
        </h1>

        <p className="hero-sub">
          Full-Stack Developer specializing in building high-performance web applications, robust backends, and mentoring developers. I help businesses scale with clean, modern code.
        </p>

        <div className="hero-actions">
          <a href="#portfolio" className="btn-primary" onClick={(e) => handleNav(e, "portfolio")}>
            View My Work →
          </a>
          <a href="#contact" className="btn-outline" onClick={(e) => handleNav(e, "contact")}>
            Get In Touch
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">5+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-sep" />
          <div className="stat">
            <span className="stat-num">2</span>
            <span className="stat-label">Internships</span>
          </div>
          <div className="stat-sep" />
          <div className="stat">
            <span className="stat-num">5+</span>
            <span className="stat-label">Certifications</span>
          </div>
        </div>
      </div>

      {/* Floating image card */}
      <div className="hero-img-wrap">
        <div className="hero-img-card">
          <div className="hero-slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {heroImages.map((src, idx) => (
              <img key={idx} src={src} alt={`Wizard coder setup ${idx + 1}`} className="hero-slide-img" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
