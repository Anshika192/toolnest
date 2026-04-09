import { motion } from "framer-motion";

export default function Chapter2() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Chapter 2 – Internship Overview</h1>

      {/* INTERNSHIP OBJECTIVE */}
      <div className="chapter-card">
        <h2>2.1 Internship Objective</h2>
        <p>
          The primary objective of the internship was to gain hands‑on experience
          in real‑world software development and understand how modern
          full‑stack applications are designed, developed, and deployed in a
          professional environment.
        </p>
        <p>
          The internship aimed to bridge the gap between academic learning and
          industry practices by providing exposure to live projects, structured
          workflows, and collaborative development processes.
        </p>
      </div>

      {/* ROLE & RESPONSIBILITIES */}
      <div className="chapter-card">
        <h2>2.2 Role and Responsibilities</h2>
        <ul className="role-list">
          <li>Designing and developing frontend components using React</li>
          <li>Implementing backend APIs using FastAPI</li>
          <li>Integrating frontend and backend services</li>
          <li>Working with databases for data storage and retrieval</li>
          <li>Testing features and fixing bugs during development</li>
          <li>Collaborating with the team to understand functional requirements</li>
        </ul>
      </div>

      {/* TOOLS & TECHNOLOGIES */}
      <div className="chapter-card">
        <h2>2.3 Tools and Technologies Used</h2>
        <div className="tech-stack">
          <span>React</span>
          <span>Vite</span>
          <span>FastAPI</span>
          <span>PostgreSQL</span>
          <span>Git & GitHub</span>
          <span>HTML & CSS</span>
          <span>REST APIs</span>
        </div>
      </div>

      {/* TEAM & WORK ENVIRONMENT */}
      <div className="chapter-card">
        <h2>2.4 Learning Environment and Team Exposure</h2>
        <p>
          During the internship, I worked as a part of the
          <strong> Blue Bird Team</strong> at Tata Technologies. The team
          environment encouraged open communication, collaboration, and
          continuous learning.
        </p>
        <p>
          Regular interactions with mentors and team members helped me
          understand industry‑standard development practices, version control
          workflows, and the importance of writing clean and maintainable code.
        </p>
      </div>
    </motion.div>
  );
}