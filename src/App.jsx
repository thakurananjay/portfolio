const LINKS = {
  resume: "/resume.pdf",
  linkedin: "https://linkedin.com/in/ananjay-thakur-0ab43333",
  github: "https://github.com/thakurananjay",
  email: "mailto:ananjaythaku13@gmail.com",
};

const PROJECTS = [
  {
    title: "CareConnect",
    desc:
      "Healthcare collaboration platform with OCR & NLP integration for extracting text from documents and role-based access control.",
    tech: ["React", "Node.js", "MySQL", "REST APIs"],
    live: "https://careconnectp.netlify.app/",
    repo: "https://github.com/thakurananjay",
  },
  {
    title: "TRAVESIO",
    desc:
      "AI-assisted travel planning project with a Flask service and React-based UI connected via REST APIs.",
    tech: ["React", "Flask", "REST APIs"],
    live: "",
    repo: "https://github.com/thakurananjay",
  },
];

function App() {
  return (
    <>
      <div className="bg-blobs">
        <div className="blob one" />
        <div className="blob two" />
        <div className="blob three" />
      </div>

      <div className="container">
        <div className="card section fade-in">
          <div className="kicker">✨ Software Developer • B.Tech CSE (2025)</div>

          <div className="header">
            <div style={{ flex: 1 }}>
              <h1>Ananjay Thakur</h1>
              <p>
                Entry-level software developer with hands-on experience building
                applications using React and backend APIs. I enjoy working on
                end-to-end features and learning backend engineering, automation,
                and cloud fundamentals.
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
                <a
                  className="btn primary"
                  href={LINKS.resume}
                  target="_blank"
                  rel="noreferrer"
                >
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

            <div
              style={{
                minWidth: 320,
                display: "grid",
                gap: 14,
                alignContent: "start",
              }}
            >
              <div className="pill">✅ Open to Software Developer / SDE (Entry-level)</div>
              <div className="pill">✅ Also open to Frontend / Full-Stack roles</div>
              <div className="pill">📍 India • Remote / Hybrid</div>
              <div className="pill">🧠 Interested in backend + automation</div>
              <div className="pill">🚀 Strong project: CareConnect (Live)</div>
              <div className="pill">🛠️ Git • GitHub • Postman • Figma</div>
            </div>
          </div>
        </div>

        <div style={{ height: 16 }} />

        <div className="grid">
          <div className="card section col-6 fade-in">
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
            <p className="mini">
              Strong foundation in frontend development with experience integrating
              APIs and databases. Improving backend and deployment skills through
              projects.
            </p>
          </div>

          <div className="card section col-6 fade-in">
            <h2>Education</h2>
            <p>
              <strong>B.Tech in Computer Science Engineering</strong>
              <br />
              Graduated: 2025
            </p>
            <p className="mini">
              Project-driven learning focused on building real-world software
              applications.
            </p>
          </div>

          <div className="card section col-12 fade-in">
            <h2>Projects</h2>

            <div className="grid">
              {PROJECTS.map((p) => (
                <div key={p.title} className="project col-6">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>

                  <div className="badges">
                    {p.tech.map((t) => (
                      <span key={t} className="badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="links" style={{ marginTop: 10 }}>
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
                  </div>
                </div>
              ))}

              <div className="project col-12">
                <h3>Experience — Web Development Work</h3>
                <p>
                  Worked on responsive UI, converted Figma designs into components,
                  and fixed cross-browser UI issues during internship/project work.
                </p>
                <div className="badges">
                  <span className="badge">UI Development</span>
                  <span className="badge">React</span>
                  <span className="badge">Figma</span>
                  <span className="badge">Git</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card section col-12 fade-in">
            <h2>Contact</h2>
            <p>
              Email:{" "}
              <a href="mailto:ananjaythaku13@gmail.com">ananjaythaku13@gmail.com</a>
            </p>
            <p className="mini">Best way to reach me is email.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
