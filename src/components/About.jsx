import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMapPin, FiMail, FiBriefcase } from "react-icons/fi";
import API from "../api/api";

function About() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    API.get("/profile")
      .then((response) => setProfile(response.data))
      .catch((error) => console.error("Profile request failed:", error));
  }, []);

  return (
    <section id="about" className="section-pad">
      <div className="section-heading container-fluid">
        <span className="section-number">01</span>
        <div><p className="section-eyebrow">Profile</p><h2>About me</h2></div>
      </div>

      <div className="about-grid container-fluid">
        <div className="about-lead">
          <p className="large-copy">
            I build and automate cloud infrastructure with a focus on <strong>reliability, security and repeatable delivery.</strong>
          </p>
          <p>
            {profile.summary ||
              "Cloud & DevOps Engineer with 3+ years of IT and infrastructure experience, including 2+ years of hands-on AWS experience. Experienced with CI/CD, Docker, Kubernetes, Terraform, CloudFormation, monitoring and incident response."}
          </p>
          <a className="text-link" href="#experience">View experience <FiArrowUpRight /></a>
        </div>

        <div className="about-details">
          <div className="detail-row"><FiBriefcase /><div><span>Current focus</span><strong>Cloud Infrastructure &amp; DevOps</strong></div></div>
          <div className="detail-row"><FiMapPin /><div><span>Based in</span><strong>{profile.location || "Hyderabad, Telangana, India"}</strong></div></div>
          <div className="detail-row"><FiMail /><div><span>Email</span><strong>{profile.email || "Available via contact section"}</strong></div></div>
        </div>
      </div>
    </section>
  );
}

export default About;
