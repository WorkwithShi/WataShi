import { useState } from "react";
import {
  X, GraduationCap, Heart, Leaf, Sparkles, ChevronDown, ChevronUp, Quote,
} from "lucide-react";
import "./SecretModal.css";

export default function SecretModal({ onClose }) {
  const [openSections, setOpenSections] = useState({
    education: false,
    interests: false,
    exploring: false,
    motto: false,
    goals: false,
    hobbies: false,
  });

  const toggleSection = (section) => {
    const updated = {
      education: false,
      interests: false,
      exploring: false,
      motto: false,
      hobbies: false,
      goals: false,
    };
    updated[section] = !openSections[section];
    return setOpenSections(updated);
  };

  return (
    <div className="modal-overlay">
      <div className="secret-modal">
        <h2 className="modal-title">More About Shi</h2>

        <div className="modal-info">
          {/* Education */}
          <div className="detail-item">
            <div className="item-header" onClick={() => toggleSection("education")}>
              <GraduationCap size={18} className="icon" />
              <h3>Education</h3>
              {openSections.education ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {openSections.education && (
                <p className="item-content">
                    B.Tech · CSE · 3rd Year<br />
                    Uttaranchal Institute of Technology, India<br />
                    CGPA: 9.04 · Grad: 2027
                </p>

            )}
          </div>

          {/* Interests */}
          <div className="detail-item">
            <div className="item-header" onClick={() => toggleSection("interests")}>
              <Heart size={18} className="icon" />
              <h3>Interests</h3>
              {openSections.interests ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {openSections.interests && (
              <p className="item-content">Japanese Language and Culture, UI Design, Kawaii Projects</p>
            )}
          </div>

          {/* Currently Exploring */}
          <div className="detail-item">
            <div className="item-header" onClick={() => toggleSection("exploring")}>
              <Leaf size={18} className="icon" />
              <h3>Currently Exploring</h3>
              {openSections.exploring ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {openSections.exploring && (
              <p className="item-content">
                Spring Boot, React Animations, Svelte, Japanese UI trends
              </p>
            )}
          </div>
            {/* Future Goals */}
            <div className="detail-item">
            <div className="item-header" onClick={() => toggleSection("goals")}>
                <Sparkles size={18} className="icon" />
                <h3>Future Goals</h3>
                {openSections.goals ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {openSections.goals && (
                <p className="item-content">
                Blend creativity with technology ·<br /> Work in Japan someday 🇯🇵 ·<br />
                Keep building projects that matter (or are just cute 🌸) ·
                </p>
            )}
            </div>
            {/* Hobbies */}
            <div className="detail-item">
            <div className="item-header" onClick={() => toggleSection("hobbies")}>
                <Heart size={18} className="icon" />
                <h3>Hobbies</h3>
                {openSections.hobbies ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {openSections.hobbies && (
                <p className="item-content">
                Cooking, Buying cute things, Drinking Cold Coffee, Asking people their fav 四字熟語,etc.
                </p>
            )}
            </div>


          {/* Life Motto */}
          <div className="detail-item">
            <div className="item-header" onClick={() => toggleSection("motto")}>
              <Quote size={18} className="icon" />
              <h3>Life Motto</h3>
              {openSections.motto ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {openSections.motto && (
              <p className="item-content">私たちは同じ空を見ている。<br></br> We are looking at the same sky</p>
            )}
          </div>
        </div>

      
        <button className="close-btn bottom-close" onClick={onClose} aria-label="Close">
          <X size={22} className="text-gray-300 hover:text-red-500 transition" />
        </button>
      </div>
    </div>
  );
}
