import React, { CSSProperties } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "src/components/Layout";
import profilePic from "~/images/profile/hugo.jpeg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import HireMe from "@/components/HireMe";
import Background from "~/images/svgs/miscellaneous_icons_1.svg";

const sectionStyle: CSSProperties = {
  width: "100%",
  height: "200px",
  position: "absolute",
  left: "96%",
  top: "50%",
  backgroundImage: "url(/images/svgs/miscellaneous_icons_1.svg)",
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hugo Dorfling | Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light ">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Hugo Dorfling"
                className="w-[80%] h-auto rounded-[90px]
                image-blurred-edge
                shadow-xl
                lg:hidden
                md:inline-block
                md:w-full
                "
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl text-left dark:text-light
                xl:!text-5xl lg:!text-center lg:text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium">
                I have about 3 years experience in Digital Product Development
                from 3 startups (Seed & Development, Startup and Growth business
                stages respectively) serving in roles as Technical Product
                Manager, Full Stack Engineer, Front-End Engineer, UI / UX (Figma
                & Miro) and Cloud (3x AWS Certified) with Agile Scrum and Kanban
                product development framework.
              </p>
              <p>
                I strive to create value while living a meaningful and purpose
                driven life.
              </p>
              <p className="my-4 text-base font-medium">
                I love to collaborate in order to solve complex problems in
                order to make a lasting impact. Experimentation, innovation,
                feedback, iteration and improvement are main drivers of my
                exhilarating passion to find disruptive and elegant solutions
                presented in delightful experiences.
              </p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/hugo-cv-may-2023.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 
                  rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark
                  border border-solid border-transparent hover:border-dark
                  dark:bg-light dark:hover:text-light dark:hover:bg-dark dark:text-dark dark:hover:border-light"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:hugodorfling@live.co.za"
                  target={"_blank"}
                  className="ml-4 text-lg 
                  font-medium capitalize 
                  text-dark underline
                  dark:text-light"
                >
                  Projects / Portfolio
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <section
          className=" 
        right-8 bottom-8 inline-block w-24 md:hidden"
          style={{
            ...sectionStyle,
            backgroundPosition: "fit",
            backgroundSize: "fit",
            backgroundRepeat: "no-repeat",
          }}
        ></section>
      </main>
    </>
  );
}
