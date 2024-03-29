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

const Certifications = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h3
        className="font-bold text-8xl mb-32 w-full text-center text-dark/75
      dark:text-light lg:-text-6xl md:text-4xl sm:text-2xl"
      >
        Certifications
      </h3>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative
      sm:w-full"
      >
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 ">
          <Details
            type="Certified ScrumMaster"
            time="Feb 2023"
            place="Scrum Alliance"
            info=""
          />
          <Details
            type="Certified Scrum Product Owner"
            time="Feb 2023"
            place="Scrum Alliance"
            info=""
          />
          <Details
            type="AWS Certified Cloud Practitioner"
            time="Oct 2020"
            place="AWS"
            info=""
          />
          <Details
            type="AWS Certified Solutions Architect Associate"
            time="Oct 2020"
            place="AWS"
            info=""
          />
          <Details
            type="AWS Certified Developer Associate"
            time="Oct 2020"
            place="AWS"
            info=""
          />

          <Details type="CompTIA A+" time="Feb 2019" place="CompTIA" info="" />
          <Details type="CompTIA N+" time="Feb 2019" place="CompTIA" info="" />
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
