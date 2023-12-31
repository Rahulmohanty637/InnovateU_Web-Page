"use client";

import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
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
        inclusivity. Whether you're a seasoned developer or just starting, join
        our <span className="font-extrabold text-white">dynamic community</span>{" "}
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
  </section>
);

export default About;
