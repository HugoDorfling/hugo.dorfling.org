import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import {
  motionValue,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "~/images/profile/developer-pic-2.jpg";

const AnimatedNumbers = ({ value }: any) => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>{value}</span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Hugo | About</title>
        <meta name="About me" content="My about page" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout>
          <AnimatedText text="Passion fuels purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16 text-dark/75">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Hugo, and I have about 3 years experience in Digital
                Product Development from 3 startups (Seed & Development, Startup
                and Growth business stages respectively) serving in roles as
                Technical Product Manager, Full Stack Engineer, Front-End
                Engineer, UI / UX (Figma & Miro) and Cloud (3x AWS Certified)
                with Agile Scrum and Kanban product development framework.
              </p>
              <p className="my-4 font-medium">
                I strive to create value while living a meaningful and purpose
                driven life. I love to collaborate in order to solve complex
                problems in order to make a lasting impact. Experimentation,
                innovation, feedback, iteration and improvement are main drivers
                of my exhilarating passion to find disruptive and elegant
                solutions presented in delightful experiences.
              </p>
              <p className="font-medium">
                I have done studies in BCom Informatics and BSc Computer
                Science, both incomplete degrees, and I’ve discovered, through
                practical work experience, on real products, where I add the
                most value. I combine my years of experience as Graphic Designer
                in my youth, with my communication skills gained through
                Counseling / Church Ministry, Analysis and Systems & Design
                Thinking from BCom Informatics studies, Technical Acumen from my
                IT experience and Software Product Engineering and Computer
                Science from my years as a Software Engineer into a role that
                focuses on bringing all areas of product development and
                business together to make remarkable and life-changing products
                that make a difference in peoples lives through servant
                leadership, collaboration and strong determination towards
                realizing a worthwhile vision. I thrive in a highly autonomous
                and collaborative environment where discovery, exploration and
                learning are highly valued through the three pillars of
                empiricism, namely Transparency, Inspection and Adaptation. I
                care deeply about truly connecting with fellow humans and
                building lasting relationships that are meaningful through
                empathy and love.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="hugo"
                className="w-full h-auto rounded 2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end just">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={50} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end just">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={20} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Satisfied clients
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;
