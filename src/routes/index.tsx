import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { About, Skills, Experience, Thesis, Education, Achievements, Certifications, Contact, Footer } from "@/components/portfolio/Sections";

const TITLE = "Kneez Fatima — Data Analyst & Machine Learning Enthusiast";
const DESC = "Portfolio of Kneez Fatima: data analysis, machine learning and computer vision projects built with Python, Pandas, SQL and Scikit-learn.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Thesis />
        <Education />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
