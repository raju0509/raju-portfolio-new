```jsx
import React from "react";
import "./Hero.css";

import profileImage from "../assets/profile.png";
import resumeFile from "../assets/Raju_Jilla_Devops.pdf";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Glow */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="hero-content">

          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="terminal-icon">&gt;_</span>

            <span>Infrastructure</span>
            <span className="eyebrow-dot">•</span>

            <span>Automation</span>
            <span className="eyebrow-dot">•</span>

            <span>Reliability</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            <span>Building</span>
            <span>reliable</span>
            <span className="hero-highlight">cloud</span>
            <span className="hero-highlight">
              infrastructure.
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Cloud & DevOps Engineer focused on AWS infrastructure,
            CI/CD automation, containers, Kubernetes and platform
            reliability.
          </p>

          {/* Buttons */}
          <div className="hero-actions">

            <a
              href={resumeFile}
              className="hero-btn hero-btn-primary"
              download="Raju_Jilla_DevOps_Resume.pdf"
            >
              <span className="btn-icon">↓</span>
              Download Resume
            </a>

            <a
              href="#projects"
              className="hero-btn hero-btn-secondary"
            >
              View My Work
              <span className="btn-arrow">↗</span>
            </a>

          </div>

          {/* Technologies */}
          <div className="hero-tech">
            <span>AWS</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>Terraform</span>
            <span>CI/CD</span>
          </div>

        </div>

        {/* =========================
            RIGHT VISUAL
        ========================== */}
        <div className="hero-visual">

          {/* Orbit Rings */}
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>

          {/* Cloud & DevOps Status */}
          <div className="hero-status">
            <span className="status-dot"></span>
            <span>Cloud & DevOps</span>
          </div>

          {/* Profile Image */}
          <div className="hero-image-wrapper">

            <div className="hero-image-glow"></div>

            <img
              src={profileImage}
              alt="Raju Jilla - Cloud & DevOps Engineer"
              className="hero-image"
            />

          </div>

          {/* AWS Infrastructure Card */}
          <div className="hero-card hero-card-top">

            <div className="hero-card-icon">
              &gt;_
            </div>

            <div className="hero-card-content">
              <strong>AWS Infrastructure</strong>
              <small>Terraform • ECS • EC2</small>
            </div>

          </div>

          {/* Cost Reduction Card */}
          <div className="hero-card hero-card-bottom">

            <span className="hero-card-number">
              40%
            </span>

            <div className="hero-card-content">
              <strong>Cost reduction</strong>
              <small>Architecture optimisation</small>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
```
