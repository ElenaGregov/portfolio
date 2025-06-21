import React from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section py-20 px-4 bg-neutral-400 text-center"
    >
      <FadeInWhenVisible>
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-rose-500 relative inline-block">
            <span className="relative z-10">Contact me</span>
          </h2>
          <p className="mt-8 text-lg text-gray-700 max-w-xl mx-auto">
            Feel free to reach out for collaboration or questions
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-24 max-w-5xl mx-auto">
          <ContactForm />
          <ContactInfo />
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

export default Contact;
