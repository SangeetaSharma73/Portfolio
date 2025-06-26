function AboutPage({ darkMode }) {
  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-16 py-16 transition-all duration-500
        ${
          darkMode
            ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-b from-white via-cyan-50 to-blue-100"
        }`}
    >
      {/* Left: Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6 animate-fadeInUp">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight 
          ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          Hello Everyone,
        </h2>

        <p
          className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto md:mx-0 transition-all duration-300 
          ${darkMode ? "text-gray-300" : "text-gray-700"}`}
        >
          I'm{" "}
          <span className="font-semibold text-cyan-600 dark:text-cyan-400">
            Sangeeta
          </span>
          , a dedicated{" "}
          <span className="font-semibold text-cyan-600 dark:text-cyan-400">
            Full Stack Web Developer
          </span>{" "}
          from India. I'm currently enhancing my skills in{" "}
          <span className="text-blue-500 dark:text-blue-300 italic">
            frontend development
          </span>{" "}
          and passionate about building responsive, intuitive, and beautiful web
          applications.
        </p>

        <p
          className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto md:mx-0 
          ${darkMode ? "text-gray-300" : "text-gray-700"}`}
        >
          I strive to create{" "}
          <span className="font-semibold underline decoration-cyan-400">
            seamless user experiences
          </span>{" "}
          through clean code and design. I enjoy turning concepts into real,
          user-friendly solutions while staying up-to-date with modern web
          technologies.
        </p>

        <p
          className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto md:mx-0 
          ${darkMode ? "text-gray-300" : "text-gray-700"}`}
        >
          Outside of coding, I love:
        </p>

        <ul
          className={`list-disc list-inside text-left pl-4 sm:pl-8 md:pl-0 text-base sm:text-lg md:text-xl lg:text-2xl 
          ${darkMode ? "text-gray-300" : "text-gray-700"}`}
        >
          <li>✨ Attending tech meetups & conferences</li>
          <li>💬 Clarifying concepts and helping others</li>
          <li>🌍 Traveling and exploring new places</li>
        </ul>

        <p
          className={`mt-4 italic text-lg md:text-xl lg:text-2xl font-medium ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          "Every line of code crafted today shapes the solutions that will
          redefine tomorrow."
        </p>
      </div>

      {/* Right: Profile Image */}
      <div className="md:w-1/2 flex justify-center items-center animate-fadeIn">
        <div className="relative group">
          <img
            src="https://sangeeta73portfolio.netlify.app/assets/Homeprofile.png"
            alt="Sangeeta profile"
            className={`w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl border-4 transition-transform duration-500 
            transform group-hover:scale-105 group-hover:rotate-1
            ${darkMode ? "border-cyan-400" : "border-cyan-500"}`}
          />
          {/* Hover Glow */}
          <div className="absolute -inset-1 rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition duration-500 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
