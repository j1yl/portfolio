import { useState, useRef } from "react";
import { env } from "../env/client.mjs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormSubmit(true);
    emailjs
      .sendForm(
        env.NEXT_PUBLIC_SERVICEID,
        env.NEXT_PUBLIC_TEMPLATEID,
        form.current as HTMLFormElement,
        env.NEXT_PUBLIC_PUBLICKEY
      )
      .then(
        (res) => {
          console.log(res.status);
        },
        (error) => {
          console.error(error);
        }
      );

    form.current?.reset();
  };

  return (
    <section
      className="fullpage min-w-6xl mx-auto max-w-6xl p-4 font-mont"
      id="contact"
    >
      <form
        ref={form}
        className="flex w-full flex-col gap-4"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Name</label>
          <input
            type="text"
            className="rounded-xl bg-[#FF9D9D] p-2 placeholder-[#121212] focus:outline-none"
            placeholder="Enter your name"
            name="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Email</label>
          <input
            type="text"
            className="rounded-xl bg-[#C89DFF] p-2 placeholder-[#121212] focus:outline-none"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Message</label>
          <textarea
            className="resize-none rounded-xl bg-[#FFCC9D] p-2 placeholder-[#121212] focus:outline-none"
            placeholder="Enter your message"
            rows={5}
            maxLength={1000}
            name="message"
          />
        </div>
        <div className="flex items-center gap-6">
          <button
            type="submit"
            className="w-max rounded-xl bg-[#9FC0FF] px-4 py-2 font-semibold"
          >
            Submit
          </button>
          {formSubmit && (
            <p className="font-semibold">Your message has been sent !</p>
          )}
        </div>
      </form>
    </section>
  );
};

export default Contact;
