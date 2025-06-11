import ProjectHeader from "@/components/projectHeader/ProjectHeader";
import ProjectsCard from "@/components/ProjectComponent/ProjectsCard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Portfolio - Projects",
  description: "Explore various projects showcased in this portfolio.",
};

const projectsList = [
  {
    title: "Portfolio Home Page",
    description: "Built using Next.js and Tailwind CSS to showcase my skills and projects. Features a responsive design and dark mode toggle.",
    technologies: ["Next.js", "Tailwind CSS", "Figma"],
    link: "#",
  },
  {
    title: "AI Videos about the Amazon",
    description: "Educational videos about Amazonian wildlife, created using AI tools to enhance storytelling and engagement.",
    technologies: ["AI Tools", "Video Editing", "Animation"],
    link: "#",
  },
  {
    title: "Data Science Projects",
    description: "Analyzing trends in datasets using Python, pandas, and Matplotlib. Exploring correlations between weather patterns and plant growth.",
    technologies: ["Python", "pandas", "Matplotlib"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <div>
      <Navbar
        options={[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects" },
          { path: "/uses", label: "Uses" },
        ]}
      />

      <section className="projects-section py-12 px-6 md:px-12 lg:px-24">
        <ProjectHeader
          title="Creative Works and Contributions"
          content="A collection of projects demonstrating various skills and problem-solving approaches. Each project is a stepping stone in the journey of learning and innovation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {projectsList.map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </section>

      <Footer
        options={[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects" },
          { path: "/uses", label: "Uses" },
        ]}
      />
    </div>
  );
}