"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
      <p className="mb-3">
        I graduated with a degree in{" "}
        <span className="font-medium">Web Development</span> and have developed
        a strong foundation in both{" "}
        <span className="font-medium">Front-end and Back-end</span>{" "}
        technologies. On the <span className="font-medium">Front-end</span>, I
        specialize in{" "}
        <span className="font-medium underline">
          React, Next.js, JavaScript, and TypeScript
        </span>{" "}
        , creating dynamic and responsive user interfaces. For{" "}
        <span className="font-medium">Back-end </span>
        development, I am proficient in{" "}
        <span className="font-medium">Node.js, Express.js, and MongoDB, </span>
        enabling me to build robust and scalable server-side applications.
        Additionally, I have experience with{" "}
        <span className="font-medium">React Native</span> for mobile app
        development, allowing me to create seamless cross-platform experiences.
      </p>
      <p className="mb-3">
        <i>My goal for the next 2 years </i>
        is to become a <span className="font-medium">Full-stack</span>{" "}
        developer, mastering both front-end and back-end technologies to build
        complete, integrated solutions.
      </p>
      <p>
        <i>In my spare time</i>, I enjoy <u>playing video games</u> ,
        <u>watching movies</u> , and <u>listening to music</u>. These hobbies
        help me unwind and recharge, fueling my creativity and passion for
        technology.
      </p>
      <p>
        In short, I love my current life, and it would be even better if I had
        the opportunity to meet and work with you. I may not be the best, but I
        will certainly not disappoint you.
      </p>
      <p>
        <b>
          <i>Thank you for reading this far!</i>
        </b>
      </p>
    </motion.section>
  );
}
