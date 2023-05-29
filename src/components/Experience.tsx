import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  address,
  time,
  work,
}: any) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 text-black/75 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="captilize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center text-dark/75">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 ">
          <Details
            position="Software Engineer"
            company="Klar Insights GmbH"
            companyLink="https://getklar.com"
            time="Apr. 2022 to Sep. 2022 / 6 months"
            address="Centurion (Remote) / Munich Germany"
            work="Front-End Development (Data Viz)
            OAuth2 REST API's in NestJS
            App Redesign (UX/UI & Implementation)
            Front-End (Primary):
- React
- Redux
- AG-Grid
- Material UI v4 & MUI v5 (DataGrid customization)
- Plotly.js
- i18next
- Socket.io
- Unleash (feature toggles)
- Data-forge
- React-testing-library
- ESlint
- Prettier
- Husky

BFF APIs (Secondary):
- NestJS
- OAuth2

UX & Analysis (Tertiary):
- Figma (Low-fidelity Mockups, Prototypes)
- Miro
- Notion"
          />
          <Details
            position="Software Engineer"
            company="Synthesis Software Technologies"
            companyLink="https://synthesis.co.za"
            time="Sep. 2020 to Mar. 2022 / 1 year 8 months"
            address="Hyde Park"
            work="Full-stack Software development and design of FinTech products
            SaaS and Cloud Native 
            Product design (UX/UI)
            Product management,React, TypeScript, Material UI v4, Styled Components, Redux, Apexcharts, AWS Services, Highcharts, Prime React, Husky, ESLint, Axios, Git (Bitbucket), .Net Core, Entity Framework, DDD, MySQL, Terraform, Figma, Miro, MS Teams"
          />
          <Details
            position="Product Manager"
            company="Howler"
            companyLink="https://howler.co.za"
            time="Jul. 2019 - Feb. 2020 / 8 months"
            address="Hyde Park"
            work="Tasked to ensure success of the company buying and taking over the IP of their cashless system software
            Product management
            Agile product delivery, Product Management, Technical Product Support, Release Notes, Help Documentation, Agile Scrum"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
