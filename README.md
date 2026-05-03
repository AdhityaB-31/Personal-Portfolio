# 🧑‍💻 Adhitya's Portfolio — React

A fully redesigned personal portfolio built with **React**, featuring a dark/light theme toggle, smooth animations, and functional image sliders in the Work section.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌙 Dark / ☀️ Light Theme | Toggle between deep slate + electric cyan (dark) and warm cream + vivid blue (light) |
| ⌨️ Typing Effect | Animated typewriter cycles through: Front-End Developer, UI/UX Designer, Freelancer |
| 🖼️ Image Sliders | Each project card auto-advances screenshots every **2.5 seconds**, with dot indicators, arrows & counter |
| 📱 Fully Responsive | Mobile hamburger menu, stacked layouts, fluid typography |
| 📋 Tab System | About section has animated Skills, Education, and Certifications tabs |
| 📬 Contact Form | Submits directly to Google Sheets via Apps Script |
| 📄 CV Download | Direct download link for resume PDF |

---

## 🗂️ Project Structure

```
adhitya-portfolio/
├── public/
│   └── Public/
│       ├── Images/
│       │   ├── adhi.png
│       │   └── Project-Work/
│       │       ├── Personal_Portfolio/
│       │       ├── Event_Management_System/
│       │       └── LoanWise/
│       └── Documents/
│           ├── Full_Stack_Development.pdf
│           ├── Web_Developer_Internship.pdf
│           ├── UI-UX Designing.pdf
│           └── Adhitya Resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   ├── Hero.js / Hero.css
│   │   ├── About.js / About.css
│   │   ├── Services.js / Services.css
│   │   ├── Portfolio.js / Portfolio.css
│   │   ├── Contact.js / Contact.css
│   │   └── Footer.js / Footer.css
│   ├── styles/
│   │   └── global.css
│   ├── App.js
│   └── index.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v16 or later
- **npm** v7 or later

### Installation & Run

```bash
cd adhitya-portfolio
npm install
npm start
```

Opens at **http://localhost:3000**

### Production Build

```bash
npm run build
```

---

## 🎨 Design System

### Typography
| Role | Font |
|---|---|
| Headings / Logo | Syne — 800 weight |
| Body / UI | DM Sans — 300 / 400 / 500 |

### Theme Tokens

| Variable | Dark Mode | Light Mode |
|---|---|---|
| `--bg` | `#0d0f14` | `#f5f0e8` |
| `--text` | `#e8eaf0` | `#1a1a2e` |
| `--accent` | `#00e5ff` (cyan) | `#0057ff` (blue) |
| `--muted` | `#7c8094` | `#7a7065` |

Theme toggles by switching `.theme-dark` / `.theme-light` on the root div in `App.js`.

---

## 🖼️ Adding Project Images

Drop screenshots into `public/Public/Images/Project-Work/<ProjectName>/`
then update the `images` array in `src/components/Portfolio.js`:

```js
images: [
  "/Public/Images/Project-Work/YourProject/screen1.png",
  "/Public/Images/Project-Work/YourProject/screen2.png",
],
```

The slider auto-picks them up and cycles every 2.5 seconds.

---

## 📬 Contact Form

The form posts to a Google Apps Script endpoint in `Contact.js`. To use your own:
1. Create a Google Sheet → Extensions → Apps Script → deploy as web app.
2. Replace `SCRIPT_URL` in `src/components/Contact.js`.

---

## 🌐 Deployment

| Platform | Command |
|---|---|
| Vercel | `npx vercel` |
| Netlify | Drag `/build` folder into dashboard |
| GitHub Pages | Add `homepage` to `package.json`, then `npm run deploy` |

---

## 👤 Author

**Adhitya B** — B.Tech IT, MVIT Puducherry  
📧 adhiadhi3129@gmail.com | 🔗 [LinkedIn](https://linkedin.com/in/adhitya31) | ⌨️ [GitHub](https://github.com/AdhityaB-31)

*Built with React ⚛️ — 2025*
