"use client";
import ImageCard from "./ImageCard";
import { ExternalLink } from "lucide-react";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <ImageCard title={project.title} src={project.image} alt={project.title}>
      <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
      <p className="text-gray-400 mb-4">{project.description}</p>

      <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
        Contributions
      </h4>
      <ul className="list-disc list-inside text-gray-400 space-y-1 mb-4">
        {project.contributions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((item) => (
          <span key={item} className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
            <ExternalLink size={16} /> GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
        {project.report && (
          <a href={project.report} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
            <ExternalLink size={16} /> View Report
          </a>
        )}
      </div>
    </ImageCard>
  );
}
