import { motion } from "framer-motion";

export default function Chapter3() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Chapter 3 – Project Overview</h1>

      {/* PROJECT INTRODUCTION */}
      <div className="chapter-card">
        <h2>3.1 Introduction to the Project</h2>
        <p>
          <strong>ToolNest</strong> is a unified productivity platform
          developed during the internship period to simplify and centralize
          commonly used document and image‑based operations into a single
          system. The project focuses on improving efficiency by eliminating
          the need to use multiple independent tools for everyday tasks.
        </p>

        <p>
          The platform integrates various utilities related to PDF processing,
          image handling, document conversion, and AI‑assisted features, all
          accessible through a clean and user‑friendly interface.
        </p>
      </div>

      {/* PROBLEM STATEMENT */}
      <div className="chapter-card">
        <h2>3.2 Problem Statement</h2>
        <p>
          In professional as well as academic environments, users often rely on
          multiple standalone tools for tasks such as editing PDFs, converting
          file formats, compressing images, or removing backgrounds. This
          fragmented approach leads to inefficiency, workflow disruption, and
          increased dependency on external or third‑party platforms.
        </p>

        <p>
          Additionally, most existing solutions lack a centralized management
          mechanism and offer limited control over security, customization,
          and administrative monitoring.
        </p>
      </div>

      {/* PROPOSED SOLUTION */}
      <div className="chapter-card">
        <h2>3.3 Proposed Solution</h2>
        <p>
          The proposed solution was to design and develop a unified web‑based
          platform that consolidates multiple productivity tools into a single
          application. The system provides users with quick access to document
          and image utilities while maintaining a consistent experience across
          all features.
        </p>

        <p>
          In addition to user‑level functionality, the platform includes an
          administrative panel that allows monitoring of usage, tool management,
          and system‑level control, thereby making the solution suitable for
          organizational use.
        </p>
      </div>

      {/* PROJECT SCOPE */}
      <div className="chapter-card">
        <h2>3.4 Scope of the Project</h2>
        <ul className="scope-list">
          <li>Centralized platform for document and image utilities</li>
          <li>User‑friendly interface for seamless navigation</li>
          <li>Integration of PDF, image, and document tools</li>
          <li>Administrative panel for monitoring and control</li>
          <li>Secure and scalable architecture</li>
          <li>Support for cloud as well as internal deployment</li>
        </ul>
      </div>
    </motion.div>
  );
}