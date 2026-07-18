import "./Footer.css";

const navLinks = ["home", "about", "services", "portfolio", "contact"];

export default function Footer() {
  const handleNav = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo" onClick={(e) => handleNav(e, "home")}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="logo-icon"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            Adhi<span>.</span>
          </a>
          <p className="footer-desc">
            Passionate IT graduate and freelance developer providing high-quality web development, software solutions, and technical tutoring.
          </p>
        </div>

        {/* Availability / Contact Column */}
        <div className="footer-status-col">
          <h4 className="footer-heading">Let's Collaborate</h4>
          <p className="footer-status">
            Available for new projects, full-stack applications, and tutoring.
          </p>
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "contact")}
            className="footer-cta-link"
          >
            Get in touch →
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} <strong>Adhitya B.</strong> All rights reserved.
        </p>
        
        <div className="footer-bottom-links">
          {navLinks.map((id) => (
            <a key={id} href={`#${id}`} onClick={(e) => handleNav(e, id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        <p className="footer-tech">
          Built with React &amp; Vite ⚡
        </p>
      </div>
    </footer>
  );
}
