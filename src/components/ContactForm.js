// src/components/ContactForm.js
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvgqgrlw");

  if (state.succeeded) {
    return (
      <div className="text-center py-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-xl shadow-md mx-4 md:mx-auto max-w-xl">
        <h2 className="text-4xl font-extrabold text-green-600">🎉 Thank You!</h2>
        <p className="text-lg mt-4 text-gray-700">Your message has been successfully sent.</p>
      </div>
    );
  }

  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/30">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 mb-8 text-center flex items-center justify-center gap-3">
          <span role="img" aria-label="Get In Touch" className="text-5xl"></span>
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
              Email Address*
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white shadow-sm border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-200"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* ✅ Optional Mobile Number Field */}
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-800 mb-1">
              Mobile Number (optional)
            </label>
            <input
              id="mobile"
              type="tel"
              name="mobile"
              placeholder="e.g. +91 9876543210"
              className="w-full px-4 py-3 rounded-xl bg-white shadow-sm border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-xl bg-white shadow-sm border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none transition duration-200 resize-none"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <motion.button
            type="submit"
            disabled={state.submitting}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition duration-300 disabled:opacity-50"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
