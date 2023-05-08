"use client";

import emailjs from "@emailjs/browser";
import { SyntheticEvent, useRef } from "react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then((result) => {
        if (result.status === 200) {
          alert("Your message has been sent!");
        }
      })
      .catch((error) => {
        alert("There was an error sending your message. Please try again.");
      });
  };

  return (
    <main className="flex my-16 flex-col p-4">
      <div className="flex flex-col h-full max-w-4xl w-full mx-auto gap-8">
        <h1 className="h1">Contact Me</h1>
        <form className="flex flex-col gap-2" ref={form} onSubmit={sendEmail}>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="bg-light-100 p-2 rounded-lg focus:ring-2 focus:ring-slate-700 focus:outline-none"
            />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="bg-light-100 p-2 rounded-lg focus:ring-2 focus:ring-slate-700 focus:outline-none"
            />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              required
              className="bg-light-100 p-2 rounded-lg focus:ring-2 focus:ring-slate-700 focus:outline-none"
            />
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              rows={8}
              name="message"
              required
              className="bg-light-100 resize-none p-2 rounded-lg focus:ring-2 focus:ring-slate-700 focus:outline-none"
            />
          </fieldset>
          <button
            type="submit"
            className="mt-4 w-max py-1 px-2 bg-light-100 hover:bg-light-200 transition-all duration-150 cursor-pointer rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
