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
    report: null,
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
  report:"/documents/f1.pdf"
,
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
  report: null,
  },
  {
  title: "Crumb",
  description: "A 3D space exploration game built in Unity where players pilot a spaceship, collect resources, fight wardens, and upgrade their ship to escape through a hyperdrive system. Developed collaboratively in a team of 11.",
  contributions: [
    "Built the in-game shop and upgrade system with persistent currency and purchase logic",
    "Implemented game timer, death scene, and win/lose condition flows",
    "Developed minimap system with dynamic color updates and sizing",
    "Created gun base controller, bullet mechanics, and muzzle VFX",
    "Designed split-screen controls, pause menu, and HUD UI",
    "Programmed Warden enemy AI with chase phases and pushback mechanics",
    "Developed camera systems including a cinematic free-flight camera",
    "Built the hyperdrive component collection and escape mechanic"
  ],
  tech: ["Unity", "C#", "Blender"],
  image: "/images/projects/crumb.png",
  github: "https://simon-da-silva.itch.io/crumb",
  live: "https://youtu.be/4JanuyntZRk",
  report: null,
},
{
  title: "Desmodus",
  description: "A multiplayer first-person horror vampire game built in Unreal Engine over 2 months with a team of 6 programmers and 13 artists, featuring LAN-based multiplayer gameplay.",
  contributions: [
    "Participated in daily standups and weekly playtesting sessions with iterative scrum planning",
    "Practiced ownership-driven development — every bug, no matter how small, was assigned to a dedicated owner",
    "Helped implement features informed by external playtesting, such as automatic reload on empty fire",
    "Worked with Unreal Engine AngelScript, translating C++ solutions into AngelScript",
    "Used a physical scrum board to drive micro-conversations and keep the team aligned"
  ],
  tech: ["Unreal Engine", "AngelScript", "C++"],
  image: "/images/projects/desmodus.jpg",
  github: null,
  live: "https://www.youtube.com/watch?v=l3a2JYX68eg",
  report: null,
},
{
  title: "Multiplayer Space Game",
  description: "A networked multiplayer space combat game built on top of a provided university game engine (S0012E). Players pilot spaceships, dodge asteroids, and shoot lasers at each other in a 3D asteroid field using client-server architecture.",
  contributions: [
    "Implemented client-server networking using ENet with host-authoritative game logic",
    "Designed and serialized network messages using FlatBuffers (ship updates, laser spawn/destroy, ship spawn/destroy, round-trip ping)",
    "Built dead reckoning system with velocity blending and position extrapolation for smooth remote player movement",
    "Developed networked laser firing, collision detection via raycasting, and ship destruction/respawn mechanics",
    "Implemented round-trip time measurement for latency tracking between peers",
    "Created ship-to-ship and ship-to-asteroid collision using convex hull raycasting with collision masks"
  ],
  tech: ["C++", "OpenGL", "ENet", "FlatBuffers", "GLM", "ImGui", "CMake"],
  image: "/images/projects/spacegame.png",
  github: "https://github.com/LuleaUniversityOfTechnology/s0012e-multiplayer-game-TJTJ-cpu",
  live: null,
  report: null,
},
{
  title: "MiniGolf",
  description: "A 3D mini-golf game built with C++ and OpenGL ES 3 for Raspberry Pi 4, featuring physics-based ball mechanics, multiple camera perspectives, auto-tiled maps, and gamepad controls. Developed in a team of 2.",
  contributions: [
    "Implemented ball physics with gravity, friction, and raycast-based continuous collision detection for walls and floors",
    "Built golf club swing mechanics with directional force based on club-to-ball distance",
    "Created dual camera system with smooth top-down and third-person orbit views with zoom controls",
    "Integrated gamepad input for club positioning, camera control, and game interaction",
    "Developed win condition detection, score tracking, and persistent highscore system with file I/O",
    "Ported and debugged the game to run on Raspberry Pi 4 with OpenGL ES 3"
  ],
  tech: ["C++", "OpenGL ES 3", "GLFW", "GLM", "NanoVG", "CMake"],
  image: "/images/projects/minigolf.png",
  github: "https://github.com/TJTJ-cpu/MiniGolf",
  live: null,
  report: null,
},
{
  title: "Trayracer",
  description: "A CPU raytracer profiled and optimized for performance, featuring BVH acceleration, multi-threaded rendering, and PBR materials, built as a university optimization assignment.",
  contributions: [
    "Built a CLI benchmark mode with configurable resolution, rays per pixel, bounce depth, and sphere count",
    "Implemented BVH (Bounding Volume Hierarchy) with Surface Area Heuristic for accelerated ray-scene intersection",
    "Developed a multi-threaded rendering pipeline using a thread pool with chunk-based work distribution",
    "Profiled critical code paths using Visual Studio, AMD µProf/Intel VTune, and Nvidia Nsight Systems",
    "Optimized memory access patterns, reduced heap allocations, and improved arithmetic in intersection tests",
    "Supported Lambertian, Conductor, and Dielectric PBR materials with configurable roughness"
  ],
  tech: ["C++", "OpenGL", "GLFW", "CMake", "stb_image"],
  image: "/images/projects/trayracer.png",
  github: "https://github.com/flindahl/trayracer",
  live: null,
  report:"/documents/optimization.pdf"
},
{
  title: "OpenGL",
  description: "A CPU raytracer profiled and optimized for performance, featuring BVH acceleration, multi-threaded rendering, and PBR materials, built as a university optimization assignment.",
  contributions: [
    "Built a CLI benchmark mode with configurable resolution, rays per pixel, bounce depth, and sphere count",
    "Implemented BVH (Bounding Volume Hierarchy) with Surface Area Heuristic for accelerated ray-scene intersection",
    "Developed a multi-threaded rendering pipeline using a thread pool with chunk-based work distribution",
    "Profiled critical code paths using Visual Studio, AMD µProf/Intel VTune, and Nvidia Nsight Systems",
    "Optimized memory access patterns, reduced heap allocations, and improved arithmetic in intersection tests",
    "Supported Lambertian, Conductor, and Dielectric PBR materials with configurable roughness"
  ],
  tech: ["C++", "OpenGL", "GLFW", "CMake", "stb_image"],
  image: "/images/projects/duck.png",
  github: "https://github.com/flindahl/trayracer",
  live: null,
  report:"/documents/optimization.pdf"
}





];
