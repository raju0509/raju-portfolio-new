import { FiArrowRight, FiBox, FiCloud, FiCode, FiDatabase, FiGitBranch, FiMonitor, FiServer } from "react-icons/fi";

const nodes = [
  ["Developer", FiCode],
  ["GitHub", FiGitBranch],
  ["CI/CD", FiGitBranch],
  ["Docker", FiBox],
  ["Amazon ECR", FiBox],
  ["ECS / Kubernetes", FiCloud],
  ["Application", FiServer],
  ["PostgreSQL", FiDatabase],
  ["Monitoring", FiMonitor],
];

function Architecture() {
  return (
    <section className="section-pad architecture-section">
      <div className="section-heading container-fluid">
        <span className="section-number">05</span>
        <div><p className="section-eyebrow">How I work</p><h2>DevOps delivery flow</h2></div>
      </div>

      <div className="architecture-card container-fluid">
        <div className="architecture-intro">
          <p className="large-copy">From commit to <span>reliable production.</span></p>
          <p>A simplified view of the delivery path: source control and CI/CD produce container images, workloads run on cloud platforms, application data lives in PostgreSQL, and observability closes the feedback loop.</p>
        </div>
        <div className="architecture-flow">
          {nodes.map(([label, Icon], index) => (
            <div className="architecture-node-wrap" key={label}>
              <div className="architecture-node"><Icon /><span>{label}</span></div>
              {index < nodes.length - 1 && <FiArrowRight className="architecture-arrow" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Architecture;
