import { motion } from "framer-motion";
import officeImg from "../assets/tata-office.jpg";
import BlueBirdImg from "../assets/Blue-Bird.jpg";

export default function Chapter1() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">
        Chapter 1 – Overview of the Organisation
      </h1>

      <div className="org-highlight">
        <h2>Tata Technologies</h2>
        <p className="chapter-tagline">"Engineering a Better World"</p>
        <p>Global Engineering & Digital Solutions Company</p>
      </div>

      {/* 1.1 INTRODUCTION */}
      <div className="chapter-card">
        <h2>1.1 Introduction</h2>
        <p>
          <strong>Tata Technologies</strong> is a globally recognized engineering
          and digital solutions company that provides product development and
          digital transformation services to manufacturing‑centric industries.
          The organization works closely with automotive, aerospace, and
          industrial companies to enable innovation, efficiency, and sustainable
          growth.
        </p>
      </div>

      {/* 1.2 BACKGROUND */}
      <div className="chapter-card">
        <h2>1.2 Company Background & History</h2>
        <p>
          Tata Technologies is a part of the Tata Group and has established itself
          as a trusted engineering partner for leading global OEMs and Tier‑1
          suppliers. With decades of industry experience, the company has
          consistently focused on delivering high‑quality engineering services,
          domain expertise, and technology‑driven solutions.
        </p>
      </div>

      {/* ✅ FIGURES 1.1 & 1.2 (ANCHOR POINTS) */}
      <div className="image-grid">
        {/* Figure 1.1 */}
        <div id="fig-1-1">
          <img src={officeImg} alt="Tata Technologies Office" />
          <p className="img-caption">
            <strong>Figure 1.1:</strong> Tata Technologies Office Building
          </p>
        </div>

        {/* Figure 1.2 */}
        <div id="fig-1-2">
  <img src={BlueBirdImg} alt="Blue Bird Team Office" />
  <p className="img-caption">
    <strong>Figure 1.2:</strong> Organisational / Team Environment
  </p>
</div>
      </div>

      {/* VISION & MISSION */}
      <div className="vm-container">
        <div className="vm-card">
          <h3>Vision</h3>
          <p>
            To engineer innovative solutions that shape the future of
            manufacturing and deliver sustainable value to global customers.
          </p>
        </div>

        <div className="vm-card">
          <h3>Mission</h3>
          <p>
            To partner with customers in their digital and engineering journeys
            by delivering cutting‑edge technologies, domain excellence, and
            industry‑focused innovation.
          </p>
        </div>
      </div>

      {/* 1.3 TEAM CONTEXT */}
      <div className="chapter-card">
        <h2>1.3 Organisation & Team Context</h2>
        <p>
          During the internship period, I was assigned to the
          <strong> Blue Bird Team</strong>, where I worked under the guidance of
          experienced professionals. The team environment encouraged
          collaboration, continuous learning, and practical problem‑solving,
          enabling interns to gain exposure to real‑world development workflows
          and professional standards.
        </p>
      </div>
    </motion.div>
  );
}