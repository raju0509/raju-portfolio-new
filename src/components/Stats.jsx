import { useEffect, useState } from "react";
import { FiActivity, FiCloud, FiDollarSign, FiLayers } from "react-icons/fi";
import API from "../api/api";

function Stats() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    API.get("/stats")
      .then((response) => setStats(response.data))
      .catch((error) => console.error("Stats request failed:", error));
  }, []);

  const items = [
    { icon: FiActivity, value: stats.experience || "3+", label: "Years IT & Infrastructure", tone: "blue" },
    { icon: FiCloud, value: "2+", label: "Years Hands-on AWS", tone: "cyan" },
    { icon: FiDollarSign, value: stats.cost_optimization || "40%", label: "Infrastructure Cost Reduction", tone: "green" },
    { icon: FiLayers, value: "3", label: "Featured Production Projects", tone: "purple" },
  ];

  return (
    <section className="stats-section section-pad-sm">
      <div className="stats-grid container-fluid">
        {items.map(({ icon: Icon, value, label, tone }) => (
          <div className={`stat-card stat-${tone}`} key={label}>
            <div className="stat-icon"><Icon /></div>
            <div><strong>{value}</strong><span>{label}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
