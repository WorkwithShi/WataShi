function Project({title, description, link}){
    return (
        <div className = "project hover:bg-gray-800 p-4 rounded-lg transition-colors">
            <a href = {link} target ="_blank" className = "project-title hover:text-accent">
                {title}
            </a>
        <p className ="project-description">{description}</p>
        </div>
    );
}

export default Project;