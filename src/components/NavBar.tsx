import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <header
      className="w-fu
     px-32 py-8 font-medium"
    >
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
      </nav>
      <Logo />
      <nav>
        <Link href="/" target={"_blank"}>
          T
        </Link>
        <Link href="/about" target={"_blank"}>
          T
        </Link>
        <Link href="/projects" target={"_blank"}>
          T
        </Link>
        <Link href="/articles" target={"_blank"}>
          T
        </Link>
        <Link href="/articles" target={"_blank"}>
          T
        </Link>
        <Link href="/articles" target={"_blank"}>
          T
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
