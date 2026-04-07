"use client"
import SectionHeading from "@/components/ui/SectionHeading";
import { SECTION_CLASSES } from "@/lib/constants";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className={SECTION_CLASSES}>
      <SectionHeading title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y:0}}
            viewport={{once: true}}
            transition={{ duration: 0.5, delay: index * 0.1}}
            >
          <ProjectCard key={project.title} project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
