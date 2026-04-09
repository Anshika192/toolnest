import { motion } from "framer-motion";

export default function Chapter9() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Chapter 9 – Conclusion & Future Scope</h1>

      {/* 9.1 CONCLUSION */}
      <div className="chapter-card">
        <h2>9.1 Conclusion</h2>
        <p>
          The <strong>ToolNest</strong> project successfully fulfilled its
          objective of developing a unified productivity platform that integrates
          multiple PDF, image, document, and AI‑based tools within a single
          web‑based system. The project demonstrates the practical application
          of full‑stack development concepts using modern technologies.
        </p>

        <p>
          This internship at <strong>Tata Technologies</strong> provided valuable
          hands‑on experience in system architecture design, backend API
          development, frontend integration, database management, and deployment
          practices. The project significantly enhanced technical competence,
          problem‑solving ability, and understanding of real‑world software
          development workflows.
        </p>
      </div>

      {/* 9.2 FUTURE SCOPE */}
      <div className="chapter-card">
        <h2>9.2 Future Scope</h2>
        <p>
          The developed platform offers substantial scope for future improvements
          and scalability. Potential future enhancements include:
        </p>

        <ul className="future-scope-list">
          <li>
            Integration of additional productivity tools to further expand
            system functionality.
          </li>
          <li>
            Enhancement of AI‑based features for intelligent automation and
            smarter content processing.
          </li>
          <li>
            Performance optimization to support large file handling and
            high‑volume concurrent usage.
          </li>
          <li>
            Expansion of role‑based access control to support multiple
            organizational roles.
          </li>
          <li>
            Advanced analytics and reporting features for administrators to
            gain deeper system insights.
          </li>
          <li>
            Deployment of the platform within internal enterprise environments
            with enhanced security configurations.
          </li>
          <li>
            Cloud scalability enhancements to support broader user adoption.
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
