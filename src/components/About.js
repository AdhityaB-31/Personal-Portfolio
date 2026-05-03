import { useState } from "react";
import "./About.css";

const skills = [
  { name: "HTML & CSS", pct: 90 },
  { name: "JavaScript", pct: 75 },
  { name: "Java", pct: 75 },
  { name: "C++", pct: 65 },
  { name: "UI/UX Design", pct: 80 },
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
  { title: "UI/UX Designing", issuer: "VEI Technologies", file: "UI-UX Designing.pdf" },
];

const strengths = ["Leadership", "Communication", "Fast Typer", "Teamwork", "Dedication"];

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="section about-section">
      <div className="section-tag">About</div>
      <h2 className="section-title">A little about me</h2>
      <div className="divider" />

      <div className="about-grid">
        {/* Image column */}
        <div className="about-img-col">
          <div className="about-img-frame">
            <img src="/Public/Images/Adhitya_Image.png" alt="Adhitya" />
            <div className="img-accent-bar" />
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
            Hi, I'm <strong>Adhitya</strong> an Information Technology undergraduate at MVIT, Puducherry.
            I love crafting responsive web interfaces and exploring the intersection of design and engineering.
            Beyond academics, I've completed internships and certifications in Full-Stack Development, UI/UX, and
            Front-End Engineering. When I'm not coding, you'll find me watching movies or leveling up my Core Java skills.
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
