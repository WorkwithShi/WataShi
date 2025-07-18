import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "./GalleryModal.css";

function GalleryModal({ images, onClose }) {
  const [index, setIndex] = useState(0);

  const prevImage = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Close on Esc key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="gallery-backdrop" onClick={onClose}>
      <div className="gallery-container" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-close" onClick={onClose}>
          <X size={32} />
        </button>

        <button className="gallery-arrow left" onClick={prevImage}>
          <ChevronLeft size={32} />
        </button>

        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="gallery-image"
        />

        <button className="gallery-arrow right" onClick={nextImage}>
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}

export default GalleryModal;
