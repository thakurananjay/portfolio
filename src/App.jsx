import { useEffect, useMemo, useRef, useState } from "react";

const LINKS = {
  resume: "/resume.pdf",
  github: "https://github.com/thakurananjay",
  linkedin: "https://linkedin.com/in/ananjay-thakur-0ab43333",
  email: "mailto:ananjaythaku13@gmail.com",
};

const PROJECTS = [
  {
    title: "CareConnect — Healthcare Collaboration Platform",
    short:
      "Healthcare collaboration platform focused on secure access, clean API design, and scalable UI.",
    details: [
      "Designed REST APIs for authentication, role-based access, and document handling",
      "Integrated OCR/NLP pipeline to extract and process text from uploaded documents",
      "Built responsive React UI components focused on usability and data clarity",
      "Worked on relational database structure for users, roles, and records",
    ],
    tech: ["React", "Node.js", "MySQL", "REST APIs"],
    live: "https://careconnectp.netlify.app/",
    repo: "https://github.com/thakurananjay",
  },
  {
    title: "TRAVESIO — AI-Assisted Travel Planning Platform",
    short:
      "Travel planning platform providing itinerary recommendations using a simple service-based architecture.",
    details: [
      "Built a Flask service to handle recommendation logic",
      "Connected frontend and backend via REST APIs",
      "Kept code modular with clean data flow between services",
      "Improved UI responsiveness and overall user experience",
    ],
    tech: ["React", "Flask", "REST APIs"],
    live: "",
    repo: "https://github.com/thakurananjay",
  },
];

function useScrollReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll("[data-reveal]"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return containerRef;
}

function ProjectCard({ p, isOpen, onToggle }) {
  return (
    <div className="project col-6 reveal" data-reveal>
      <h3 className="projectTitle">{p.title}</h3>
      <p className="projectShort">{p.short}</p>

      <div className="badges">
        {p.tech.map((t) => (
          <span key={t} className="badge">
            {t}
          </span>
        ))}
      </div>

      <div className="links">
        {p.live ? (
          <a className="btn" href={p.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        ) : (
          <span className="mini">Live demo not available</span>
        )}
        <a className="btn" href={p.repo} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <button className="btn ghost" onClick={onToggle}>
          {isOpen ? "Hide details" : "View details"}
        </button>
      </div>

      <div className={`accordion ${isOpen ? "open" : ""}`}>
        <div className="accordionInner">
          <div className="accordionHeading">What I did</div>
          <ul className="points">
            {p.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <div className="accordionFooter">
            <span className="mini">
              Can explain architecture, tradeoffs, and improvements in interviews.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const rootRef = useScrollReveal();
  const [openKey, setOpenKey] = useState(null);
  const projects = useMemo(() => PROJECTS, []);

  return (
    <>
      <div className="bg-blobs">
        <div className="blob one" />
        <div className="blob two" />
        <div className="blob three" />
      </div>

      <div className="container" ref={rootRef}>
        {/* HERO */}
        <div className="card section reveal show">
          <div className="kicker">✨ Software Developer • B.Tech CSE (2025)</div>

          <div className="header">
            <div style={{ flex: 1 }}>
              <h1>Ananjay Thakur</h1>
              <p>
                Entry-level software developer with hands-on experience building
                real-world applications using React and backend APIs. Interested
                in backend systems, automation, and scalable software design.
              </p>

              <div className="badges">
                <span className="badge">JavaScript</span>
                <span className="badge">React</span>
                <span className="badge">Node.js</span>
                <span className="badge">REST APIs</span>
                <span className="badge">MySQL</span>
                <span className="badge">Python (Flask)</span>
              </div>

              <div className="actions">
                <a className="btn primary" href="/resume.pdf" target="_blank" rel="noreferrer">
                  View Resume
                </a>
                <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="btn" href={LINKS.email}>
                  Email
                </a>
              </div>

              <div className="mini">Email: ananjaythaku13@gmail.com</div>
            </div>

            <div className="quick-info">
              <div className="pill">✅ Open to Software Developer / SDE (Entry-level)</div>
              <div className="pill">📍 India • Remote / Hybrid</div>
              <div className="pill">🧠 Backend & Full-Stack interests</div>
              <div className="pill">🚀 CareConnect — End-to-end ownership</div>
            </div>
          </div>
        </div>

        {/* SKILLS & EDUCATION */}
        <div className="grid">
          <div className="card section col-6 reveal" data-reveal>
            <h2>Skills</h2>
            <div className="badges">
              <span className="badge">JavaScript</span>
              <span className="badge">HTML5</span>
              <span className="badge">CSS3</span>
              <span className="badge">React</span>
              <span className="badge">Node.js</span>
              <span className="badge">Express</span>
              <span className="badge">Python</span>
              <span className="badge">Flask</span>
              <span className="badge">SQL</span>
              <span className="badge">MySQL</span>
              <span className="badge">Git/GitHub</span>
              <span className="badge">Postman</span>
              <span className="badge">Figma</span>
            </div>
          </div>

          {/* UPDATED EDUCATION */}
          <div className="card section col-6 reveal" data-reveal>
            <h2>Education</h2>
            <p>
              <strong>B.Tech in Computer Science Engineering</strong>
              <br />
              Vellore Institute of Technology (VIT)
              <br />
              Graduated: 2025
            </p>
            <p className="mini">
              Coursework and projects focused on software development and system
              design fundamentals.
            </p>
          </div>

          {/* PROJECTS */}
          <div className="card section col-12 reveal" data-reveal>
            <h2>Projects</h2>

            <div className="grid">
              {projects.map((p) => (
                <ProjectCard
                  key={p.title}
                  p={p}
                  isOpen={openKey === p.title}
                  onToggle={() => setOpenKey((k) => (k === p.title ? null : p.title))}
                />
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="card section col-12 reveal" data-reveal>
            <h2>Contact</h2>
            <p>
              Email:{" "}
              <a href={LINKS.email} style={{ textDecoration: "underline" }}>
                ananjaythaku13@gmail.com
              </a>
            </p>
            <p className="mini">Best way to reach me is email.</p>
          </div>
        </div>
      </div>
    </>
  );
}
