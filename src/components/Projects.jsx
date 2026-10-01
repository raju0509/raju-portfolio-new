import { useEffect, useState } from "react";
import { FiArrowUpRight, FiBox, FiDatabase, FiGlobe } from "react-icons/fi";
import API from "../api/api";

const projectMeta = {
  "SAFS": { icon: FiBox, label: "Cloud-native platform", stack: ["AWS", "Docker", "Kubernetes", "Terraform", "PostgreSQL", "NGINX"] },
  "Jaimax Platform": { icon: FiGlobe, label: "Scalable AWS platform", stack: ["AWS", "ECS", "Docker", "Terraform", "MongoDB", "ALB"] },
  "Cross Time Zone Scheduler": { icon: FiDatabase, label: "API & scheduling platform", stack: ["FastAPI", "AWS EC2", "PostgreSQL", "NGINX", "Route 53", "Certbot"] },
};

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects")
      .then((response) => setProjects(Array.isArray(response.data) ? response.data : []))
      .catch((error) => console.error("Projects request failed:", error));
  }, []);

  const fallbackProjects = [
    { title: "SAFS", tech: "AWS, Docker, Kubernetes, Terraform, PostgreSQL, NGINX" },
    { title: "Jaimax Platform", tech: "AWS, ECS, Docker, Terraform, MongoDB" },
    { title: "Cross Time Zone Scheduler", tech: "FastAPI, PostgreSQL, NGINX, AWS EC2" },
  ];

  const items = projects.length ? projects : fallbackProjects;

  return (
    <section id="projects" className="section-pad projects-section">
      <div className="section-heading container-fluid">
        <span className="section-number">04</span>
        <div><p className="section-eyebrow">Selected work</p><h2>Featured projects</h2></div>
      </div>

      <div className="projects-list container-fluid">
        {items.map((project, index) => {
          const meta = projectMeta[project.title] || {};
          const Icon = meta.icon || FiBox;
          const stack = meta.stack || String(project.tech || "").split(",").map((item) => item.trim()).filter(Boolean);
          return (
            <article className="project-card" key={`${project.title}-${index}`}>
              <div className="project-index">0{index + 1}</div>
              <div className="project-icon"><Icon /></div>
              <div className="project-content">
                <span className="project-label">{meta.label || "Cloud & DevOps project"}</span>
                <h3>{project.title}</h3>
                <p>{index === 0 ? "Containerised application platform combining cloud infrastructure, Kubernetes and infrastructure as code." : index === 1 ? "AWS platform focused on scalable infrastructure, load balancing, containers and infrastructure cost optimisation." : "FastAPI scheduling application deployed on AWS with PostgreSQL, NGINX and production web serving."}</p>
                <div className="project-stack">{stack.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </div>
              <a className="project-arrow" href="#contact" aria-label={`Discuss ${project.title}`}><FiArrowUpRight /></a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
