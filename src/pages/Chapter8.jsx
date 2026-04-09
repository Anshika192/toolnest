import { motion } from "framer-motion";

export default function Chapter8() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Chapter 8 – Challenges Faced & Solutions</h1>

      {/* 8.1 TECHNICAL CHALLENGES */}
      <div className="chapter-card">
        <h2>8.1 Technical Challenges</h2>
        <p>
          One of the major technical challenges faced during the development of
          the project was handling multiple tools with different processing
          requirements within a single unified platform. Each tool required
          separate validation, processing logic, and response handling, which
          increased overall complexity.
        </p>
        <p>
          This challenge was addressed by modularizing backend functionalities
          and separating tool‑specific logic into dedicated routes and services,
          ensuring maintainability and scalability.
        </p>
      </div>

      {/* 8.2 INTEGRATION CHALLENGES */}
      <div className="chapter-card">
        <h2>8.2 Integration Challenges</h2>
        <p>
          Integrating the frontend with backend APIs posed challenges related to
          data consistency, request handling, and error management. Differences
          in expected payload structures and response formats required careful
          coordination between frontend and backend components.
        </p>
        <p>
          This issue was resolved by clearly defining API contracts, validating
          inputs at the backend, and implementing structured error handling to
          ensure smooth communication between system layers.
        </p>
      </div>

      {/* 8.3 PERFORMANCE */}
      <div className="chapter-card">
        <h2>8.3 Performance and Optimization Challenges</h2>
        <p>
          Processing large files such as PDFs and images resulted in performance
          challenges, including increased processing time and higher resource
          consumption. In some cases, long‑running operations affected user
          experience.
        </p>
        <p>
          To mitigate these issues, background processing, optimized file
          handling techniques, and efficient resource management strategies were
          implemented to maintain performance and responsiveness.
        </p>
      </div>

      {/* 8.4 DEPLOYMENT */}
      <div className="chapter-card">
        <h2>8.4 Deployment and Configuration Challenges</h2>
        <p>
          Deployment introduced challenges related to environment configuration,
          database connectivity, and secure handling of sensitive credentials.
          Differences between local and deployed environments required careful
          adjustments.
        </p>
        <p>
          These challenges were resolved using environment‑based configuration,
          structured deployment workflows, and secure management of environment
          variables to ensure seamless execution across environments.
        </p>
      </div>

      {/* 8.5 LEARNING */}
      <div className="chapter-card">
        <h2>8.5 Learning Outcomes</h2>
        <p>
          The challenges encountered during the internship significantly
          contributed to technical and professional growth. Hands‑on experience
          in full‑stack development, API design, system architecture, and
          deployment strengthened problem‑solving skills and engineering
          mindset.
        </p>
        <p>
          This experience enhanced understanding of real‑world development
          practices, teamwork, and the importance of writing scalable and
          maintainable code.
        </p>
      </div>
    </motion.div>
  );
}