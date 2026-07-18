import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = ["home", "about", "services", "portfolio", "reviews", "contact"];

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#home" className="nav-logo" onClick={(e) => handleNav(e, "home")}>
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
            style={{ marginRight: "8px", color: "var(--accent)" }}
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          Adhi<span>.</span>
        </a>

        <ul className="nav-links">
          {navLinks.map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => handleNav(e, id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="theme-btn" onClick={() => setDark((d) => !d)} title="Toggle theme">
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            className={`hamburger ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((id) => (
          <a key={id} href={`#${id}`} onClick={(e) => handleNav(e, id)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <button className="theme-btn-mobile" onClick={() => setDark((d) => !d)}>
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </>
  );
}
