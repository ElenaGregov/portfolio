import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xnnvnwqp");

  if (state.succeeded) {
    return (
      <p className="text-rose-600 bg-rose-200 p-4 rounded text-center text-lg font-medium mb-4 border border-rose-400">
        ✅ Thank you! Your message has been sent.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
    >
      {/* Name */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 font-semibold mb-2"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Your full name"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-400"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 font-semibold mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-400"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-gray-700 font-semibold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          placeholder="Write your message here..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-400"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-rose-500 text-white font-semibold px-6 py-2 rounded hover:bg-rose-600 transition duration-300 shadow"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;
