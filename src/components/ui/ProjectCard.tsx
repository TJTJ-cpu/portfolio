import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span key={item} className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
