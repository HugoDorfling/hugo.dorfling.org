import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }: any) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full 
      font-semibold bg-dark text-light shadow-dark
      py-3 px-6 cursor-pointer absolute
      "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center dark:text-light">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center 
      rounded-full bg-circularLight
      dark:bg-circularDark"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript/Typescript" x="20vw" y="6vw" />
        <Skill name="ThreeJS" x="20vw" y="16vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NestJS" x="0vw" y="20vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="UX / UI" x="32vw" y="-5vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="Cloud" x="20vw" y="-15vw" />
        <Skill name="C#" x="-20vw" y="15vw" />
        <Skill name=".Net Core" x="-35vw" y="0vw" />
      </div>
    </>
  );
};

export default Skills;
