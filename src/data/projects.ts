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
}
];
