import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import "./navbar.css";

function NavBar({ darkMode, setDarkMode }) {
  const RESUME_PDF = "/resume.pdf";
  const RESUME_DERIVE_LINK = "https://drive.google.com/your-resume-link";

  const NAV_ITEMS = [
    ["home", "Home"],
    ["about", "About"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["contact", "Contact"],
  ];

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = darkMode
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    : "bg-gradient-to-br from-white via-cyan-50 to-blue-100";

  const navText = darkMode ? "text-white" : "text-gray-900";

  return (
    <header
      className={`sticky top-0 z-50 w-full shadow-sm transition-all duration-300 
        ${navBg} ${scrolled ? "border-b border-cyan-500/30" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-md hover:scale-105 transition">
          SS
        </h1>

        {/* Hamburger menu */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X size={28} className={navText} />
          ) : (
            <Menu size={28} className={navText} />
          )}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {NAV_ITEMS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-button ${darkMode ? "nav-dark" : "nav-light"}`}
            >
              {label}
            </a>
          ))}

          {/* Resume Button */}
          <button
            onClick={() => {
              window.open(RESUME_DERIVE_LINK, "_blank");
              const link = document.createElement("a");
              link.href = RESUME_PDF;
              link.download = "Resume.pdf";
              link.click();
            }}
            className={`nav-button ${darkMode ? "nav-dark" : "nav-light"}`}
          >
            Resume
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="group nav-button  border-cyan-400 hover:scale-105"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={25} /> : <Moon size={25} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden px-6 py-6 flex flex-col gap-4 items-center text-base font-medium
           ${
             darkMode ? "bg-black text-white" : "bg-white text-black"
           } shadow-md rounded-b-xl`}
        >
          {NAV_ITEMS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center hover:text-cyan-500 transition"
            >
              {label}
            </a>
          ))}

          <button
            onClick={() => {
              window.open(RESUME_DERIVE_LINK, "_blank");
              const link = document.createElement("a");
              link.href = RESUME_PDF;
              link.download = "Resume.pdf";
              link.click();
              setIsMenuOpen(false);
            }}
            className="w-full text-center hover:text-cyan-500 transition"
          >
            Resume
          </button>

          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setIsMenuOpen(false);
            }}
            className="w-full text-center hover:text-cyan-500 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </header>
  );
}

export default NavBar;
