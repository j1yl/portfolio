import { motion } from "framer-motion";
import AnimateWord from "./AnimateWord";

const Contact = () => {
  return (
    <section
      className="h-screen max-w-6xl mx-auto px-3 md:px-0 text-zinc-900"
      id="contact"
    >
      <div className="flex flex-col justify-center gap-16 h-full">
        <div className="text-4xl md:text-6xl flex flex-row flex-wrap">
          <AnimateWord
            text="LET'S TALK AND FIND THE RIGHT SOLUTION FOR YOU"
            delay={0}
            stagger={1}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 1 },
          }}
          className="font-medium text-2xl md:text-4xl"
        >
          REACH ME AT<br></br>
          <a href="mailto: lefodev@gmail.com">LEFODEV@GMAIL.COM</a>
          <br></br>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
