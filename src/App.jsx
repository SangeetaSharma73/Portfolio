import "aos/dist/aos.css";

import { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/HomePage/Home";
import AboutPage from "./pages/AboutPage/About";
import GithubStats from "./components/GithubStats";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import Projects from "./pages/ProjectPage/Projects";
import ContactDetails from "./pages/ContactPage/ContactDetails";
import ContactUs from "./pages/ContactPage/ContactUs";
import Footer from "./components/Footer";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <div
        className={
          darkMode
            ? "bg-black text-white min-h-screen"
            : "bg-white text-black min-h-screen"
        }
      >
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home darkMode={darkMode} />
        <AboutPage darkMode={darkMode} />
        <GithubStats darkMode={darkMode} />
        <SkillsPage darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <ContactDetails darkMode={darkMode} />
        <ContactUs darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
