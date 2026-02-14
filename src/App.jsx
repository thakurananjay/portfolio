import { useEffect, useMemo, useRef, useState } from "react";

const LINKS = {
  resume: "/resume.pdf",
  github: "https://github.com/thakurananjay",
  linkedin: "https://www.linkedin.com/in/ananjaythakur/",
  email: "mailto:ananjaythakur13@gmail.com",
};

const PROJECTS = [
  {
    title: "CareConnect — Healthcare Collaboration Platform",
    short:
      "Healthcare collaboration platform focused on secure access, clean API design, and AI-powered document processing.",
    details: [
      "Designed REST APIs for authentication, role-based access control (RBAC), and document workflows",
      "Integrated OCR + NLP pipeline to extract and process text from uploaded medical documents",
      "Built responsive React UI components emphasizing usability and structured data presentation",
      "Worked on relational database schema for users, roles, and healthcare records",
    ],
    tech: ["React", "Node.js", "Express", "MySQL", "REST APIs", "OCR", "NLP"],
    live: "https://careconnectp.netlify.app/",
    repo: "https://github.com/thakurananjay",
  },
  {
    title: "TRAVESIO — AI-Assisted Travel Planning Platform",
    short:
      "Travel planning platform providing itinerary recommendations using a lightweight service-based architecture.",
    details: [
      "Developed a Flask backend service to process inputs and generate travel recommendations",
      "Integrated React frontend with Flask APIs and handled API responses for dynamic UI updates",
      "Maintained modular structure with clean separation between frontend and backend services",
      "Focused on UI responsiveness and smooth user experience",
    ],
    tech: ["React", "Flask", "Python", "REST APIs"],
    live: "",
    repo: "https://github.com/thakurananjay",
  },
];

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(pct);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scrollTrack" aria-hidden="true">
      <div className="scrollBar" style={{ width: `${progress}%` }} />
    </div>
  );
}

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
      <ScrollProgress />

      <div className="bg-blobs">
        <div className="blob one" />
        <div className="blob two" />
        <div className="blob three" />
      </div>

      <div className="container" ref={rootRef}>
        <div className="card section reveal show">
          <div className="kicker">
            Full-Stack Developer • AI/GenAI (LLMs) Learner • B.Tech CSE (2025)
          </div>

          <div className="header">
            <div style={{ flex: 1 }}>
              <h1>Ananjay Thakur</h1>
              <p>
                Full-Stack developer building real-world web apps with React, Node.js, and REST APIs.
                Currently learning ML, Deep Learning, and LLMs to ship AI-integrated, production-ready features.
              </p>

              <div className="badges">
                <span className="badge">React</span>
                <span className="badge">Node.js / Express</span>
                <span className="badge">REST APIs</span>
                <span className="badge">MySQL</span>
                <span className="badge">Python</span>
              </div>

              <div className="actions">
                <a className="btn primary" href={LINKS.resume} target="_blank" rel="noreferrer">
                  View Resume
                </a>
                <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="quick-info">
              <div className="pill">Open to Full-Stack / Backend roles</div>
              <div className="pill">Open to AI / GenAI Intern roles</div>
              <div className="pill">India • Remote / Hybrid</div>
            </div>
          </div>
        </div>

        <div className="card section col-12 reveal" data-reveal id="projects">
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
      </div>
    </>
  );
}
