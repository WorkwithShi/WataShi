import { useState } from "react";
import useKonamiCode from "./KonamiCode";
import SecretModal from "./SecretModal";

export default function Bio() {
  const [showModal, setShowModal] = useState(false);
  useKonamiCode(() => setShowModal(true));

  return (
    <section className="section-wrapper" id="about">
      <div className="bio-grid">
        {/* ABOUT */}
        <div className="about-text">
          <p>
            Shi (She/Her) is a creative individual and curious learner with a creative edge, 
            exploring the world of development and design.
            She enjoys working on meaningful interfaces, understanding ideal users mindset, 
            picking up new tools along the way.
            Looking for people who are driven by Creativity to create along with. 
            Currently exploring the Japanese Culture and Language.
          </p>
          <br></br>
          <p>
            Want to know more? Try the secret code <span className="shi-code">S-H-I</span>
          </p>
          {showModal && <SecretModal onClose={() => setShowModal(false)} />}
        </div>

        {/* SKILLS */}
        <div className="skills-grid" id="skills-section">
          <div className="skill-label">Frontend</div>
          <div className="skill-detail">HTML, CSS, JavaScript, React.js, Tailwind CSS, Svelte<sup>1</sup></div>

          <div className="skill-label">Backend</div>
          <div className="skill-detail">Java, Spring Boot<sup>1</sup>, REST APIs,CURD Operations, Node.js<sup>1</sup></div>

          <div className="skill-label">UI/UX</div>
          <div className="skill-detail">Figma, Canva, Color Theory, Responsive Design</div>

          <div className="skill-label">Tools</div>
          <div className="skill-detail">Git & GitHub, VS Code, Postman<sup>1</sup>, Chrome DevTools</div>

          <div className="skill-label">Languages</div>
          <div className="skill-detail">Java, JavaScript, C++<sup>2</sup>, PHP<sup>2</sup></div>

          <div className="skill-label">Soft Skills</div>
          <div className="skill-detail">Teamwork, Adaptability, Creativity<sup>3</sup>, Communication</div>

          <div className="skill-label">Others</div>
          <div className="skill-detail">Linux, MYSQL, Vercel, Japanese<sup>4</sup>, Visual Sense </div>
        </div>

      </div>
    </section>
  );
}
