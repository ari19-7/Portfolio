import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export default function About() {
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

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row items-start md:items-center">
        <div className="md:w-2/3">
          <header aria-label="About Section">
            <h1 className="text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Hello, I'm Arianna!
            </h1>
          </header>

          <p className="mt-6 text-lg text-gray-800 dark:text-gray-300">
            My journey began with a love for problem-solving and curiosity about how technology works. That passion led me to pursue computer science at Ensign College, where I discovered the creative side of coding and the power it has to solve real-world problems.          </p>
          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            Now, I'm transitioning into data science, where I can blend analytical thinking with creativity to uncover insights and build solutions that matter. I’m especially drawn to projects that are user-friendly, purposeful, and data-driven.          </p>
          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            Before tech, I worked as a student supervisor in a bakery, leading a team and ensuring smooth operations. It taught me responsibility, leadership, and the value of good communication skills I now bring to every project I work on.          </p>
          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            Beyond code, you’ll find me exploring nature, experimenting with photography, or learning how to use AI tools for creative expression. I’m passionate about growth, personally, spiritually, and professionally, and I’m excited to keep learning and building in this ever-evolving field.          </p>
        </div>

        <div className="md:w-1/3 flex flex-col items-center mt-6 md:mt-0">
          <Image
            src="/profile-image.png" // Replace with a valid path or URL
            width={250}
            height={250}
            className="rounded-lg object-cover shadow-lg"
            alt="Profile Image"
          />

          <div className="flex flex-col items-center mt-4 space-y-3 text-gray-700 dark:text-gray-300">
            <a href="#" target="_blank" className="flex items-center gap-2">
              <FaXTwitter className="text-xl" />
              Follow on X
            </a>
            <a href="#" target="_blank" className="flex items-center gap-2">
              <FaGithub className="text-xl" />
              Follow on Github
            </a>
            <a href="#" target="_blank" className="flex items-center gap-2">
              <FaLinkedin className="text-xl" />
              Follow on LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="flex items-center gap-2">
              <FaEnvelope className="text-xl" />
              your.email@example.com
            </a>
          </div>
        </div>
      </div>

      <div className="footerBar">
        <Footer
          options={[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/uses", label: "Uses" },
          ]}
        />
      </div>
    </div>
  );
}
