import React from "react";
import "./portfolio.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">Roshini GS</div>
    <ul className="navbar-links">
      {["Home", "About", "Projects", "Skills", "Contact"].map((section) => (
        <li key={section}>
          <a href={`#${section.toLowerCase()}`} className="nav-link">
            {section}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);



const HeroSection = () => (
  <section id="home" className="hero">
    <h1 className="hero-title">Hi, I'm Roshini GS</h1>
    <p className="hero-subtitle">AI Engineer | Problem Solver </p>
    <a href="#projects" className="hero-button">
      View My Work
    </a>
  </section>
);

const AboutSection = () => (
  <section id="about" className="about">
    <h2 className="section-title">About Me</h2>
    <p>
      I am a passionate AI engineer with a love for building innovative
      solutions. I specialize in Artificial Intelligence and Data Science,
      crafting projects that solve real-world problems.
    </p>
  </section>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Assistant",
      description: "An AI chatbot for personal task management and reminders.",
      tools: "Python, NLP, Flask",
    },
    {
      title: "Weather Tracker",
      description: "A real-time weather tracking web app.",
      tools: "React, API, JavaScript",
    },
    {
      title: "AR Alphabets",
      description: "A Unity-based AR project for kids' learning.",
      tools: "Unity, Vuforia, C#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="project-tools">{project.tools}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const SkillsSection = () => (
  <section id="skills" className="skills">
    <h2 className="section-title">Skills</h2>
    <ul className="skills-list">
      {["Python", "React", "Machine Learning", "NLP", "Data Visualization"].map(
        (skill) => (
          <li key={skill} className="skill-item">
            {skill}
          </li>
        )
      )}
    </ul>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="contact">
    <h2 className="section-title">Contact Me</h2>
    <p>Email: gsroshini1205@gmail.com</p>
    <p>Phone: 9843950022</p>
    <div className="contact-links">
      <a
        href="https://www.linkedin.com/in/roshini-gopalakrishnan-825317297"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/23AIML043"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        GitHub
      </a>
    </div>
  </section>
);

const App = () => (
  <div>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </div>
);

export default App;
