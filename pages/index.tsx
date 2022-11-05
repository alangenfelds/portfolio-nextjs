import { useEffect, useRef, useState } from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useTheme } from "next-themes";

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
import Footer from "../components/Footer";
import { useIntersection } from "../hooks/useIntersection";

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
  // const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  const heroRef = useRef<HTMLDivElement | null>(null);
  const inViewport = useIntersection(heroRef, "-200px");

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    // setMounted(true);
    setTheme("dark");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (!mounted) {
  //   return null;
  // }

  return (
    <div className="relative dark:bg-[rgb(36,36,36)]bg-[#f7f7f7] dark:text-white text-[#393e46]      } h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll isolate scroll-smooth md:scrollbar  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab08]/80">
      <Head>
        <title>Portfolio</title>
        <meta
          name="Artur's portfolio"
          content="Frontend developer portfolio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sticky top-0 w-full h-[90px] z-10 bg-gradient-to-b dark:from-[rgb(36,36,36)] to-transparent" />

      <Header socials={socials} />

      <section id="hero" className="snap-center" ref={heroRef}>
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

      {inViewport ? <></> : <Footer />}
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
