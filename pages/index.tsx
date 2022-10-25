import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { PageInfo, Skill, Experience, Social, Project } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
// import { useRef } from "react";

type PageProps = {
  pageInfo: PageInfo;
  skills: Skill[];
  experiences: Experience[];
  socials: Social[];
  projects: Project[];
};

const Home: NextPage<PageProps> = ({
  pageInfo,
  skills,
  experiences,
  projects,
  socials,
}) => {
  // const footerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll isolate scroll-smooth md:scrollbar  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab08]/80">
      <Head>
        <title>Portfolio</title>
        <meta
          name="Artur's portfolio"
          content="Frontend developer portfolio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sticky top-0 w-full h-[90px]  z-10 bg-gradient-to-b from-[rgb(36,36,36)] to-transparent" />

      <Header socials={socials} />

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="hidden md:flex items-center justify-end transition-all duration-150 md:mr-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#f7ab08"
              className="mr-5 md:mr-0 h-6 w-6 rounded-full filter grayscale hover:grayscale-0 hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const skills: Skill[] = await fetchSkills();
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      skills,
      experiences,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
