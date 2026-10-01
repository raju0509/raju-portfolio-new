import "./App.css";
import profileImage from "./assets/profile.png";

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  {
    title: "Cloud & Infrastructure",
    icon: "☁",
    items: [
      "AWS",
      "EC2",
      "VPC",
      "IAM",
      "ECS",
      "EKS",
      "S3",
      "Route 53",
      "Lambda",
      "RDS",
      "CloudWatch",
      "Azure",
      "Azure VM",
      "VNet",
      "AKS",
      "Azure DevOps",
      "Entra ID",
      "Key Vault",
    ],
  },

  {
    title: "Containers & Platform",
    icon: "▣",
    items: [
      "Docker",
      "Kubernetes",
      "Amazon ECS",
      "Helm",
      "ArgoCD",
    ],
  },

  {
    title: "IaC & CI/CD",
    icon: "</>",
    items: [
      "Terraform",
      "CloudFormation",
      "Jenkins",
      "GitHub Actions",
      "Git",
      "GitHub",
      "Bitbucket",
    ],
  },

  {
    title: "Observability",
    icon: "◉",
    items: [
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "CloudWatch",
      "Azure Monitor",
    ],
  },

  {
    title: "Security",
    icon: "◇",
    items: [
      "IAM",
      "VPC Isolation",
      "Least Privilege",
      "Cloud Security",
      "Key Management",
    ],
  },

  {
    title: "Automation & Data",
    icon: "▤",
    items: [
      "Python",
      "Bash",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    type: "CLOUD-NATIVE PLATFORM",
    title: "SAFS",
    description:
      "Containerised application platform combining cloud infrastructure, Kubernetes and infrastructure as code.",
    tags: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "PostgreSQL",
      "NGINX",
    ],
  },

  {
    number: "02",
    type: "SCALABLE AWS PLATFORM",
    title: "Jaimax Platform",
    description:
      "AWS platform focused on scalable infrastructure, load balancing, containers and infrastructure cost optimisation.",
    tags: [
      "AWS",
      "ECS",
      "Docker",
      "Terraform",
      "MongoDB",
      "ALB",
    ],
  },

  {
    number: "03",
    type: "DEVOPS AUTOMATION",
    title: "Cross Time Zone Scheduler",
    description:
      "FastAPI-based application deployed on AWS with PostgreSQL, NGINX and production-oriented deployment configuration.",
    tags: [
      "FastAPI",
      "PostgreSQL",
      "AWS EC2",
      "NGINX",
      "Gunicorn",
      "Uvicorn",
      "Route 53",
      "Certbot",
      "Bash",
    ],
  },
];

/* =========================================================
   DEVOPS FLOW
========================================================= */

const flow = [
  "Developer",
  "GitHub",
  "CI/CD",
  "Docker",
  "Amazon ECR",
  "ECS / Kubernetes",
  "Application",
  "Monitoring",
];

/* =========================================================
   MAIN APP
========================================================= */

