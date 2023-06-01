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
      dark:text-light"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}&nbsp;</h3>
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
      dark:text-light"
      >
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 ">
          <Details
            type="Bachelor Of Science in Computer Science"
            time="Apr. 2022 to Sep. 2022 / 6 months"
            place="Coursera"
            info="5 Subjects completed - T.B.C"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
