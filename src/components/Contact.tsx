import { useState, useRef } from "react";
import { env } from "../env/client.mjs";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import HeroText from "./HeroText";

const Contact = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
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
    setFormSubmit(true);
    form.current?.reset();
  };

  return (
    <section className="fullpage p-4" id="contact">
      <div className="min-w-6xl mx-auto flex w-full max-w-6xl p-4">
        <HeroText text={"Send me a message!"} />
      </div>
      <form
        ref={form}
        onSubmit={handleFormSubmit}
        className="min-w-6xl flex h-full w-full max-w-6xl flex-col gap-4 p-4 text-primary_dark dark:text-primary_white"
      >
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <InputField name="name" type="text" text="What is your name?" />
          <InputField name="email" type="email" text="What is your email?" />
        </div>
        <div>
          <label className="font-semibold">What is your message?</label>
          <textarea
            rows={5}
            maxLength={1000}
            className="w-full resize-none rounded-xl bg-third_white p-4 focus:outline-none dark:bg-primary_dark dark:placeholder-primary_white"
          />
        </div>
        <div className="flex justify-between gap-4">
          <button className="w-max rounded-xl bg-primary_dark px-4 py-2 font-semibold text-primary_white transition-all active:scale-95 dark:bg-primary_dark">
            Submit
          </button>
          {formSubmit ? (
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-semibold"
            >
              Your message has been sent !
            </motion.p>
          ) : (
            <></>
          )}
        </div>
      </form>
    </section>
  );
};

const InputField = ({
  text,
  name,
  type,
}: {
  text: string;
  name: string;
  type: string;
}) => {
  return (
    <>
      <div className="flex w-full flex-col gap-2">
        <label className="font-semibold">{text}</label>
        <input
          type={type}
          name={name}
          className="rounded-xl bg-third_white p-4 focus:outline-none dark:bg-primary_dark dark:placeholder-primary_white"
        />
      </div>
    </>
  );
};

export default Contact;
