import React from "react";
import { Link } from "react-router-dom";
import {
  LogIn,
  ShieldCheck,
  User,
  GraduationCap,
  Settings,
  ArrowLeft,
} from "lucide-react";
import "./SmartCampusDemo.css";

const sections = [
  {
    title: "Login Flow",
    icon: <LogIn size={20} />,
    video: "https://res.cloudinary.com/dong4ywhx/video/upload/v1753035553/LoginDemo_hksbfh.mp4",
  },
  {
    title: "Admin Authentication",
    icon: <ShieldCheck size={20} />,
    video: "https://res.cloudinary.com/dong4ywhx/video/upload/v1753035555/AdminAuth_rfurst.mp4",
  },
  {
    title: "Student Dashboard",
    icon: <User size={20} />,
    video: "https://res.cloudinary.com/dong4ywhx/video/upload/v1753035550/StudentDemo_qve7up.mp4",
  },
  {
    title: "Faculty Dashboard",
    icon: <GraduationCap size={20} />,
    video: "https://res.cloudinary.com/dong4ywhx/video/upload/v1753035557/FacultyDemo_x5ja3x.mp4",
  },
  {
    title: "Admin Dashboard",
    icon: <Settings size={20} />,
    video: "https://res.cloudinary.com/dong4ywhx/video/upload/v1753035555/AdminDemo_uvqlrr.mp4",
  },
];

const SmartCampusDemo = () => {
  return (
    <div className="demo-page">
      <div className="demo-container">
        <h1 className="demo-title">
          <GraduationCap size={28} /> Smart Campus Management System
        </h1>
        <p className="demo-subtitle">
          A full-stack solution for managing student, faculty, and admin workflows in an institute.
        </p>

        <Link to="/" className="back-link">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>

        <div className="demo-section-list">
          {sections.map((sec, idx) => (
            <div className="demo-section" key={idx}>
              <h2 className="demo-section-title">
                {sec.icon} {sec.title}
              </h2>
              <div className="video-wrapper">
                <video
                  controls
                  preload="auto"
                  width="100%"
                  style={{ borderRadius: "10px", maxHeight: "400px", background: "#000" }}
                >
                  <source src={sec.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartCampusDemo;
