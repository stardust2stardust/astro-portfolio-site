// src/data/projects.js
// Shared by the home page ("Selected work") and the projects page.
// Set featured: true to show a project on the home page.
export const projects = [
  {
    title: "Lyrics Finder",
    description: "A web application that allows users to search for song lyrics by artist and title.",
    technologies: ["React", "Tailwind", "API Integration"],
    github: "https://github.com/stardust2stardust/lyrics-app",
    demo: "https://lyrics-app-ivory.vercel.app/",
    featured: true
  },
  {
    title: "Act For Animals Website",
    description: "A website for a non-profit organization providing local information and resources",
    technologies: ["WordPress", "PHP", "CSS", "Elementor Pro", "Figma"],
    demo: "https://actforanimalspgh.org/"
  },
  {
    title: "Local Government Accessibility Audit",
    description: "Accessibility audit of a local government website, including detailed report and recommendations for improvements",
    technologies: ["automated and manual testing", "VPAT", "WCAG 2.1 AA", "HTML/CSS/JS"],
    featured: true
  }
];
