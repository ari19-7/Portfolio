import Navbar from "@/components/Navbar/Navbar";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import Footer from "@/components/Footer/Footer";
import ArticleWork from "@/components/ArticleWork/ArticleWork";
import SignupWidget from "@/components/WidgetSignup/SignupWidget";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

const articles = [
  {
    title: "Portfolio Home Page",
    content: "Built using Next.js and Tailwind CSS to showcase my skills and projects. Features a responsive design and dark mode toggle.",
    link: "#",
    date: "2023-10-01",
  },
  {
    title: "Service Project",
    content: "I volunteered at a foundation for immigrants, helping organize and distribute food. It was a meaningful way to serve and support people starting a new life.",
    link: "#",
    date: "2023-09-15",
  },
  {
    title: "Computer Science Projects",
    content: "I created a virtual store that generates a receipt after each purchase. It helped me practice logic, user input handling, and basic programming structures.",
    link: "#",
    date: "2023-08-20",
  },
];

const works = [
  {
    name: "Student Supervisor (Bakery)",
    icon: "/bakery-icon.png", // Replace with a valid path or URL
    duration: "2 years",
    content: "Led a team in a bakery setting, ensuring efficient operations and customer satisfaction. Developed leadership and teamwork skills.",
  },
  {
    name: "Freelance Web Developer",
    icon: "/web-dev-icon.png", // Replace with a valid path or URL
    duration: "1 year",
    content: "Built responsive websites using Next.js and Tailwind CSS. Focused on user-friendly and data-driven solutions.",
  },
  {
    name: "AI Video Creator",
    icon: "/ai-icon.png", // Replace with a valid path or URL
    duration: "Ongoing",
    content: "Creating educational videos about Amazonian wildlife using AI tools. Aiming to inspire and inform audiences about biodiversity.",
  },
];

const skills = [
  {
    name: "Python",
    proficiency: 80,
    icon: "/python-icon.png", // Replace with a valid path or URL
    content: "Proficient in data analysis, machine learning, and automation using Python.",
  },
  {
    name: "JavaScript",
    proficiency: 70,
    icon: "/js-icon.png", // Replace with a valid path or URL
    content: "Experienced in building dynamic, responsive web applications using JavaScript.",
  },
  {
    name: "Next.js",
    proficiency: 75,
    icon: "/nextjs-icon.png", // Replace with a valid path or URL
    content: "Building modern, server-rendered React applications with Next.js.",
  },
  {
    name: "Tailwind CSS",
    proficiency: 85,
    icon: "/tailwind-icon.png", // Replace with a valid path or URL
    content: "Designing responsive and visually appealing UIs using Tailwind CSS.",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar
        options={[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects" },
          { path: "/contact", label: "Contact" },
        ]}
      />

      <div className="profile-section">
        <ProfileHeader
          name="Arianna"
          bio="Aspiring Data Scientist & Mechanical Engineering| Passionate about solving problems through technology and creativity and love."
          linkedinUrl="#"
          imageUrl="/profile-image.png" 
        />

        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="social-icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
        </div>
      </div>

      <div className="main-content">
        <div className="articles-section">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              content={article.content}
              link={article.link}
              date={article.date}
            />
          ))}
        </div>

        <aside className="sidebar">
          <SignupWidget
            title="Stay Updated"
            content="Subscribe to receive updates and news about my projects."
          />
          <ArticleWork title="Work Experience" items={works} />
          <SkillsWidget title="Skills" skills={skills} />
        </aside>
      </div>

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