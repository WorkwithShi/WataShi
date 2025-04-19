import Project from "./Project";

const projects = [
    {
        title: "Project 1",
        description: "A website about Japan in my mind.",
        link: "#"
    },
    {
        title: "Project 2",
        description: "Pocket Soundboard using Flutter.",
        link: "#"
    },

];

function Work() {
    return (
        <div className = "work-section space-y-8">
            <h2 className = "work-title text-x1 font-semibold">Selected Work</h2>
            {projects.map((project, index)=>(
                <Project
                    key ={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                />
            ))}
        </div>
    );
}

export default Work;