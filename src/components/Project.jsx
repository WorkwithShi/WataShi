function Project({title, description, link}){
    return (
        <div className = "project">
            <a href = {link} target ="_blank" className = "project-title">
                {title}
            </a>
        <p className ="project-description">{description}</p>
        </div>
    );
}

export default Project;