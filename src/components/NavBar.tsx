import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GitHubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./useThemeSwitcher";

type CustomLinkProps = {
  href: string;
  title: string;
  className: string;
};

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
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
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header
      className="w-full
      flex justify-between
     px-32 py-8 font-medium text-dark/75
     dark:text-light"
    >
      <nav className="">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

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
            background: mode === "light" ? "rgb(27,27,27)" : "rgb(255,255,255)",
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
    </header>
  );
};

export default NavBar;
