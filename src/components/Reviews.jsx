import { useState, useEffect } from "react";
import Sparkles from "./Sparkles";
import "./Reviews.css";

// Configure your Google Sheets Web App URL or Supabase REST URL here:
const REVIEWS_API_URL = "https://script.google.com/macros/s/AKfycbwHC7io6RU5ipdY6n7CpTXt6Ls0BnfroQt2pEFI3IPp_VbjVjIs0HIwF241wPdlFnNl/exec";

const initialReviews = [];

const hireMePoints = [
  {
    title: "Clean Code",
    desc: "Maintainable, well-commented, and modular structures using the best React and Java standards.",
  },
  {
    title: "Fast Delivery",
    desc: "Iterative developments with quick turnarounds, meeting milestones exactly on schedule.",
  },
  {
    title: "Responsive Design",
    desc: "Stunning user experiences crafted to scale flawlessly across mobile, tablet, and desktop screens.",
  },
  {
    title: "Secure Backend",
    desc: "Robust APIs with JWT authorization, secure password hashing, and clean SQL database designs.",
  },
  {
    title: "Deployment Support",
    desc: "End-to-end setups on AWS, Docker, Vercel, or Netlify, ready for production use.",
  },
  {
    title: "Documentation Included",
    desc: "Comprehensive API docs, instructions, and readme files to ensure seamless future updates.",
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState({ name: "", role: "", rating: 5, comment: "" });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [msg, setMsg] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch reviews from spreadsheet or backend API if configured
  useEffect(() => {
    const delayPromise = new Promise((resolve) => setTimeout(resolve, 5000));
    
    if (REVIEWS_API_URL) {
      const fetchReviews = async () => {
        try {
          const fetchPromise = fetch(REVIEWS_API_URL).then((res) => res.json());
          const [data] = await Promise.all([fetchPromise, delayPromise]);
          if (Array.isArray(data)) {
            setReviews(data);
          }
        } catch (err) {
          console.error("Failed to fetch reviews:", err);
          await delayPromise;
        } finally {
          setLoadingReviews(false);
        }
      };
      fetchReviews();
    } else {
      delayPromise.then(() => {
        setLoadingReviews(false);
      });
    }
  }, []);

  // Slide reviews auto play
  useEffect(() => {
    if (reviews.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleRating = (stars) => {
    setForm((f) => ({ ...f, rating: stars }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    if (REVIEWS_API_URL) {
      try {
        const fd = new FormData();
        Object.entries(form).forEach(([k, v]) => fd.append(k, v));

        await fetch(REVIEWS_API_URL, {
          method: "POST",
          body: fd,
          mode: "no-cors",
        });

        setMsg("✓ Review submitted successfully! It will appear once approved.");
        setForm({ name: "", role: "", rating: 5, comment: "" });
        setTimeout(() => {
          setShowModal(false);
          setMsg("");
        }, 3000);
      } catch (err) {
        setMsg("Something went wrong. Please try again.");
      }
    } else {
      // Local state fallback (simulating submission)
      const newReview = { ...form };
      setReviews((r) => [newReview, ...r]);
      setMsg("✓ Review added locally! (Configure API URL to save to Google Sheets / Supabase)");
      setForm({ name: "", role: "", rating: 5, comment: "" });
      setTimeout(() => {
        setShowModal(false);
        setMsg("");
      }, 3000);
    }
    setLoading(false);
  };

  return (
    <section id="reviews" className="section reviews-section">
      <Sparkles count={8} />
      <div className="section-tag">Endorsements</div>
      <h2 className="section-title">Value &amp; Feedback</h2>
      <div className="divider" />

      <div className="reviews-grid">
        {/* Why Hire Me section */}
        <div className="why-hire-me glass-card">
          <h3 className="sub-title">Why Hire Me</h3>
          <div className="hire-points">
            {hireMePoints.map((p, idx) => (
              <div key={idx} className="hire-point-card">
                <div className="hire-icon">✓</div>
                <div className="hire-content">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Slider section */}
        <div className="reviews-slider glass-card">
          <h3 className="sub-title">Client Reviews</h3>

          <div className="testimonial-wrapper">
            {loadingReviews ? (
              <div className="hp-loader">
                <div className="snitch-container">
                  <div className="snitch-wing left"></div>
                  <div className="snitch-body">
                    <div className="snitch-details"></div>
                  </div>
                  <div className="snitch-wing right"></div>
                  <div className="spell-sparkle s1"></div>
                  <div className="spell-sparkle s2"></div>
                  <div className="spell-sparkle s3"></div>
                </div>
                <div className="spell-text">Casting Revelio...</div>
                <div className="spell-progress">
                  <div className="spell-progress-bar"></div>
                </div>
              </div>
            ) : reviews.length > 0 ? (
              reviews.map((r, idx) => (
                <div
                  key={idx}
                  className={`testimonial-slide ${idx === currentIndex ? "active" : ""}`}
                >
                  <div className="stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`star ${i < r.rating ? "filled" : ""}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="testimonial-comment">"{r.comment}"</p>
                  <div className="testimonial-author">
                    <div className="author-name">{r.name}</div>
                    <div className="author-role">
                      {r.role === "Owner" || r.role === "Portfolio Owner" ? "Developer" : r.role}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="testimonial-slide active">
                <div className="stars">
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                </div>
                <p className="testimonial-comment">
                  "No reviews have been published yet. If we have worked together, please click 'Write a Review' below to share your experience!"
                </p>
                <div className="testimonial-author">
                  <div className="author-name">Adhitya B</div>
                  <div className="author-role">Developer</div>
                </div>
              </div>
            )}
          </div>

          <div className="reviews-actions">
            {!loadingReviews && (
              <button className="btn-primary" onClick={() => setShowModal(true)}>
                Write a Review
              </button>
            )}

            {/* Slider Dots */}
            {!loadingReviews && reviews.length > 1 && (
              <div className="slider-dots">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === currentIndex ? "active" : ""}`}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Review Modal Form */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <h3 className="modal-title">Share Your Experience</h3>
            <form onSubmit={handleSubmit} className="review-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                />
              </div>

              <div className="form-group">
                <label>Designation / Role</label>
                <input
                  type="text"
                  name="role"
                  className="form-input"
                  required
                  value={form.role}
                  onChange={handleChange}
                  placeholder="e.g. Founder at Startup"
                />
              </div>

              <div className="form-group">
                <label>Rating</label>
                <div className="star-rating-select">
                  {Array.from({ length: 5 }).map((_, idx) => {
                    const starsValue = idx + 1;
                    return (
                      <button
                        type="button"
                        key={idx}
                        className={`star-select-btn ${starsValue <= form.rating ? "active" : ""}`}
                        onClick={() => handleRating(starsValue)}
                      >
                        ★
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="form-group">
                <label>Review Comment</label>
                <textarea
                  name="comment"
                  className="form-input form-textarea"
                  required
                  value={form.comment}
                  onChange={handleChange}
                  placeholder="Share details about your experience working with me..."
                />
              </div>

              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? "Submitting..." : "Submit Review"}
              </button>

              {msg && <div className="form-msg">{msg}</div>}
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
