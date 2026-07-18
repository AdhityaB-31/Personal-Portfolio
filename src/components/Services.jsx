import Sparkles from "./Sparkles";
import "./Services.css";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    price: "₹3,000 - ₹6,000",
    desc: "Building highly interactive, secure, and modern web applications tailored to your specific business needs.",
    features: [
      "Custom Portfolio & Freelance Website Development",
      "React Frontend Development",
      "Full Stack Web Application Development",
      "Payment Gateway Integration",
    ],
    link: "#contact",
  },
  {
    icon: "⚙️",
    title: "Software Development",
    price: "₹4,000 - ₹7,000",
    desc: "Architecting backend systems, securing APIs, and managing cloud deployments for optimal scalability.",
    features: [
      "Spring Boot REST API Development",
      "Database Design & Integration",
      "Authentication (JWT/OAuth)",
      "Docker & AWS Deployment",
    ],
    link: "#contact",
  },
  {
    icon: "🔌",
    title: "API Development & Integration",
    price: "₹4,000 - ₹8,000",
    desc: "Designing secure, high-performance APIs and integrations. Perfectly aligns with robust Java Spring Boot expertise.",
    features: [
      "REST API Development",
      "Third-party API Integration",
      "Payment Gateway Integration",
      "Authentication (JWT/OAuth)",
      "Email Services",
    ],
    link: "#contact",
  },
  {
    icon: "🎓",
    title: "College Project Development",
    price: "₹2,500 - ₹6,000",
    desc: "End-to-end guidance and implementation for student mini-projects, final year engineering projects, and prototypes.",
    features: [
      "Java, Spring Boot, React & Python Projects",
      "Complete Source Code & Database Setup",
      "Detailed Documentation Support",
      "Project Walkthrough & Viva Preparation",
    ],
    link: "#contact",
  },
  {
    icon: "✍️",
    title: "Copywriting & Reports",
    price: "₹200/page or ₹1,500 - ₹8,000",
    desc: "Professional content creation and academic writing, including high-level reports and journal paper publication preparation.",
    features: [
      "SEO Copywriting & Content Writing",
      "Academic & Technical Report Creation",
      "Journal Paper Publication Preparation",
      "Proofreading & Plagiarism Check Support",
    ],
    link: "#contact",
  },
  {
    icon: "📚",
    title: "Tutoring & Support",
    price: "₹500/hour or ₹2,000 - ₹8,000",
    desc: "Providing technical training to level up programming skills and solving code-level bottlenecks.",
    features: [
      "Technical Tutoring (Java & Web)",
      "Personal Mentorship & Code Review",
      "Bug Fixing & Troubleshooting Support",
    ],
    link: "#contact",
  },
];

export default function Services() {
  const handleNav = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section services-section">
      <Sparkles count={12} />
      <div className="section-tag">Services &amp; Pricing</div>
      <h2 className="section-title">What I offer</h2>
      <div className="divider" />
      <p className="section-desc">
        I offer high-quality freelance development, software engineering, and academic support services. Check out my offerings and pricing below.
      </p>

      <div className="negotiation-badge">
        <div>💡 <strong>Note:</strong> Price concessions are allowed! Rates are negotiable in a friendly manner based on your budget and project scope.</div>
        <div>📌 Please note that prices may vary depending on the project's requirements and development time.</div>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <div key={s.title} className="service-card">
            <div className="service-icon-wrap">{s.icon}</div>
            <h3 className="service-title">{s.title}</h3>
            <div className="service-price">
              Starting From: <span>{s.price}</span>
            </div>
            <p className="service-desc">{s.desc}</p>

            <ul className="service-features">
              {s.features.map((f, i) => (
                <li key={i}>
                  <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={s.link}
              onClick={(e) => handleNav(e, "contact")}
              className="service-link"
            >
              Hire Me / Learn More →
            </a>
            <div className="service-accent-line" />
          </div>
        ))}
      </div>
    </section>
  );
}
