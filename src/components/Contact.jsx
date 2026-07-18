import { useState } from "react";
import Sparkles from "./Sparkles";
import "./Contact.css";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxgzdYOuH7cq7n0S2hN43fZ4bSdnni0X1EgGEH5QEUTJG67vg8M_NolyolDrqfbSMSI/exec";

const socials = [
  { icon: "in", label: "LinkedIn", url: "https://www.linkedin.com/in/adhitya31" },
  { icon: "gh", label: "GitHub", url: "https://github.com/AdhityaB-31" },
  { icon: "ig", label: "Instagram", url: "https://www.instagram.com/_fiction_book_lover_/" },
  { icon: "fb", label: "Facebook", url: "https://www.facebook.com/profile.php?id=100064244096084" },
];

const SocialIcon = ({ icon }) => {
  const icons = {
    in: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    gh: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    ig: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    ),
    fb: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  };
  return icons[icon] || null;
};

export default function Contact() {
  const [form, setForm] = useState({ Name: "", Number: "", Email: "", Message: "" });
  const [msg, setMsg] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      await fetch(SCRIPT_URL, { method: "POST", body: fd });
      setMsg("✓ Message sent successfully!");
      setForm({ Name: "", Number: "", Email: "", Message: "" });
    } catch {
      setMsg("Something went wrong. Please try again.");
    }
    setSending(false);
    setTimeout(() => setMsg(""), 3500);
  };

  return (
    <section id="contact" className="section section-alt contact-section">
      <Sparkles count={9} />
      <div className="section-tag">Contact</div>
      <h2 className="section-title">Let's work together</h2>
      <div className="divider" />
      <p className="section-desc">
        Have a project in mind, or just want to say hello? Drop me a message and I'll get back to you.
      </p>

      <div className="contact-grid">
        {/* Left: Info */}
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value">adhityabvm@gmail.com</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">+91 996 287 3101</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <div className="contact-label">Location</div>
              <div className="contact-value">Puducherry, India</div>
            </div>
          </div>

          <div className="socials">
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="social-btn" title={s.label}>
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>

          <a href="/Public/Documents/B_Adhitya-Resume.pdf" download className="btn-primary" style={{ marginTop: 8 }}>
            Download CV ↓
          </a>
        </div>

        {/* Right: Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              className="form-input" name="Name" placeholder="Your Name" required
              value={form.Name} onChange={handleChange}
            />
            <input
              className="form-input" name="Number" placeholder="WhatsApp (optional)"
              value={form.Number} onChange={handleChange}
            />
          </div>
          <input
            className="form-input" name="Email" type="email" placeholder="Your Email" required
            value={form.Email} onChange={handleChange}
          />
          <textarea
            className="form-input form-textarea" name="Message" placeholder="Your Message"
            value={form.Message} onChange={handleChange}
          />
          <button type="submit" className="btn-primary" disabled={sending}>
            {sending ? "Sending…" : "Send Message →"}
          </button>
          {msg && <div className="form-msg">{msg}</div>}
        </form>
      </div>
    </section>
  );
}
