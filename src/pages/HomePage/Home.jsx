import ProfileImage from "../../assets/ProfilePic.png";
import TypeWriter from "../../components/TypeWriter";

function Home({ darkMode }) {
  return (
    <section
      id="home"
      className={` min-h-screen flex flex-col-reverse md:flex-row items-center justify-center 
        px-6 md:px-25 pt-10 md:pt-20 lg:pt-10 pb-12 gap-12 
        transition-all duration-500 
        ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-white via-cyan-50 to-blue-100"
        }
        lg:min-h-[80vh]
      `}
    >
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8 animate-fadeInUp">
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-snug 
            ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          Hey{" "}
          <span
            role="img"
            aria-label="wave"
            className="inline-block animate-wave"
          >
            👋🏻
          </span>
          , I'm{" "}
          <span
            className={`animate-gradient ${
              darkMode ? "text-cyan-400" : "text-cyan-600"
            }`}
          >
            Sangeeta
          </span>
        </h1>

        <p
          className={`text-base md:text-lg lg:text-xl max-w-xl ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Turning caffeine and code into magical solutions — Master of Computer
          Applications (MCA).
        </p>

        <div
          className={`text-xl md:text-2xl lg:text-3xl font-medium 
            ${darkMode ? "text-gray-200" : "text-gray-700"}`}
        >
          <TypeWriter />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mt-6 lg:mt-12">
          {/* Contact Me Button */}
          <a
            href="#contact"
            className={`relative inline-block px-6 py-3 font-semibold rounded-lg transition-all duration-300 
              ${
                darkMode
                  ? "bg-white text-gray-900 hover:bg-gray-200"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              } 
              shadow-md hover:shadow-xl transform hover:-translate-y-1`}
          >
            Contact Me
          </a>

          {/* Resume Button */}
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Resume.pdf";
              link.download = "Sangeeta_Resume.pdf";
              link.click();
            }}
            className="group relative inline-block px-6 py-3 font-semibold text-cyan-600 dark:text-cyan-400 rounded-lg overflow-hidden border-2 border-cyan-600 dark:border-cyan-400 transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 blur-lg opacity-0 group-hover:opacity-30 transition duration-300"></span>
            <span className="relative z-10">Download Resume</span>
          </button>
        </div>
      </div>

      {/* Right Section: Profile Image */}
      <div className="flex-1 flex justify-center items-center animate-fadeIn">
        <img
          src={ProfileImage}
          alt="Profile"
          className={`w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl 
            border-4 transition-transform duration-300 hover:scale-105 
            ${darkMode ? "border-cyan-400" : "border-cyan-500"}`}
        />
      </div>
    </section>
  );
}
export default Home;
