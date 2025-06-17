// src/pages/Contact.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

   emailjs
  .sendForm(
    "your_actual_service_id",
   "your_actual_template_id",
    form.current,
    {
      publicKey: "your_actual_public_key",
      
    }
  )

     .then(
  () => {
    toast.success("✅ Message sent successfully!");
    setStatus("");
    form.current.reset();
  },
  (error) => {
    console.error("FAILED...", error.text);
    toast.error("❌ Failed to send message. Try again later.");
  }
);

  };

  return (
    <section className="min-h-screen bg-gradient-to-br pt-30 from-white via-blue-50 to-indigo-100 py-20 px-6">
      <div className="max-w-2xl mx-auto bg-white/90 p-10 rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] backdrop-blur-md">
        <motion.h2
          className="text-4xl font-bold text-center text-indigo-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          💌 Contact Me
        </motion.h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full border border-gray-300 p-3 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-md transition"
          >
            Send Message
          </motion.button>
        </form>

        {status && (
          <p className="text-center text-sm text-green-700 mt-4 font-medium">
            {status}
          </p>
        )}

        {/* External Contact Options */}
        <div className="mt-10 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">📱 Reach Me On</h3>
          <div className="flex justify-center space-x-6 text-indigo-700 text-2xl">
            <a
              href="mailto:monikasenger9@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-900 transition"
              title="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/monika-senger"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-900 transition"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/monikasenger"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-900 transition"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
