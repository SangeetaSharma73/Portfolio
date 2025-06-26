import { useEffect } from "react";
import {
  SiHtml5,
  SiExpress,
  SiSlack,
  SiVercel,
  SiLaravel,
  SiTailwindcss,
} from "react-icons/si";
import { FaGithub, FaNpm } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiPython,
} from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoVisualStudio } from "react-icons/bi";
import { TbBrandZoom, TbBrandVite, TbJson } from "react-icons/tb";
import { CgCPlusPlus } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./skillsPage.css"; // Custom animations (see below)

export default function SkillsPage({ darkMode }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const boxStyle = `group relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex flex-col items-center justify-center 
    rounded-xl shadow-md transition-all duration-500 transform hover:scale-110 
    cursor-pointer overflow-hidden border border-transparent
    ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`;

  const headingStyle = `text-3xl md:text-4xl font-extrabold text-center mb-12 animate-gradient-text ${
    darkMode ? "text-white" : "text-gray-900"
  }`;

  const wrapperClass = `animate-border-gradient rounded-xl p-[1px]`;

  const techItems = [
    { icon: <SiHtml5 />, label: "HTML" },
    { icon: <IoLogoCss3 />, label: "CSS" },
    { icon: <DiJavascript1 />, label: "JavaScript" },
    { icon: <DiReact />, label: "React.js" },
    { icon: <SiTailwindcss />, label: "Tailwindcss" },
    { icon: <DiNodejs />, label: "Node.js" },
    { icon: <SiExpress />, label: "Express.js" },
    { icon: <DiMongodb />, label: "MongoDB" },
    { icon: <FaGithub />, label: "GitHub" },
    { icon: <SiLaravel />, label: "Laravel" },
  ];

  const tools = [
    { icon: <BiLogoVisualStudio />, label: "VS Code" },
    { icon: <DiGit />, label: "Git" },
    { icon: <SiVercel />, label: "Vercel" },
    { icon: <SiSlack />, label: "Slack" },
    { icon: <FaNpm />, label: "npm" },
    { icon: <TbJson />, label: "JSON" },
    { icon: <TbBrandVite />, label: "Vite" },
    { icon: <TbBrandZoom />, label: "Zoom" },
  ];

  const familiarity = [
    { icon: <span className="text-3xl font-bold">C</span>, label: "C" },
    { icon: <CgCPlusPlus />, label: "C++" },
    { icon: <DiPython />, label: "Python" },
  ];

  const renderCards = (items, aosAnim) =>
    items.map((tech, idx) => (
      <div key={idx} data-aos={aosAnim} className={wrapperClass}>
        <div className={boxStyle}>
          <div className="text-4xl md:text-5xl">{tech.icon}</div>
          <div className="mt-2 text-sm font-medium">{tech.label}</div>
        </div>
      </div>
    ));

  return (
    <section
      id="tech"
      className={`pt-24 pb-0 px-6 transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-b from-white via-cyan-50 to-blue-100"
      }`}
    >
      <h2
        className={`text-3xl md:text-5xl font-extrabold text-center mb-14 tracking-tight ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
        data-aos="fade-up"
      >
        Tech <span className="text-cyan-500 animate-gradient">Skills</span>
      </h2>
      <h2 className={headingStyle} data-aos="fade-up">
        Tech <span className="text-cyan-500 animate-gradient">Skills</span>
        <span
          className={`animate-gradient ${
            darkMode ? "text-cyan-400" : "text-cyan-600"
          }`}
        >
          Tech Stack
        </span>
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center mb-20">
        {renderCards(techItems, "zoom-in")}
      </div>

      <h2 className={headingStyle} data-aos="fade-up">
        <span
          className={`animate-gradient ${
            darkMode ? "text-cyan-400" : "text-cyan-600"
          }`}
        >
          Tools I Use
        </span>
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center mb-20">
        {renderCards(tools, "fade-left")}
      </div>

      <h2 className={headingStyle} data-aos="fade-up">
        <span
          className={`animate-gradient ${
            darkMode ? "text-cyan-400" : "text-cyan-600"
          }`}
        >
          Familiar With
        </span>
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
        {renderCards(familiarity, "fade-right")}
      </div>
    </section>
  );
}
