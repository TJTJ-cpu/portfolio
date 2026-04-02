import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Vim for the Win",
    description: "Just my own personal Neovim and Vim config",
    contributions:["I cook it mysel"],
    tech: ["Lua", "JSON", "Neovim", "VS Code"],
    image: "/images/projects/vimLogo.jpg", 
    github: "https://github.com/TJTJ-cpu/VimForTheWin",
    live: null,
  },
  {
  title: "F1 Data Analysis",
  description: "A project focused on collecting, cleaning, analyzing, and visualizing Formula One race data using the open-source OpenF1 API.",
  contributions: [
    "Gathered race data using OpenF1 API into Excel",
    "Cleaned missing values, outliers, and inconsistent data",
    "Performed correlation analysis using Pearson, Spearman, and Kendall algorithms",
    "Visualized data insights using Matplotlib"
  ],
  tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "SciPy"],
  image: "/images/projects/f1.jpg",
  github: "https://github.com/TJTJ-cpu/F1DataAnalysis",
  live: null,
  },
  {
  title: "Physics Engine",
  description: "A 3D rigid body physics simulation engine featuring GJK/EPA collision detection, AABB bounding boxes, ray intersection, and unconstrained dynamics, built with C++ and OpenGL.",
  contributions: [
    "Implemented GJK (Gilbert-Johnson-Keerthi) algorithm for convex collision detection",
    "Implemented EPA (Expanding Polytope Algorithm) for penetration depth and collision resolution",
    "Built AABB bounding box system with world-space transformations and ray intersection",
    "Developed rigid body dynamics with gravity, force/torque application, and collision response",
    "Created interactive 3D camera system with free-flight controls and debug visualization",
    "Built ray-casting system for object interaction and intersection testing"
  ],
  tech: ["C++20", "OpenGL", "GLFW", "GLM", "ImGui", "CMake"],
  image: "/images/projects/obj.jpg",
  github: "https://github.com/LuleaUniversityOfTechnology/s0013e-physics-engine-TJTJ-cpu",
  live: null,
  }

];
