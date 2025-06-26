import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { sendEmails } from "../../Utils/EmailUtils";

export default function ContactUs({ darkMode }) {
  useEffect(() => {
    AOS.init({ duration: 100 });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [agreed, setAgreed] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      setStatusMessage("You must agree to the terms to submit.");
      return;
    }

    const result = await sendEmails(formData);

    // Update the UI based on the result
    if (result.success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }

    setStatusMessage(result.message);
  };

  return (
    <div
      className={`isolate px-6 py-12 sm:py-16 lg:px-8  transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200"
          : "bg-gradient-to-br from-white via-cyan-50 to-blue-100 text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact <span className="text-cyan-500 animate-gradient">Us</span>
        </h2>
        <p className="mt-2 text-lg leading-8">
          Let’s build something amazing together.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className={`mx-auto mt-10 max-w-xl sm:mt-16 p-6 rounded-xl shadow-2xl border ${
          darkMode ? "bg-gray-800 border-cyan-600" : "bg-white border-cyan-300"
        }`}
        data-aos="fade-up"
      >
        {[
          { label: "First Name", id: "firstName", type: "text" },
          { label: "Last Name", id: "lastName", type: "text" },
          { label: "Email", id: "email", type: "email" },
          { label: "Phone", id: "phone", type: "tel" },
        ].map(({ label, id, type }, i) => (
          <div
            key={id}
            className="mt-6"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <label htmlFor={id} className="block text-lg font-semibold">
              {label}
            </label>
            <input
              id={id}
              name={id}
              type={type}
              value={formData[id]}
              onChange={handleChange}
              className="block w-full rounded-md border px-3.5 py-2 text-black shadow-sm focus:ring-2 focus:ring-cyan-500 sm:text-sm"
              required
            />
          </div>
        ))}

        {/* Message */}
        <div className="mt-6" data-aos="fade-up" data-aos-delay="400">
          <label htmlFor="message" className="block text-lg font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="block w-full rounded-md border px-3.5 py-2 text-black shadow-sm focus:ring-2 focus:ring-cyan-500 sm:text-sm"
            required
          ></textarea>
        </div>

        {/* Agreement */}
        <div className="mt-6 flex items-center gap-x-4">
          <Switch
            checked={agreed}
            onChange={setAgreed}
            className={`${
              agreed ? "bg-cyan-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200`}
          >
            <span
              className={`${
                agreed ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform bg-white rounded-full transition`}
            />
          </Switch>
          <span className="text-sm leading-6">
            I agree to the{" "}
            <a href="#" className="font-semibold text-cyan-600">
              terms and conditions
            </a>
            .
          </span>
        </div>

        {/* Submit */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={!agreed}
            className={`w-full flex justify-center rounded-md py-2 px-4 text-lg font-semibold text-white transition 
              ${
                agreed
                  ? "bg-cyan-600 hover:bg-cyan-500"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            Submit
          </button>
        </div>

        {statusMessage && (
          <div
            className="mt-4 text-center text-sm"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {statusMessage}
          </div>
        )}
      </form>
    </div>
  );
}
