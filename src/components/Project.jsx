import { useState } from "react";
import GalleryModal from "./GalleryModal"; 

function Project({ title, description, link, image, embed, tags = [], images = [] }) {

  const [isOpen, setIsOpen] = useState(false);

  const tagColors = {
    Completed: "#60a5fa",
    Deployed: "#38bdf8",
    Ongoing: "#93c5fd",
    Cute: "#7dd3fc",
    Professional: "#3b82f6",
    Frontend: "#0ea5e9",
    Internship: "#0284c7",
    Gallery: "#2563eb",
    "Mini Game": "#1d4ed8",
    Scratch: "#3b82f6",
    Interactive: "#60a5fa",
    Cultural: "#38bdf8",
    "Design Dump": "#93c5fd",
    Aesthetic: "#bfdbfe",
    Productivity: "#60a5fa",
  };

  const isGallery = tags.includes("Gallery");

  return (
    <div className="project-card">
      <div
        className="project-media-wrapper"
        onClick={() => isGallery && setIsOpen(true)}
        style={{ cursor: isGallery ? "pointer" : "default" }}
      >
        <div className="project-media">
          {embed ? (
            <iframe
              src={embed}
              width="100%"
              height="350"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
            ></iframe>
          ) : (
            <img src={image} alt={`${title} Preview`} />
          )}
        </div>

        {!embed && !isGallery && (
          <div className="project-hover">
            <button onClick={() => window.open(link)}>View Demo</button>
          </div>
        )}
      </div>

      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="tag-dot"
              title={tag}
              style={{ backgroundColor: tagColors[tag] || "#60a5fa" }}
            ></span>
          ))}
        </div>
      </div>

{isGallery && isOpen && (
  <GalleryModal
    onClose={() => setIsOpen(false)}
    images={images}
  />
)}


    </div>
  );
}

export default Project;
