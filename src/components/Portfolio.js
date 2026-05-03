import { useState, useEffect, useCallback } from "react";
import "./Portfolio.css";

const projects = [
  
  {
    tag: "Blockchain + React",
    title: "CertVerify",
    desc: "Blockchain Based Verification for University Certificates - Leveraging QR Codes and DApps for Enhanced Credibility. Eliminate fake academic credentials. Issue and verify university certificates on Ethereum using smart contracts, IPFS storage, and QR code authentication.",
    tech: ["Solidity", "React", "Hardhat", "Metamask"],
    github: "https://github.com/AdhityaB-31/CertVerify.git",
    images: [
      "/Public/Images/Project-Work/CertVerify/CertVerify-Work1.png",
      "/Public/Images/Project-Work/CertVerify/CertVerify-Work2.png",
      "/Public/Images/Project-Work/CertVerify/CertVerify-Work3.png",
      "/Public/Images/Project-Work/CertVerify/CertVerify-Work4.png",
      "/Public/Images/Project-Work/CertVerify/CertVerify-Work5.png",
      "/Public/Images/Project-Work/CertVerify/CertVerify-Work6.png",
    ],
  },
{
    tag: "Flutter + Dart",
    title: "BeachHub",
    desc: "A mobile app for managing beach activities , built with Flutter, Dart and Firebase.",
    tech: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/AdhityaB-31/BEACH_HUB-A_SMART_GUIDE_TO_COASTAL_DESTINATIONS.git",
    images: [
      "/Public/Images/Project-Work/BeachHub/BeachHub-Work1.jpg",
      "/Public/Images/Project-Work/BeachHub/BeachHub-Work2.jpg",
      "/Public/Images/Project-Work/BeachHub/BeachHub-Work3.jpg",
      "/Public/Images/Project-Work/BeachHub/BeachHub-Work4.jpg",
      "/Public/Images/Project-Work/BeachHub/BeachHub-Work5.jpg",
    ],
  },
  {
    tag: "ML + Web",
    title: "LoanWise",
    desc: "Loan Approval Prediction System — a full-stack web app automating loan eligibility decisions using financial logic and machine learning.",
    tech: ["Python", "React", "ML", "Flask"],
    github: "https://github.com/AdhityaB-31/LoanWise.git",
    images: [
      "/Public/Images/Project-Work/LoanWise/LoanWise-Work1.png",
      "/Public/Images/Project-Work/LoanWise/LoanWise-Work2.png",
      "/Public/Images/Project-Work/LoanWise/LoanWise-Work3.png",
      "/Public/Images/Project-Work/LoanWise/LoanWise-Work4.png",
    ],
  },
  {
    tag: "Full-Stack",
    title: "Event Management System",
    desc: "Comprehensive solution for managing events — registration, scheduling, and communication all in one platform.",
    tech: ["HTML", "CSS", "JavaScript", "Java"],
    github: "https://github.com/AdhityaB-31/Event_Manager.git",
    images: [
      "/Public/Images/Project-Work/Event_Management_System/Event_Manager-Work1.png",
      "/Public/Images/Project-Work/Event_Management_System/Event_Manager-Work2.png",
      "/Public/Images/Project-Work/Event_Management_System/Event_Manager-Work3.png",
      "/Public/Images/Project-Work/Event_Management_System/Event_Manager-Work4.png",
    ],
  },
  {
    tag: "React + Web",
    title: "Personal Portfolio",
    desc: "A personal portfolio website showcasing my skills, projects, and certifications with smooth animations and responsive layout.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/AdhityaB-31/Personal-Portfolio",
    images: [
      "/Public/Images/Project-Work/Personal_Portfolio_Updated/Portfolio-Work1.png",
      "/Public/Images/Project-Work/Personal_Portfolio_Updated/Portfolio-Work2.png",
      "/Public/Images/Project-Work/Personal_Portfolio_Updated/Portfolio-Work3.png",
      "/Public/Images/Project-Work/Personal_Portfolio_Updated/Portfolio-Work4.png",
      "/Public/Images/Project-Work/Personal_Portfolio_Updated/Portfolio-Work5.png",
    ],
  },
  {
    tag: "Web",
    title: "Basic Personal-Portfolio",
    desc: "A personal portfolio website showcasing my skills, projects, and certifications with smooth and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AdhityaB-31/Personal-Portfolio-Basic.git",
    images: [
      "/Public/Images/Project-Work/Basic_Personal_Portfolio/BasicPortfolio-Work1.png",
      "/Public/Images/Project-Work/Basic_Personal_Portfolio/BasicPortfolio-Work2.png",
      "/Public/Images/Project-Work/Basic_Personal_Portfolio/BasicPortfolio-Work3.png",
    ],
  },
  
];

/* ── Image Slider sub-component ── */
function ImageSlider({ images, title }) {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const goTo = useCallback(
    (idx) => {
      setFade(false);
      setTimeout(() => {
        setCurrent(idx);
        setFade(true);
      }, 250);
    },
    []
  );

  /* Auto-advance every 2500ms */
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length, goTo]);

  const handlePrev = (e) => {
    e.stopPropagation();
    goTo((current - 1 + images.length) % images.length);
  };
  const handleNext = (e) => {
    e.stopPropagation();
    goTo((current + 1) % images.length);
  };

  return (
    <div className="slider-wrap">
      <img
        src={images[current]}
        alt={`${title} screenshot ${current + 1}`}
        className={`slider-img ${fade ? "fade-in" : "fade-out"}`}
      />

      {/* Prev / Next arrows */}
      {images.length > 1 && (
        <>
          <button className="slider-arrow arrow-prev" onClick={handlePrev} aria-label="Previous">
            ‹
          </button>
          <button className="slider-arrow arrow-next" onClick={handleNext} aria-label="Next">
            ›
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="slider-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={(e) => { e.stopPropagation(); goTo(i); }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      <div className="slider-counter">{current + 1} / {images.length}</div>
    </div>
  );
}

/* ── Main Portfolio component ── */
export default function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="section-tag">Work</div>
      <h2 className="section-title">Things I've built</h2>
      <div className="divider" />
      <p className="section-desc">
        A selection of projects I've designed and developed — Some of them solving a real-world problem.
      </p>

      <div className="portfolio-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <ImageSlider images={p.images} title={p.title} />

            <div className="project-body">
              <div className="project-header">
                <span className="project-tag">{p.tag}</span>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                  title="View on GitHub"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="tech-stack">
                {p.tech.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio-cta">
        <a
          href="https://github.com/AdhityaB-31"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          See All Projects on GitHub →
        </a>
      </div>
    </section>
  );
}
