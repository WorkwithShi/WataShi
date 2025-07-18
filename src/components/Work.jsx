import Project from "./Project";

const projects = [
  {
    title: "RepairServiceWale.com",
    description: "A fully-functional website made to scale a real-world service business. Built solo and deployed live.",
    link: "https://repairservicewale.com",
    image: "images/repairservicewale.png",
    tags: ["Completed", "Deployed", "Professional"]
  },
  {
    title: "Smart Campus Management System",
    description: "A large-scale frontend project for my internship. 75%+ complete with UI modifications beyond original designs.",
    link:  "/smart-campus-demo",
    image: "images/CampusCore.png",
    tags: ["Ongoing", "Internship", "Frontend"]
  },
  {
    title: "Koiro",
    description: "A personal site about Japanese culture and aesthetic, from my perspective. Still a work in progress.",
    link: "https://koiro-ten.vercel.app/",
    image: "images/KoiroShi.png",
    tags: ["Ongoing", "Aesthetic", "Cultural"]
  },
  {
    title: "Match-a-shi",
    description: "A fun mini-game where you match tiles. Deployed and playable online.",
    link: "https://match-a-shi.vercel.app/",
    image: "images/matchashi.png",
    tags: ["Cute", "Deployed", "Game"]
  },
  {
    title: "BubbleDo",
    description: "A floating to-do app where each task is a bubble you can pop. Installable via browser.",
    link: "https://bubble-do.vercel.app/",
    image: "images/BubbleDo.png",
    tags: ["Cute", "Deployed", "Productivity"]
  },
  {
    title: "Shibox",
    description: "A simple riddle-based interactive mini game. Pick the right chest and solve!",
    link: "https://shibox.vercel.app/",
    image: "images/ShiBox.png",
    tags: ["Game", "Cute", "Interactive"]
  },
  {
    title: "Shi-no-sakura",
    description: "Plant a flower of gratitude (message) in your virtual garden. Light and meaningful project.",
    link: "https://shi-no-sakura.vercel.app/",
    image: "images/ShinoSakura.png",
    tags: ["Deployed", "Cute", "Mini Project"]
  },
  {
  title: "RPS - Scratch Game",
  description: "A cute rock-paper-scissors game I made on Scratch years ago. Still close to my heart.",
  link: "https://scratch.mit.edu/projects/872224338/",
  embed: "https://scratch.mit.edu/projects/872224338/embed",
  tags: ["Scratch", "Cute", "Mini Game"]
},

  {
  title: "Mini UI Gallery",
  description: "A simple gallery page showcasing my rough UI ideas, doodles, and creative inspirations.",
  link: "#",
  image: "gallery/ShiGallery.png",
  tags: ["Gallery", "Ongoing", "Design Dump"],
  images: [
    "gallery/R2.jpeg",
    "gallery/N2.jpeg",
    "gallery/A2.jpeg",
    "gallery/N1.jpeg",
    "gallery/N5.jpeg",
    "gallery/A4.jpeg",
    "gallery/R1.jpeg",
    "gallery/N6.jpeg",
    "gallery/A5.jpeg",
    "gallery/N7.jpeg",
    "gallery/R4.jpeg",
    "gallery/N4.jpeg",
    "gallery/A8.jpeg",
    "gallery/N9.jpeg",
    "gallery/R6.jpeg",
    "gallery/A7.jpeg",
    "gallery/N3.jpeg",
    "gallery/A1.jpeg",
    "gallery/N10.jpeg",
    "gallery/A6.jpeg",

  ]
},


];

function Work() {
  return (
    <div className="work-section">
      <h2 className="work-title">Selected Work</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project
  key={index}
  title={project.title}
  description={project.description}
  link={project.link}
  image={project.image}
  embed={project.embed}
  tags={project.tags}
  images={project.images} // 👈 This is missing!
/>

        ))}
      </div>
    </div>
  );
}

export default Work;
