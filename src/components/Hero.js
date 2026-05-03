import { useState, useEffect } from "react";
import "./Hero.css";

function useTyping(words, speed = 90, pause = 1400) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTyping(["Front-End Developer", "UI/UX Designer", "Freelancer"]);

  const handleNav = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      {/* Background decorations */}
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for work
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
          B.Tech IT student from Puducherry, passionate about building clean, fast,
          and beautiful web experiences. Currently deepening skills in Java &amp;
          full-stack development.
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
          <img src="/Public/Images/Adhitya_Image1.png" alt="Adhitya" className="hero-img" />
        </div>
        <div className="hero-img-badge">
          <span className="badge-dot" />
          <div>
            <div className="badge-main">Open to Opportunities</div>
            <div className="badge-sub">Jobs, Internships &amp; Freelance</div>
          </div>
        </div>
      </div>
    </section>
  );
}
