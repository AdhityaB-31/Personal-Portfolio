import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const body = document.body;
    if (dark) {
      body.classList.add("theme-dark");
      body.classList.remove("theme-light");
    } else {
      body.classList.add("theme-light");
      body.classList.remove("theme-dark");
    }
  }, [dark]);

  return (
    <div className={dark ? "theme-dark" : "theme-light"}>
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
