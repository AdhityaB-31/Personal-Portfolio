import { useState } from "react";
import Sparkles from "./Sparkles";
import "./About.css";

const skills = [
  { name: "React", pct: 70 },
  { name: "JavaScript", pct: 75 },
  { name: "HTML & CSS", pct: 90 },
  { name: "Java", pct: 90 },
  { name: "Python", pct: 75 },
  { name: "Software Development", pct: 80 },
  { name: "MySQL", pct: 90 },
  { name: "AWS", pct: 70 },
  { name: "Docker", pct: 70 },
];

const education = [
  {
    year: "2022 – 2026",
    degree: "B.Tech – Information Technology",
    inst: "Manakula Vinayagar Institute of Technology, Puducherry",
  },
  {
    year: "2020 – 2022",
    degree: "HSE – Computer Science",
    inst: "Vigneshwara Higher Secondary School, Sedarapet, Puducherry",
  },
  {
    year: "2019 – 2020",
    degree: "SSLC",
    inst: "Deepa Oli Government Aided High School, Thondamanathan, Puducherry",
  },
];

const certifications = [
  { title: "Full-Stack Development", issuer: "NoviTech", file: "Full_Stack_Development.pdf" },
  { title: "Front-End Developer Internship", issuer: "Askan Technologies", file: "Web_Developer_Internship.pdf" },
  { title: "Responsive Web Design", issuer: "L&T EduTech", file: "Responsive Web Design_ HTML, CSS, JavaScript, & Bootstrap L&T.pdf" },
];

const strengths = ["Leadership", "Communication", "Fast Typer", "Teamwork", "Dedication"];

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="section about-section">
      <Sparkles count={9} />
      <div className="section-tag">About</div>
      <h2 className="section-title">A little about me</h2>
      <div className="divider" />

      <div className="about-grid">
        {/* Image / Illustration column */}
        <div className="about-img-col">
          <div className="about-img-frame">
            <img src="/Public/Images/Adhitya_Image.png" alt="Adhitya" />
            <div className="img-accent-bar" />
            <div className="about-img-badge">
              <span className="badge-dot" />
              <div>
                <div className="badge-main">Open to Opportunities</div>
                <div className="badge-sub">Jobs &amp; Freelance</div>
              </div>
            </div>
          </div>
          <div className="strengths-box">
            <p className="strengths-label">Key Strengths</p>
            <div className="strengths-tags">
              {strengths.map((s) => (
                <span key={s} className="strength-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Info column */}
        <div className="about-info">
          <p className="about-bio">
            Hi, I'm <strong>Adhitya B</strong>, an Information Technology graduate and freelance software engineer.
            I specialize in crafting responsive React interfaces, designing secure Spring Boot REST APIs, and providing code-level mentorship.
            My focus is on writing maintainable, production-ready code that solves real business challenges.
            Whether you need a custom web application, database optimization, cloud deployment, or technical tutoring, I deliver high-quality, scalable results.
          </p>
          <p className="about-bio" style={{ marginTop: 8 }}>
            <strong>Languages:</strong> English, Tamil
          </p>

          {/* Tabs */}
          <div className="tabs">
            {["skills", "education", "certifications"].map((t) => (
              <button
                key={t}
                className={`tab-btn ${activeTab === t ? "active" : ""}`}
                onClick={() => setActiveTab(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab: Skills */}
          {activeTab === "skills" && (
            <div className="tab-content skills-grid" key="skills">
              {skills.map((s) => (
                <div key={s.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab: Education */}
          {activeTab === "education" && (
            <div className="tab-content edu-list" key="education">
              {education.map((e) => (
                <div key={e.year} className="edu-card">
                  <div className="edu-year">{e.year}</div>
                  <div className="edu-degree">{e.degree}</div>
                  <div className="edu-inst">{e.inst}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tab: Certifications */}
          {activeTab === "certifications" && (
            <div className="tab-content cert-list" key="certifications">
              {certifications.map((c) => (
                <div key={c.title} className="cert-card">
                  <div className="cert-icon">🏅</div>
                  <div className="cert-info">
                    <div className="cert-title">{c.title}</div>
                    <div className="cert-issuer">{c.issuer}</div>
                  </div>
                  <a
                    href={`/Public/Documents/${c.file}`}
                    download
                    className="cert-download"
                  >
                    Download ↓
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
