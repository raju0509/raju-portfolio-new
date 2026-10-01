import { FiArrowUpRight, FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container-fluid">
        <div><strong>RAJU JILLA</strong><span>Cloud &amp; DevOps Engineer</span></div>
        <div className="footer-stack">AWS • Kubernetes • Terraform • CI/CD • Platform Reliability</div>
        <a href="https://www.linkedin.com/in/raju-jilla-926071262/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a>
      </div>
      <div className="footer-bottom container-fluid"><span>© {new Date().getFullYear()} Raju Jilla</span><span>Built with React • Vite</span></div>
    </footer>
  );
}

export default Footer;
