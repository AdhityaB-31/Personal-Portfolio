import "./Services.css";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    desc: "Building modern, performant, and fully responsive websites. Hands-on experience from a Front-End internship at Askan Technologies, Puducherry.",
    link: "/Public/Documents/Web_Developer_Internship.pdf",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Crafting intuitive, beautiful interfaces with deep attention to user experience. Trained through VEI Technologies, Chennai.",
    link: "/Public/Documents/UI-UX Designing.pdf",
  },
  {
    icon: "🚀",
    title: "Freelancing",
    desc: "Open to freelance projects ranging from landing pages and portfolios to full web applications and polished UI/UX mockups.",
    link: "#contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="section section-alt services-section">
      <div className="section-tag">Services</div>
      <h2 className="section-title">What I bring to the table</h2>
      <div className="divider" />
      <p className="section-desc">
        I help clients and teams build digital products that are fast, beautiful, and user-centric.
      </p>

      <div className="services-grid">
        {services.map((s) => (
          <div key={s.title} className="service-card">
            <div className="service-icon-wrap">{s.icon}</div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
            <a
              href={s.link}
              target={s.link.startsWith("/") ? "_blank" : "_self"}
              rel="noreferrer"
              className="service-link"
            >
              Learn More →
            </a>
            <div className="service-accent-line" />
          </div>
        ))}
      </div>
    </section>
  );
}
