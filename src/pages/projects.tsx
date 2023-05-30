import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GitHubIcon } from "@/components/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cryptoImg from "~/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }: any) => {
  return (
    <article
      className="w-full flex items-center justify-between 
    rounded-3xl border border-solid border-dark bg-light shadow-2xl relative"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer rounded-lg overflow-hidden"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto p-1 rounded-tl-[25px] rounded-bl-[25px]"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-dark">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link className="w-10 text-dark" href={github} target="_blank">
            <GitHubIcon />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }: any) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center 
    rounded-2xl border border-solid border-dark bg-light p-6 relative"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer rounded-lg overflow-hidden"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto p-1 rounded-tl-[25px] rounded-bl-[25px]"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold text-dark">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center">
          <Link className="w-10 text-dark" href={github} target="_blank">
            <GitHubIcon />
          </Link>
          <Link
            className="text-lg font-semibold underline"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Hugo | Projects</title>
        <meta name="Projects" content="Hugo projects" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center text-dark/75">
        <Layout className="pt-16">
          <AnimatedText text="Imagination trumps knowledge" />
          <div className="grid grid-cols-12 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Analytics Dashboard"
                github="http://github.com/HugoDorfling"
                img={cryptoImg}
                link="http://github.com/HugoDorfling"
                summary={"A really cool project"}
                type={"Featured Project"}
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Analytics Dashboard"
                github="http://github.com/HugoDorfling"
                img={cryptoImg}
                link="http://github.com/HugoDorfling"
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Analytics Dashboard"
                github="http://github.com/HugoDorfling"
                img={cryptoImg}
                link="http://github.com/HugoDorfling"
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Analytics Dashboard"
                github="http://github.com/HugoDorfling"
                img={cryptoImg}
                link="http://github.com/HugoDorfling"
                summary={"A really cool project"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Analytics Dashboard"
                github="http://github.com/HugoDorfling"
                img={cryptoImg}
                link="http://github.com/HugoDorfling"
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Analytics Dashboard"
                github="http://github.com/HugoDorfling"
                img={cryptoImg}
                link="http://github.com/HugoDorfling"
                type={"Featured Project"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
