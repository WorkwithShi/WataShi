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
    video: "/demos/Login.mp4",
  },
  {
    title: "Admin Authentication",
    icon: <ShieldCheck size={20} />,
    video: "/demos/Admin.mp4",
  },
  {
    title: "Student Dashboard",
    icon: <User size={20} />,
    video: "/demos/StudentDashboard.mp4",
  },
  {
    title: "Faculty Dashboard",
    icon: <GraduationCap size={20} />,
    video: "/demos/FacultyDashboard.mp4",
  },
  {
    title: "Admin Dashboard",
    icon: <Settings size={20} />,
    video: "/demos/AdminDashboardDemo.mp4",
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
                <video controls>
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
