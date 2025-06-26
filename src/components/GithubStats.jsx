import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import AOS from "aos";
import "aos/dist/aos.css";

function GithubStats({ darkMode }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="github"
      className={`min-h-screen px-6 md:px-16 py-20 flex flex-col items-center justify-center space-y-12
        transition-all duration-500
        ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-white via-cyan-50 to-blue-100"
        }`}
    >
      {/* Heading */}
      <h2
        className={`text-3xl md:text-5xl font-extrabold text-center animate-fadeInUp tracking-tight ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Visual{" "}
        <span className="text-purple-500 animate-gradient font-bold">
          GitHub Journey
        </span>
      </h2>

      {/* GitHub Stats */}
      <div
        className="flex flex-col lg:flex-row gap-10 items-center justify-center w-full max-w-6xl"
        data-aos="fade-up"
      >
        <img
          src="https://github-readme-stats.vercel.app/api?username=SangeetaSharma73&show_icons=true&locale=en&theme=transparent"
          alt="Git Stats"
          className="w-full max-w-lg rounded-xl shadow-lg border-2 border-cyan-400 dark:border-cyan-500 hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs?username=SangeetaSharma73&show_icons=true&locale=en&layout=compact&theme=transparent"
          alt="Top Languages"
          className="w-full max-w-lg rounded-xl shadow-lg border-2 border-cyan-400 dark:border-cyan-500 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* GitHub Streak */}
      <div data-aos="fade-up" className="w-full max-w-4xl">
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=SangeetaSharma73&theme=transparent"
          alt="GitHub Streak"
          className="w-full rounded-xl shadow-lg border-2 border-purple-400 dark:border-purple-500 hover:scale-105 transition-transform duration-300"
        />
      </div>

      <GitHubCalendar
        username="SangeetaSharma73"
        blockSize={16}
        blockMargin={5}
        color="rgb(6, 182, 212)"
        fontSize={16}
      />
    </section>
  );
}

export default GithubStats;
