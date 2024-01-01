"use client";

import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => {
  const imageAnimateChild = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| About Metaversus" textStyles="text-center" />
        <TitleText title={<>What we do </>} textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">InnovateU</span> is your
          go-to hub for{" "}
          <span className="font-extrabold text-white">
            open-source collaboration,
          </span>{" "}
          where software development thrives on innovation, transparency, and
          inclusivity. Whether you're a seasoned developer or just starting,
          join our{" "}
          <span className="font-extrabold text-white">dynamic community</span>{" "}
          for expert guidance, global opportunities, and hands-on training.
          Elevate your skills through weekly events, free mentorship, and a
          commitment to collective problem-solving. Let's{" "}
          <span className="font-extrabold text-white">shape</span> the future of
          open source together!
        </motion.p>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
      <br></br>
      <div className="z-10 space-x-6 flex items-center justify-center gap-10">
        <motion.button
          className=" rounded-md border-2 font-medium border-red-700 bg-white py-7.5 px-6 uppercase text-red-700 transition-colors hover:text-black"
          whileHover={{
            scale: 1.1,
          }}
        >
          <img
              src="/youtube.png"
              alt="youtube-logo"
              className="w-[30px] h-[30px]"
            />
          <span className="font-bold text-[18px]">
            YouTube{" "}
          </span>

          <div className="button-before"></div>
        </motion.button>

        <motion.button
          className="relative rounded-md border-2 font-medium border-blue-600 bg-white py-5.5 px-5 uppercase text-blue-600 transition-colors hover:text-black"
          whileHover={{
            scale: 1.1,
          }}
        >
          <img
            src="/linkedin.png"
            alt="headset"
            className="w-[30px] h-[30px] object-contain mr-2"
          />
          <span className="font-bold text-[18px]">Linkedin</span>
          <div className="button-before"></div>
        </motion.button>
        <motion.button
          className="relative rounded-md border-2 font-medium border-purple-600 bg-white py-5.5 px-5 uppercase text-purple-600 transition-colors hover:text-black"
          whileHover={{
            scale: 1.1,
          }}
        >
          <img
            src="/discord.png"
            alt="headset"
            className="w-[30px] h-[30px] object-contain mr-2"
          />
          <span className="font-bold text-[18px]">Courses</span>
          <div className="button-before"></div>
        </motion.button>
      </div>
    </section>
  );
};

export default About;
