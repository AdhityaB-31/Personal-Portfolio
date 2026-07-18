# 🧑‍💻 Adhitya's Personal & Freelance Portfolio — React + Vite

A highly interactive, responsive, and modern developer portfolio built with **React** and **Vite**. It is custom-tailored to showcase freelance services, transparent pricing, and high-impact engineering projects.

---

## ✨ Key Features

| Feature | Details |
| :--- | :--- |
| **💼 Freelance Services Grid** | Displays 6 tailored services (Web Dev, Backend/APIs, College Projects, Tutoring, Copywriting) with clear pricing structures. |
| **🤝 Negotiable Pricing Badge** | Friendly notice stating rates are flexible and budget-friendly. |
| **🌙 Dark / ☀️ Light Theme** | Smooth toggling between slate + electric cyan (dark) and warm cream + vivid blue (light). |
| **⌨️ Typing Animation** | Dynamic hero text cycling through roles: *Front-End Developer*, *UI/UX Designer*, *Freelancer*. |
| **🖼️ Project Image Sliders** | Interactive sliders for project showcases that auto-advance screenshots every **2.5s**, complete with indicators, arrows, and counters. |
| **📱 Fully Responsive** | Seamless layouts with a mobile-friendly hamburger navigation menu. |
| **📋 Animated Tabs** | Tab-based layout for the About section highlighting *Skills*, *Education*, and *Certifications*. |
| **📬 Contact Form** | Functional form connecting to Google Sheets via Google Apps Script. |
| **📄 CV Integration** | Direct link to view and download his technical resume. |

---

## 🗂️ Project Showcase & Layout

The portfolio features the following projects in exact order:
1. **FastX**: Online Bus Ticket Booking System (Spring Boot + React, Razorpay integration, role-based dashboards, and seat locking).
2. **CertVerify**: Blockchain Certificate Verification (Solidity + React, Ethereum smart contracts).
3. **LoanWise**: ML-Based Loan Approval Predictor (Python + React, Flask, Scikit-learn).
4. **Event Management System**: Web application for registration, scheduling, and user management (Java + Vanilla Web).
5. **BeachHub**: Coastal destination guide and activity organizer (Flutter + Dart + Firebase).
6. **Personal Portfolio**: This modern portfolio showcasing his professional and freelance profile.

### Directory Structure

```text
adhitya-portfolio/
├── dist/                 # Compiled production build
├── public/
│   └── Public/
│       ├── Documents/    # Resumes and certification documents
│       └── Images/
│           ├── Hero-Section-Images/
│           └── Project-Work/
│               ├── FastX/
│               ├── CertVerify/
│               ├── LoanWise/
│               ├── Event_Management_System/
│               ├── BeachHub/
│               └── Personal_Portfolio_Updated/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── About.jsx / About.css
│   │   ├── Services.jsx / Services.css
│   │   ├── Portfolio.jsx / Portfolio.css
│   │   ├── Contact.jsx / Contact.css
│   │   ├── Footer.jsx / Footer.css
│   │   └── Sparkles.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── index.jsx
├── index.html
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or later recommended)
- **npm** or **yarn**

### Installation & Development Run

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone https://github.com/AdhityaB-31/Personal-Portfolio.git
   cd Personal-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite local development server:
   ```bash
   npm start
   ```
   *The application will run locally at **http://localhost:5173** (or the redirected port fallback).*

### Production Build

To build the static files for production hosting (such as on Vercel, Netlify, or GitHub Pages):
```bash
npm run build
```
This outputs compiled assets to the `/dist` directory.

---

## 🎨 Typography & Colors

### Typography
- **Headings & Brand Title**: `Syne` (Google Fonts) — Bold 800 weight
- **Body UI & Text**: `DM Sans` (Google Fonts) — 300 / 400 / 500 weights

### Core Color Tokens

| Variable | Dark Theme | Light Theme |
| :--- | :--- | :--- |
| `--bg` | `#0d0f14` (Deep Slate) | `#f5f0e8` (Warm Cream) |
| `--text` | `#e8eaf0` (Off-white) | `#1a1a2e` (Dark Blue) |
| `--accent` | `#00e5ff` (Electric Cyan) | `#0057ff` (Vivid Blue) |
| `--muted` | `#7c8094` (Muted Slate) | `#7a7065` (Warm Muted) |

---

## 👤 Author

**Adhitya B** — B.Tech Information Technology, MVIT Puducherry  
- 📧 Email: [adhityabvm@gmail.com](mailto:adhityabvm@gmail.com)  
- 🔗 LinkedIn: [linkedin.com/in/adhitya31](https://linkedin.com/in/adhitya31)  
- ⌨️ GitHub: [github.com/AdhityaB-31](https://github.com/AdhityaB-31)  

*Built with React ⚛️ and Vite ⚡*
