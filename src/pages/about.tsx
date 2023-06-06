import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import {
  motionValue,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "~/images/profile/hugo-about.png";
import youngMe from "~/images/profile/young-computer-me.png";
import band from "~/images/profile/band.jpeg";
import counselor from "~/images/profile/counselor.jpeg";
import howler from "~/images/profile/howler.jpg";
import investec from "~/images/profile/investec.jpeg";
import school from "~/images/profile/school.jpeg";
import shirtDesign from "~/images/profile/tshirt-design.png";
import youthLeader from "~/images/profile/youth-leader.jpg";
import Certifications from "@/components/Certifications";

const AnimatedNumbers = ({ value }: any) => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

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
          <AnimatedText
            text="Passion fuels purpose!"
            className="mb-16 dark:text-light lg:!text-5xl sm:!text-3xl xs:!text-1xl"
          />
          <div
            className="grid w-full grid-cols-8 gap-16 text-dark/75 
          dark:text-light sm:gap-8 sm:flex sm:flex-col"
          >
            <div
              className="col-span-3 flex flex-col items-start 
            justify-start dark:text-light xl:col-span-4"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Biography
              </h2>
              <p className="font-medium">
                My name is Hugo Dorfling and I was born on the 15th of March,
                1995 in South Africa.
              </p>
              <p className="my-4 font-medium">
                Since the day I had the privilege to lay my hands on a computer
                I have been passionate about solving problems and expressing
                myself through technology.
              </p>
              <p className="font-medium">
                I was 13 when I started freelancing and designing professional
                logo's, websites, banner ads, business cards and more. At 14, I
                was so proud to buy myself a Wacom Bamboo tablet as an
                investment into greater quality and freedom in my design work. I
                developed my own portfolio website that same year
                (hugodorfling.com) turning my PSD design into HTML & CSS. I also
                designed t-shirts for my high school's athletes.
              </p>
              <p className="font-medium">
                After diving into web development I was certain that programming
                next on my list to master. My artistic drive however made me
                pickup a guitar as well... At high school, in the subject
                Information Technology, I was exposed to the Delphi programming
                language (an object oriented language) and SQL where the
                fundamentals of programming was laid strong in my intellectual
                foundations.
              </p>
              <p className="font-medium">
                I also fell in love with making music and joined the church
                band, where I became the worship leader of the youth church. We
                were such a dynamic creative team at our youth church and I
                dabbled in video editing, as well as building props from my
                designs used in church and many more.
              </p>

              <p className="font-medium">
                Just before turning 18, I had the opportunity to go to Chiang
                Mai in Thailand, to a school for creatives in christian
                ministry, to play guitar and sing for two weeks. This led up to
                an increasing motivation to pursue a life in christian ministry
                as I was deeply moved to find purpose and meaning in life.
              </p>

              <p className="font-medium">
                This led up to an increasing motivation to pursue a life in
                christian ministry as I was deeply moved to find purpose and
                meaning in life.
              </p>

              <p className="font-medium">
                I finished high school (in 2013) with all seven of my subjects
                80% and above, higher grade Mathematics (80%) with the
                electives: Physical Sciences (86%), Information Technology (92%)
                and Accounting (95%).
              </p>

              <p className="font-medium">
                Instead of continuing to pursue my passion in technology after
                school, I focused on first establishing a strong sense of self
                and to develop my worldview. I got the opportunity to start as a
                youth coach at a high school (2014), working with youth to
                mediate between psychologists and social workers, counselling
                and teaching life skills.
              </p>
              <p className="font-medium">
                I did a lot of work redesigning the Christian Activity framework
                at the school, painted walls, created videos and constant social
                media art. We even held a fantastic launch event with a full
                band, lights and I preached my heart out. It was a fantastic
                experience.
              </p>
              <p className="font-medium">
                The following year I got a job as a Youth Pastor and started the
                youth church where I redesigned the logo, printed banners and
                merchandise. I created marketing material, from videos to flyers
                and held an event inviting parents to share the vision and
                strategic plan for the cirriculum and activities of youth
                church.
              </p>
              <p className="font-medium">
                This was such a great opportunity for me but it was super
                challenging as I had not received a salary from the church but
                instead had to raise funds to sustain myself with a sponsorship
                model. We had youth camps and went on mission trips to Botswana
                and much more...
              </p>
              <p className="font-medium">
                I continued to preach, focusing on life skills which I have
                learnt throughout my life and inviting guest speakers to share
                stories.
              </p>
              <p className="font-medium">
                I knew that I absolutely love coming up with solutions to
                problems in order to make the world a better place. I felt
                unequipped however to practically deal with the issues I was
                wanting to solve and I knew that technology is the key to
                unlocking my full potential. I tried creating a cross platform
                mobile application using Xamarin and C# and rediscovered my love
                for creating solutions and innovations through the art of
                programming. I decided to switch careers and pursue studies in
                BCom Informatics which was the perfect harmony between business
                and information technology.
              </p>
              <p className="font-medium">
                I was invited to the Investec Bursary Selection Programme but
                unfortunately didn't receive the bursary. I reached out to a
                friend of mine's father and he sponsored me to study so I can
                try to apply for bursaries using my first year university marks.
              </p>
              <p className="font-medium">
                My knack for people and systems as well as a passion for
                software made me breeze through the first semester at University
                of Pretoria with the following marks: Financial Accounting 111
                (89%), Information systems 113 (87%), Business Management 114
                (86%), Statistics 110 (85%), Informatics 154 (84%), Economics
                110 & 120 (72%). C# was the programming language of choice for
                this degree with SQL database focus, but the main specialization
                was in systems analysis and design.
              </p>
              <p className="font-medium">
                I also adopted a much more open-minded view of the world and
                started exploring many different viewpoints and religions in
                order to learn and grow. I reached a point where I was
                overwhelmed with the complexity of trying to grasp at
                understanding the universe, the world we live in and my deep
                inner battles. I was also frustrated in the cookie-cutter
                approach of universities and wanted to start building real world
                experience as I felt I need to explore what exactly I want to
                specialise in through working.
              </p>
              <p className="font-medium">
                I also didn't want to sit with huge amounts of student debt and
                waste my financial sponsor's money. I left university at the
                start of the second semester exam. (Something I would look back
                at with some regret but I have definitely proven to myself that
                real world and practical application of theory solidifies
                understanding and gives context to studies.) I started off in
                the networking world as a Wireless Field Technician at Bronberg
                Connect (WISP) (Oct 2018) . I then moved into an IT Support
                Engineer role at ProtechIT (Dec 2018) and got my CompTIA A+ and
                N+ certifications. I then was fast tracked into a Product
                Success Manager role at a startup called Howler (Jul 2019).
              </p>
              <p className="font-medium">
                I reported to the Product Owner, working closely with the
                development team and the rest of the business. I was exposed to
                the full SDLC, an agile workflow and gained tremendous
                experience of what it takes to ship production ready solutions
                and adapt to real world challanges. I was the tech lead on the
                Cashless Product, which entailed an Android Application for RFID
                cashless transactions and an administration portal built on Ruby
                on Rails. This exposure to working closely with the developers,
                identifying bugs, eliciting requirements from stakeholders,
                ideating with the team and writing out user stories sparked a
                fire in my heart. This was what I want to be doing, this was the
                team I want to be on. I realised that each and every role in the
                product team interested me, product management, design,
                development and QA. I soon formulated my plan, made my decision
                and in February of 2020, I left Howler to pursue my dream to
                become a world-class software developer!
              </p>
              <p className="font-medium">
                I decided to try and get into the tuition-free coding university
                called WeThinkCode (based on 42.fr) as some of the developers I
                was working with got their foot in the software industry through
                their programme. I was bound to go through selection bootcamp in
                March but with Covid-19 and lockdowns, this was delayed to June
                2020. I realised that in order to survive till then, i'll have
                to quickly sharpen up my web development skills and start
                sustaining myself again through freelancing. I started off with
                freeCodeCamp.org, revising HTML and CSS. I also started learning
                JavaScript and because my fundamentals was laid strong I found
                it extremely intuitive and easy. I just got used to the latest
                developments in programming and sharpening up my Algorithms and
                Data Structure knowledge.
              </p>
              <p className="font-medium">
                I joined Leetcode, CodeWars and Hackerrank to start practicing
                to solve problems regularly. I received my 'Responsive Web
                Design' and 'JavaScript Algorithms and Data Structures'
                certificates from freeCodeCamp.org and I was hooked. I jumped
                into the React framework for front end development using Redux,
                learnt NodeJS using Express and MongoDB. I was really impressed
                at the advancements in web technologies and realised the
                potential of single page web apps and the potential of
                serverless. I also dived straight into Linux, Unix shell
                scripting and C Programming to further grow my knowledge of how
                things work on the lower level and understand key operating
                system fundamentals. Preparing for the selection bootcamp which
                was fully focused on the C programming language, I arrived more
                than prepared and aced the exams and the challenges thrown at
                me.
              </p>
              <p className="font-medium">
                WeThinkCode offered my a full-tuition bursary along with stipend
                per month, but unfortunately I was not able to sustain myself to
                study full-time even with the assistance. I started looking at
                the job market and saw a tremendous demand for C# and ASP.NET. I
                wanted to check out what the fuss was all about and soon
                realised the extreme increase of productivity, managability of
                code, potential for test driven development and the advancements
                from the Microsoft team. I was quickly up and running with
                ASP.NET Core MVC and quickly explored the Angular framework with
                TypeScript as I saw this was the most sought after combination.
                I have got to say it was love at first sight and it felt
                extremely natural to me as the workflow made sense and seemed
                like my best bet to invest and specialise in. I'm also an avid
                gamer and the potential for developing games with Unity and C#
                is another reason why I am super excited to continue to master
                my skills and grow in this direction.
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
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={youngMe}
                alt="hugo"
                className="w-full h-auto rounded 2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={shirtDesign}
                alt="hugo"
                className="w-full h-auto rounded 2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={band}
                alt="hugo"
                className="w-full h-auto rounded 2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={school}
                alt="hugo"
                className="w-full h-auto rounded 2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={counselor}
                alt="hugo"
                className="w-full h-auto rounded 2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={youthLeader}
                alt="hugo"
                className="w-full h-auto rounded 2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={investec}
                alt="hugo"
                className="w-full h-auto rounded 2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={howler}
                alt="hugo"
                className="w-full h-auto rounded 2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end just">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={28} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light">
                  years old
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
          <Certifications />
        </Layout>
      </main>
    </>
  );
};

export default About;
