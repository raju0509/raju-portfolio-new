import { useEffect, useState } from "react";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import API from "../api/api";

const responsibilities = [
  "AWS infrastructure provisioning and operations",
  "CI/CD automation and deployment workflows",
  "Docker and containerised workloads on Amazon ECS",
  "Kubernetes platform operations and delivery",
  "Terraform and CloudFormation infrastructure as code",
  "Monitoring, incident response and root-cause analysis",
  "IAM, VPC isolation and cloud security hardening",
];

function Experience() {
  const [exp, setExp] = useState({});

  useEffect(() => {
    API.get("/experience")
      .then((response) => setExp(response.data))
      .catch((error) => console.error("Experience request failed:", error));
  }, []);

  return (
    <section id="experience" className="section-pad">
      <div className="section-heading container-fluid">
        <span className="section-number">03</span>
        <div><p className="section-eyebrow">Career</p><h2>Experience</h2></div>
      </div>

      <div className="experience-card container-fluid">
        <div className="experience-top">
          <div>
            <span className="experience-label">Professional experience</span>
            <h3>{exp.company || "SP Software Pvt Ltd"}</h3>
            <p className="experience-role">{exp.designation || "Cloud & DevOps Engineer"}</p>
          </div>
          <span className="experience-date">{exp.duration || "July 2024 — Present"}</span>
        </div>

        <div className="experience-body">
          <p>
            Working across cloud infrastructure, delivery automation and platform reliability, with hands-on ownership of AWS environments and DevOps tooling.
          </p>
          <div className="responsibility-grid">
            {responsibilities.map((item) => <div key={item}><FiCheckCircle /> <span>{item}</span></div>)}
          </div>
        </div>

        <a className="text-link" href="#projects">See related projects <FiArrowUpRight /></a>
      </div>
    </section>
  );
}

export default Experience;
