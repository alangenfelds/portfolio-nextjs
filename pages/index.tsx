import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

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
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll isolate scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab08]/80">
      <Head>
        <title>Portfolio</title>
        <meta
          name="Artur's portfolio"
          content="Frontend developer portfolio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header socials={socials} />

      <section id="hero" className="snap-start">
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
          <div className="flex items-center justify-center">
            <Image
              src="https://i.imgur.com/e2yvD6A.png"
              alt="footer image"
              objectFit="contain"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 hover:cursor-pointer"
            />
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
