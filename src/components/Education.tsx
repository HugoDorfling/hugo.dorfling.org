import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }: any) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 text-black/75 first:mt-0 last:mb-0 
      w-[60%] mx-auto flex flex-col items-center justify-between
      dark:text-light
      md:text-sm"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl">
          {type}&nbsp;
        </h3>
        <span className="captilize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center text-dark/75
      dark:text-light lg:-text-6xl md:text-4xl sm:text-2xl"
      >
        Education
      </h2>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative
      sm:w-full"
      >
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
          dark:bg-light"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 ">
          <Details
            type="National Senior Certificate"
            time="Finished in 2013"
            place="Highschool Eldoraigne"
            info="87% Average Final (IT, Accounting, Physical Sciences)"
          />
          <Details
            type="Bachelor of Commerce in Informatics "
            time="Jan. 2017 to Dec. 2017"
            place="University of Pretoria"
            info="Not complete (83.20% Average Semester 1) - Transition to Computer Science"
          />
          <Details
            type="Bachelor Of Science in Computer Science"
            time="Apr. 2022 to Sep. 2022 / 6 months"
            place="University of London - Coursera"
            info="5 Subjects completed - T.B.C"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
