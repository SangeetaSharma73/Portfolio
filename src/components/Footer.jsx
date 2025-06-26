import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

export default function Footer({ darkMode }) {
  const iconStyle = `text-xl md:text-2xl transition-transform duration-300 hover:scale-125 cursor-pointer ${
    darkMode ? "text-cyan-400" : "text-cyan-600"
  }`;

  return (
    <footer
      className={`w-full py-8 px-6 transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300"
          : "bg-gradient-to-br from-white via-cyan-50 to-blue-100 text-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4">
        {/* Text on the left (centered on small screens) */}
        <p className="text-sm sm:text-base text-center md:text-left w-full md:w-auto">
          Built with{" "}
          <span className="text-red-500">
            <FaHeart className="inline" />
          </span>{" "}
          by{" "}
          <span className="font-semibold text-cyan-500 animate-gradient">
            Sangeeta Sharma
          </span>{" "}
          © {new Date().getFullYear()}
        </p>

        {/* Icons on the right */}
        <div className="flex justify-center md:justify-end items-center space-x-6 w-full md:w-auto">
          <a
            href="https://github.com/SangeetaSharma73"
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyle}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sangeeta-sharma-12609b253/"
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyle}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyle}
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