function App() {
  return (
    <div className="portfolio">

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">

        <a href="#home" className="brand">
          <div className="brand-logo">
            <span>⌁</span>
          </div>

          <span>Raju Jilla</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Connect
          <span>↗</span>
        </a>

      </header>

      <main>

        {/* ===================================================
            HERO
        =================================================== */}

        <section className="hero section" id="home">

          <div className="hero-grid">

            <div className="hero-content">

              <div className="eyebrow">
                <span className="terminal-mark">
                  &gt;_
                </span>

                Infrastructure <i>•</i> Automation <i>•</i> Reliability
              </div>

              <h1>
                Building
                <br />
                reliable
                <br />

                <span className="gradient-text">
                  cloud
                </span>

                <br />

                <span className="gradient-text">
                  infrastructure.
                </span>
              </h1>

              <p className="hero-description">
                Cloud & DevOps Engineer focused on AWS infrastructure,
                CI/CD automation, containers, Kubernetes and platform
                reliability.
              </p>

              <div className="hero-actions">

                <a
                  href="/Raju_Jilla_Devops.pdf"
                  className="primary-button"
                  download
                >
                  ↓ &nbsp; Download Resume
                </a>

                <a
                  href="#projects"
                  className="secondary-button"
                >
                  View My Work <span>↘</span>
                </a>

              </div>

              <div className="hero-metrics">

                <div>
                  <strong>3+</strong>
                  <span>Years IT Experience</span>
                </div>

                <div>
                  <strong>2+</strong>
                  <span>Years Hands-on AWS</span>
                </div>

                <div>
                  <strong>40%</strong>
                  <span>Cost Reduction</span>
                </div>

              </div>

            </div>


            {/* HERO VISUAL */}

            <div className="hero-visual">

              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <div className="profile-ring">

                <img
                  src={profileImage}
                  alt="Raju Jilla - Cloud & DevOps Engineer"
                />

              </div>

              <div className="floating-card infrastructure-card">

                <div className="floating-icon">
                  &gt;_
                </div>

                <div>
                  <strong>
                    AWS Infrastructure
                  </strong>

                  <small>
                    Terraform • ECS • EC2
                  </small>
                </div>

              </div>

              <div className="floating-card cost-card">

                <strong>
                  40%
                </strong>

                <div>
                  <b>
                    Cost reduction
                  </b>

                  <small>
                    Architecture optimisation
                  </small>
                </div>

              </div>

              <div className="cloud-pill">
                <span>●</span>
                Cloud & DevOps
              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            CORE STACK
        =================================================== */}

        <section className="stack-strip">

          <span>CORE STACK</span>

          <b>AWS</b>
          <b>DOCKER</b>
          <b>KUBERNETES</b>
          <b>TERRAFORM</b>
          <b>CI/CD</b>
          <b>CLOUDWATCH</b>

        </section>


        {/* ===================================================
            ABOUT
        =================================================== */}

        <section
          className="section about-section"
          id="about"
        >

          <SectionHeading
            number="01"
            label="PROFILE"
            title="About me"
          />

          <div className="about-grid">

            <div>

              <h2>
                I build and automate cloud infrastructure
                with a focus on{" "}
                <span>
                  reliability, security and repeatable delivery.
                </span>
              </h2>

              <p>
                Cloud & DevOps Engineer with 3+ years of IT and
                infrastructure experience, including 2+ years of
                hands-on AWS experience. Experienced with CI/CD,
                Docker, Kubernetes, Terraform, CloudFormation,
                monitoring and incident response.
              </p>

              <a
                href="#experience"
                className="text-link"
              >
                View experience ↗
              </a>

            </div>


            <div className="about-details">

              <Detail
                icon="▣"
                title="CURRENT FOCUS"
              >
                Cloud Infrastructure & DevOps
              </Detail>

              <Detail
                icon="⌖"
                title="BASED IN"
              >
                Hyderabad, Telangana, India
              </Detail>

              <Detail
                icon="✉"
                title="EMAIL"
              >
                Available via contact section
              </Detail>

            </div>

          </div>

        </section>


        {/* ===================================================
            SKILLS
        =================================================== */}

        <section
          className="section skills-section"
          id="skills"
        >

          <SectionHeading
            number="02"
            label="TOOLBOX"
            title="Technical expertise"
          />

          <div className="skills-grid">

            {skills.map((skill) => (

              <div
                className="skill-card"
                key={skill.title}
              >

                <div className="skill-heading">

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <h3>
                    {skill.title}
                  </h3>

                </div>

                <div className="skill-tags">

                  {skill.items.map((item) => (

                    <span key={item}>
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ===================================================
            EXPERIENCE
        =================================================== */}

        <section
          className="section experience-section"
          id="experience"
        >

          <SectionHeading
            number="03"
            label="CAREER"
            title="Experience"
          />


          {/* SREE DURGA PHARMA */}

          <div className="experience-card">

            <div className="experience-top">

              <div>

                <span className="small-label">
                  PROFESSIONAL EXPERIENCE
                </span>

                <h2>
                  Sree Durga Pharma
                </h2>

                <h3>
                  System Administrator
                </h3>

                <span className="experience-location">
                  Hyderabad, India
                </span>

              </div>

              <span className="date">
                Apr 2023 — Apr 2024
              </span>

            </div>

            <div className="experience-divider" />

            <p className="experience-summary">
              Maintained and supported staff IT systems,
              providing day-to-day technical support across
              desktop systems, software, hardware and basic
              network connectivity.
            </p>

            <div className="experience-list">

              <ExperienceItem>
                Maintained and supported staff desktop systems,
                including preventive maintenance, health checks
                and troubleshooting for computers and peripherals.
              </ExperienceItem>

              <ExperienceItem>
                Installed, configured and updated operating
                systems, software applications and utilities.
              </ExperienceItem>

              <ExperienceItem>
                Diagnosed and resolved hardware, software and
                basic network connectivity issues.
              </ExperienceItem>

              <ExperienceItem>
                Provided day-to-day technical support to employees,
                including system configuration and access-related
                activities.
              </ExperienceItem>

              <ExperienceItem>
                Maintained system documentation and tracked
                recurring technical issues.
              </ExperienceItem>

              <ExperienceItem>
                Coordinated with technical teams and vendors
                for escalation and resolution.
              </ExperienceItem>

            </div>

          </div>


          {/* SP SOFTWARE */}

          <div className="experience-card">

            <div className="experience-top">

              <div>

                <span className="small-label">
                  PROFESSIONAL EXPERIENCE
                </span>

                <h2>
                  SP Software Pvt Ltd
                </h2>

                <h3>
                  Cloud & DevOps Engineer
                </h3>

                <span className="experience-location">
                  Hyderabad, India
                </span>

              </div>

              <span className="date">
                July 2024 — Present
              </span>

            </div>

            <div className="experience-divider" />

            <p className="experience-summary">
              Working across cloud infrastructure, delivery
              automation and platform reliability, with hands-on
              ownership of AWS environments and DevOps tooling.
            </p>

            <div className="experience-list">

              <ExperienceItem>
                AWS infrastructure provisioning and operations
              </ExperienceItem>

              <ExperienceItem>
                CI/CD automation and deployment workflows
              </ExperienceItem>

              <ExperienceItem>
                Docker and containerised workloads on Amazon ECS
              </ExperienceItem>

              <ExperienceItem>
                Kubernetes platform operations and delivery
              </ExperienceItem>

              <ExperienceItem>
                Terraform and CloudFormation infrastructure as code
              </ExperienceItem>

              <ExperienceItem>
                Monitoring, incident response and root-cause analysis
              </ExperienceItem>

              <ExperienceItem>
                IAM least-privilege and VPC security practices
              </ExperienceItem>

              <ExperienceItem>
                Infrastructure optimisation and cost reduction
              </ExperienceItem>

            </div>

          </div>

        </section>


        {/* ===================================================
            PROJECTS
        =================================================== */}

        <section
          className="section projects-section"
          id="projects"
        >

          <SectionHeading
            number="04"
            label="SELECTED WORK"
            title="Featured projects"
          />

          <div className="projects-list">

            {projects.map((project) => (

              <div
                className="project-card"
                key={project.number}
              >

                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-icon">
                  ◇
                </div>

                <div className="project-content">

                  <span className="project-type">
                    {project.type}
                  </span>

                  <h2>
                    {project.title}
                  </h2>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tags">

                    {project.tags.map((tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    ))}

                  </div>

                </div>

                <button
                  className="project-arrow"
                  type="button"
                  aria-label={`View ${project.title}`}
                >
                  ↗
                </button>

              </div>

            ))}

          </div>

        </section>


        {/* ===================================================
            DEVOPS FLOW
        =================================================== */}

        <section className="section flow-section">

          <SectionHeading
            number="05"
            label="HOW I WORK"
            title="DevOps delivery flow"
          />

          <div className="flow-card">

            <div className="flow-intro">

              <h2>
                From commit to{" "}
                <span>
                  reliable production.
                </span>
              </h2>

              <p>
                A simplified delivery path where source control
                and CI/CD produce container images, workloads run
                on cloud platforms, application data is managed
                separately, and observability closes the feedback
                loop.
              </p>

            </div>

            <div className="flow-line">

              {flow.map((item, index) => (

                <div
                  className="flow-item-wrapper"
                  key={item}
                >

                  <div className="flow-item">

                    <div className="flow-icon">

                      {index === 0
                        ? "</>"
                        : index === 1
                        ? "⑂"
                        : index === 2
                        ? "⚡"
                        : index === 3
                        ? "▣"
                        : index === 4
                        ? "◇"
                        : index === 5
                        ? "☁"
                        : index === 6
                        ? "▤"
                        : "◉"}

                    </div>

                    <span>
                      {item}
                    </span>

                  </div>

                  {index !== flow.length - 1 && (
                    <div className="flow-arrow">
                      →
                    </div>
                  )}

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ===================================================
            CONTACT
        =================================================== */}

        <section
          className="section contact-section"
          id="contact"
        >

          <div className="contact-card">

            <div className="contact-main">

              <span className="small-label">
                06 • CONTACT
              </span>

              <h2>
                Let's build something
                <br />
                <span>
                  reliable.
                </span>
              </h2>

              <p>
                Open to Cloud, DevOps and SRE opportunities
                where infrastructure automation, reliability
                and continuous delivery matter.
              </p>

            </div>


            <div className="contact-details">

              <a href="mailto:rajujilla55@gmail.com">

                <span>✉</span>

                rajujilla55@gmail.com

                <b>↗</b>

              </a>

              <a href="tel:+919347536752">

                <span>⌕</span>

                +91 9347536752

                <b>↗</b>

              </a>

              <div>

                <span>⌖</span>

                Hyderabad, Telangana, India

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <div>

          <strong>
            RAJU JILLA
          </strong>

          <span>
            Cloud & DevOps Engineer
          </span>

        </div>

        <div className="footer-stack">
          AWS • Kubernetes • Terraform • CI/CD • Platform Reliability
        </div>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>

        <div className="footer-bottom">

          <span>
            © 2026 Raju Jilla
          </span>

          <span>
            Built with React • Vite
          </span>

        </div>

      </footer>

    </div>
  );
}


/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  number,
  label,
  title,
}) {
  return (
    <div className="section-heading">

      <div className="heading-number">
        {number}
      </div>

      <div>

        <span>
          {label}
        </span>

        <h2>
          {title}
        </h2>

      </div>

    </div>
  );
}


/* =========================================================
   DETAIL
========================================================= */

function Detail({
  icon,
  title,
  children,
}) {
  return (
    <div className="detail">

      <span className="detail-icon">
        {icon}
      </span>

      <div>

        <small>
          {title}
        </small>

        <strong>
          {children}
        </strong>

      </div>

    </div>
  );
}


/* =========================================================
   EXPERIENCE ITEM
========================================================= */

function ExperienceItem({
  children,
}) {
  return (
    <div className="experience-item">

      <span>
        ✓
      </span>

      {children}

    </div>
  );
}


export default App;