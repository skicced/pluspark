import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Hero from "./components/Hero.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Ref from "./components/Ref.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Trusted from "./components/Trusted.jsx";

function App() {
  return (
    <div className="">
      <nav className="z-10 bg-red-200">
        <Nav />
      </nav>
      <section>
        <Hero />
        <About />

        <Ref />
        <Trusted />
        <Contact />
        <Footer />
      </section>
    </div>
  );
}

export default App;
