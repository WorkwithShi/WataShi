import Project from "./Project";

const projects = [
    {
        title: "Koiro",
        description: "Dye the wind with me.",
        link: "#",
        image: "/src/images/1p.png"
    },
    {
        title: "Project 2",
        description: "Under Construction",
        link: "#",
        image: "/src/images/2p.jpeg"
    },
    {
        title: "Project 3",
        description: "Coming soon",
        link: "#",
        image: "/src/images/3p.jpeg"
    },
    {
        title: "Project 4",
        description: "Coming soon",
        link: "#",
        image: "/src/images/4p.jpeg"
    },

];

function Work() {
    return (
        <div className = "work-section">
            <h2 className = "work-title">Selected Work</h2>
            <div className="project-grid">
             {projects.map((project, index)=>(
                <Project
                    key ={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    image={project.image}
                />
            ))}
            </div>
           
        </div>
        
        
    );
}

export default Work;