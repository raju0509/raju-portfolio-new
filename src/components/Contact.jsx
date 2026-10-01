import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import API from "../api/api";

function Contact() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    API.get("/profile")
      .then((response) => setProfile(response.data))
      .catch((error) => console.error("Profile request failed:", error));
  }, []);

  return (
    <section id="contact" className="section-pad contact-section">
      <div className="contact-card container-fluid">
        <div>
          <p className="section-eyebrow">06 • Contact</p>
          <h2>Let's build something reliable.</h2>
          <p className="contact-copy">Open to Cloud, DevOps and SRE opportunities where infrastructure automation, reliability and continuous delivery matter.</p>
        </div>
        <div className="contact-details">
          <a href={`mailto:${profile.email || "rajujilla55@gmail.com"}`}><FiMail /><span>{profile.email || "rajujilla55@gmail.com"}</span><FiArrowUpRight /></a>
          <a href={`tel:${profile.phone || "+919347536752"}`}><FiPhone /><span>{profile.phone || "+91 9347536752"}</span><FiArrowUpRight /></a>
          <div><FiMapPin /><span>{profile.location || "Hyderabad, Telangana, India"}</span></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
