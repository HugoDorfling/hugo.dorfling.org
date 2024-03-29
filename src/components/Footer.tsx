import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid 
      border-dark 
    font-medium text-lg
    dark:text-light dark:border-light"
    >
      <Layout
        className="py-8 text-dark 
      flex items-center justify-between dark:text-light
      sm:flex-col sm:text-center"
      >
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div>
          Built with{" "}
          <span
            className="text-primary
          text-2xl px-1"
          >
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="/"
            target={"_blank"}
            className="underline underline-offset-2"
          >
            Hugo
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
