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
          <div className="kicker">
            ✨ Full-Stack Developer • AI/GenAI (LLMs) Learner • B.Tech CSE (2025)
          </div>

          <div className="header">
            <div style={{ flex: 1 }}>
              <h1>Ananjay Thakur</h1>
              <p>
                Full-Stack developer with hands-on experience building real-world web
                applications using React, Node.js, and REST APIs. Currently expanding
                into Machine Learning, Deep Learning, and Generative AI (LLMs) to build
                AI-integrated, production-ready systems.
              </p>

              <div className="badges">
                <span className="badge">React</span>
                <span className="badge">Node.js / Express</span>
                <span className="badge">REST APIs</span>
                <span className="badge">MySQL</span>
                <span className="badge">Python (Flask)</span>
                <span className="badge">OCR + NLP API Integration</span>
                <span className="badge">ML / DL Fundamentals (Learning)</span>
                <span className="badge">LLM Concepts (Learning)</span>
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
                <a className="btn" href={LINKS.email}>
                  Email
                </a>
              </div>

              <div className="mini">Email: ananjaythakur13@gmail.com</div>
            </div>

            <div className="quick-info">
              <div className="pill">✅ Open to Full-Stack / Backend (Entry-level)</div>
              <div className="pill">🤖 Also open to AI/GenAI Intern / Trainee roles</div>
              <div className="pill">📍 India • Remote / Hybrid</div>
              <div className="pill">🧠 Interests: Backend systems, automation, AI apps</div>
              <div className="pill">🚀 CareConnect: OCR + NLP + RBAC + REST APIs</div>
            </div>
          </div>
        </div>

        <div className="grid">
          {/* SKILLS */}
          <div className="card section col-6 reveal" data-reveal>
            <h2>Skills</h2>

            <div className="mini">Full-Stack</div>
            <div className="badges">
              <span className="badge">React</span>
              <span className="badge">JavaScript (ES6+)</span>
              <span className="badge">HTML5</span>
              <span className="badge">CSS3</span>
              <span className="badge">Node.js</span>
              <span className="badge">Express</span>
              <span className="badge">REST APIs</span>
            </div>

            <div className="mini">Backend & Databases</div>
            <div className="badges">
              <span className="badge">Python</span>
              <span className="badge">Flask</span>
              <span className="badge">SQL</span>
              <span className="badge">MySQL</span>
            </div>

            <div className="mini">AI / ML (Learning)</div>
            <div className="badges">
              <span className="badge">Machine Learning Fundamentals</span>
              <span className="badge">Deep Learning Basics</span>
              <span className="badge">NLP</span>
              <span className="badge">LLM Concepts</span>
              <span className="badge">Prompt Engineering</span>
              <span className="badge">OCR + NLP APIs</span>
            </div>

            <div className="mini">Tools</div>
            <div className="badges">
              <span className="badge">Git/GitHub</span>
              <span className="badge">Postman</span>
              <span className="badge">VS Code</span>
              <span className="badge">Jupyter Notebook</span>
            </div>
          </div>

          {/* EDUCATION */}
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
              Focused on software development, backend systems, and system design fundamentals.
            </p>
          </div>

          {/* LEARNING */}
          <div className="card section col-12 reveal" data-reveal>
            <h2>Learning & Certifications</h2>

            <ul className="points">
              <li>Machine Learning Specialization — DeepLearning.AI</li>
              <li>Deep Learning Specialization — DeepLearning.AI</li>
              <li>Generative AI with Large Language Models (LLMs) — DeepLearning.AI (Ongoing)</li>
              <li>Applied Machine Learning in Python — University of Michigan (Coursera)</li>
            </ul>

            <p className="mini">
              Actively building expertise in AI concepts while strengthening full-stack engineering skills.
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
                ananjaythakur13@gmail.com
              </a>
            </p>
            <p className="mini">Best way to reach me is email.</p>
          </div>
        </div>
      </div>
    </>
  );
}
