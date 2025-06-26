import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

function ContactDetails({ darkMode }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const contacts = [
    {
      icon: <FaGithub />,
      title: "GitHub",
      link: "https://github.com/SangeetaSharma73",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/sangeeta-sharma-12609b253/",
    },
    {
      icon: <SiLeetcode />,
      title: "Leetcode",
      link: "https://leetcode.com/u/sangeeta136428sharma/",
    },
    {
      icon: <SiHackerrank />,
      title: "Hackerrank",
      link: "https://www.hackerrank.com/profile/sangeeta136428s1",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      link: "tel:+917351474546",
      text: "+91 73514 74546",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      link: "mailto:sangeeta136428sharma@gmail.com",
      text: "sangeeta136428sharma@gmail.com",
    },
  ];

  const cardStyle = `group w-full sm:w-64 h-48 flex flex-col items-center justify-center rounded-xl 
    shadow-xl border-2 transition-transform duration-300 cursor-pointer transform hover:scale-105 
    hover:shadow-2xl text-center px-4 py-6 space-y-4 
    ${
      darkMode
        ? "bg-gray-800 text-white border-cyan-600"
        : "bg-white text-gray-900 border-cyan-400"
    }`;

  return (
    <section
      id="contact"
      className={`py-20 px-6 md:px-16 transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-white via-cyan-50 to-blue-100"
      }`}
    >
      <h2
        className={`text-3xl md:text-5xl font-extrabold text-center mb-12 tracking-tight ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
        data-aos="fade-up"
      >
        Let's <span className="text-cyan-500 animate-gradient">Connect</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {contacts.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            className={cardStyle}
          >
            <div className="text-4xl text-cyan-500 transition group-hover:scale-110">
              {item.icon}
            </div>
            <div className="text-lg font-semibold">{item.title}</div>
            <div className="text-sm opacity-80">
              {item.text ? item.text : `Visit my ${item.title}`}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ContactDetails;
