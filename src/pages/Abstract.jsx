import { motion } from "framer-motion";

export default function Abstract() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Abstract</h1>

      <div className="abstract-card">
        <p className="abstract-text">
          This internship report presents the design and development of
          <strong> “ToolNest – A Unified Productivity Platform”</strong>,
          a full‑stack web application developed during the internship period at
          <strong> Tata Technologies</strong>. The project focuses on creating a
          centralized digital solution that integrates multiple document,
          image, and productivity‑related tools into a single, user‑friendly
          platform.
        </p>

        <p className="abstract-text">
          The application addresses the challenges of fragmented workflows by
          enabling users to perform common operations such as PDF manipulation,
          image processing, background removal, and file format conversion
          through a unified interface. The system is built using modern web
          technologies with a strong emphasis on scalability, usability, and
          performance.
        </p>

        <p className="abstract-text">
          The frontend is developed using <strong>React and Vite</strong>,
          while the backend is implemented using <strong>FastAPI</strong>,
          supported by a <strong>PostgreSQL</strong> database. In addition to
          user‑level functionality, the platform includes an administrative
          panel for tool management, monitoring, and analytics. The application
          was deployed on cloud infrastructure and also designed to support
          internal enterprise deployment.
        </p>

        <div className="abstract-highlights">
          <h3>Key Highlights</h3>
          <ul>
            <li>Unified platform for document and image‑based productivity tools</li>
            <li>Modern full‑stack architecture using React and FastAPI</li>
            <li>Admin panel for monitoring, analytics, and tool management</li>
            <li>Cloud‑ready with support for internal enterprise deployment</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}