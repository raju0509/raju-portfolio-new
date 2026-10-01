import { useEffect, useMemo, useState } from "react";
import { FiCloud, FiCode, FiCpu, FiDatabase, FiEye, FiShield } from "react-icons/fi";
import API from "../api/api";

const resumeGroups = [
  { title: "Cloud", icon: FiCloud, tools: ["AWS", "EC2", "VPC", "IAM", "ECS", "EKS", "S3", "Route 53", "Lambda", "RDS", "CloudWatch", "Azure", "Azure VM", "VNet", "AKS", "Azure DevOps", "Entra ID", "Key Vault"] },
  { title: "Containers & Platform", icon: FiCpu, tools: ["Docker", "Kubernetes", "Amazon ECS", "Helm", "ArgoCD"] },
  { title: "IaC & CI/CD", icon: FiCode, tools: ["Terraform", "CloudFormation", "Jenkins", "GitHub Actions", "Git", "GitHub", "Bitbucket"] },
  { title: "Observability", icon: FiEye, tools: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch", "Azure Monitor"] },
  { title: "Security", icon: FiShield, tools: ["IAM", "VPC Isolation", "Least Privilege", "Cloud Security", "Key Management"] },
  { title: "Automation & Data", icon: FiDatabase, tools: ["Python", "Bash", "PostgreSQL", "MySQL", "MongoDB"] },
];

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    API.get("/skills")
      .then((response) => setSkills(Array.isArray(response.data) ? response.data : []))
      .catch((error) => console.error("Skills request failed:", error));
  }, []);

  const visibleTools = useMemo(() => new Set(skills.map((skill) => String(skill).toLowerCase())), [skills]);

  return (
    <section id="skills" className="section-pad skills-section">
      <div className="section-heading container-fluid">
        <span className="section-number">02</span>
        <div><p className="section-eyebrow">Toolbox</p><h2>Technical expertise</h2></div>
      </div>
      <div className="skills-grid container-fluid">
        {resumeGroups.map(({ title, icon: Icon, tools }) => (
          <article className="skill-group" key={title}>
            <div className="skill-group-title"><span><Icon /></span><h3>{title}</h3></div>
            <div className="skill-tags">
              {tools.map((tool) => (
                <span className={visibleTools.has(tool.toLowerCase()) ? "skill-tag skill-tag-active" : "skill-tag"} key={tool}>{tool}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
