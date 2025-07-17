function Project({title, description, link, image}){
    return (
        <div className="project-card">
            <div className="project-media">
                <img src={image} alt={`${title} Preview`}/>
            </div>
        
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="project-hover">
                <button onClick={()=> window.open(link)}>View Demo</button>
            </div>

        </div>
    )
}
export default Project;