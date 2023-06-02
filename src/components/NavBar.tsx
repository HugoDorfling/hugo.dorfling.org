import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GitHubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./useThemeSwitcher";

type CustomLinkProps = {
  href: string;
  title: string;
  className: string;
  spanClassName?: string;
};

const CustomLink = ({
  href,
  title,
  className = "",
  spanClassName = "",
}: CustomLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      dark:bg-light
      ${spanClassName}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({
  href,
  title,
  className = "",
  spanClassName = "",
  toggle,
}: any) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark
      my-2`}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-light
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      dark:bg-dark
      ${spanClassName}
      `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full
      flex justify-between
     px-32 py-8 font-medium text-dark/75
     dark:text-light
     relative
     z-10 lg:px-16 md:px-12 sm:px-8"
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 
        rounded-sm w-6 -translate-y-0.5
        ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 
          rounded-sm w-6 my-0.5
          ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 
          rounded-sm w-6 translate-y-0.5 
          ${isOpen ? "-rotate-45 -translate-y-1" : "-translate-y-0.5"}`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/HugoDorfling"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GitHubIcon className="text-dark shadow-sm w-full h-full dark:text-light" />
          </motion.a>
          <motion.a
            href="https://za.linkedin.com/in/leslie-hugo-dorfling"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <button
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
            style={{
              background:
                mode === "light" ? "rgb(27,27,27)" : "rgb(255,255,255)",
            }}
            className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark text-dark "} />
            ) : (
              <MoonIcon className={"fill-dark text-light"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col  justify-between 
items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
text-light
bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
 dark:text-dark"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              spanClassName="bg-light dark:bg-dark"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              spanClassName="bg-light dark:bg-dark"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              spanClassName="bg-light dark:bg-dark"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              href="https://github.com/HugoDorfling"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <GitHubIcon className="shadow-sm w-full h-full dark:text-dark text-light" />
            </motion.a>
            <motion.a
              href="https://za.linkedin.com/in/leslie-hugo-dorfling"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <button
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
              }}
              style={{
                background:
                  mode === "light" ? "rgb(255,255,255)" : "rgb(27,27,27)",
              }}
              className={`ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1
  ${mode === "light" ? "bg-dark text-dark" : "bg-light text-dark"}
  `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark text-light "} />
              ) : (
                <MoonIcon className={"fill-dark text-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
