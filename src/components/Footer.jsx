import SocialLinks from "./SocialLinks";
import React from "react";
import { Mail } from "lucide-react"; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
      
        <div className="footer-left">
          <h3>Connect:</h3>
          <SocialLinks />
          
        </div>

    
        <div className="footer-middle">
          <ul className="footnote-list">
            <li><sup>1</sup> Beginner</li>
            <li><sup>2</sup> Subjects</li>
            <li><sup>3</sup> No doubt</li>
            <li><sup>4</sup> Conversational</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Up for a collaboration? Drop me a mail</h4>
          <p className="email">
            <Mail size={16} style={{ marginRight: "6px", verticalAlign: "middle" }} />
            <a href="mailto:your@email.com">workwithshi@gmail.com</a>
          </p>
          
        </div>
      </div>
      
    
      <div className="footer-bottom-center">
        © Lines of code and love by{" "}
        <span className="logo">Shi</span>. Inspired by{" "}
        <a href="https://joseph.cv" target="_blank" rel="noopener noreferrer" className="footer-link">
          Joseph Zhang
        </a>
         <p className="last-updated">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

      </div>
    </footer>
  );
}
