import { motion } from "framer-motion";
import toolWorkflow from "../assets/tool-workflow.png"; // <-- tumhari image

export default function Chapter5() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Chapter 5 – Tool Categories & Modules</h1>

      {/* 5.1 OVERVIEW */}
      <div className="chapter-card">
        <h2>5.1 Overview of Tool Categories</h2>
        <p>
          The <strong>ToolNest</strong> platform is designed as a
          centralized productivity system that organizes tools into clearly
          defined categories. This categorization helps users easily locate
          and use the required tools without navigating multiple applications.
        </p>
        <p>
          The system currently supports PDF tools, image tools, document tools,
          and AI‑powered utilities, each serving a specific set of
          productivity‑related functions.
        </p>
      </div>

      {/* ✅ TOOL WORKFLOW DIAGRAM – BEST PLACEMENT */}
      <div className="workflow-section">
        <img
          src={toolWorkflow}
          alt="Tool Workflow Diagram"
          className="workflow-image"
        />
        <p className="img-caption">
          Figure 5.1: Tool Workflow Diagram illustrating the execution flow of tools
          in the ToolNest platform
        </p>
      </div>

      {/* 5.2 PDF TOOLS */}
      <div className="chapter-card">
        <h2>5.2 PDF Tools</h2>
        <p>
          The PDF Tools module provides utilities for performing common
          PDF‑related operations required in academic and professional
          environments. These tools help users manage, process, and convert
          PDF documents efficiently.
        </p>

        <ul className="tool-list">
          <li>PDF to Text</li>
          <li>PDF Merger</li>
          <li>PDF to Word</li>
          <li>PDF Split</li>
          <li>PDF Watermark</li>
          <li>PDF Page Number</li>
          <li>PDF Toolkit</li>
        </ul>
      </div>

      {/* 5.3 IMAGE TOOLS */}
      <div className="chapter-card">
        <h2>5.3 Image Tools</h2>
        <p>
          The Image Tools module focuses on handling image‑related operations
          such as processing, conversion, and optimization. These tools are
          designed to support quick and efficient image manipulation workflows.
        </p>

        <ul className="tool-list">
          <li>Image to PDF</li>
          <li>Image Compression</li>
          <li>Image Format Conversion</li>
          <li>Image to Text (OCR)</li>
          <li>PDF to Image</li>
          <li>Image Cropping & Resizing (Image Toolkit)</li>
          <li>Background Remover</li>
        </ul>
      </div>

      {/* 5.4 DOCUMENT TOOLS */}
      <div className="chapter-card">
        <h2>5.4 Document Tools</h2>
        <p>
          Document Tools enable cross‑format document processing and
          transformation. These tools help users quickly convert and manage
          various document formats in a streamlined manner.
        </p>

        <ul className="tool-list">
          <li>Word to PDF</li>
          <li>QR Code Generator</li>
          <li>PPT to Excel</li>
        </ul>
      </div>

      {/* 5.5 AI TOOLS */}
      <div className="chapter-card">
        <h2>5.5 AI Tools</h2>
        <p>
          The AI Tools module introduces intelligent features that automate
          common tasks. These tools enhance productivity by reducing manual
          effort through AI‑assisted processing.
        </p>

        <ul className="tool-list">
          <li>Meeting MOM Generator</li>
        </ul>
      </div>

      {/* NOTE */}
      <div className="chapter-note">
        <em>
          Detailed screenshots of individual tools are included in the
          Appendix section.
        </em>
      </div>
    </motion.div>
  );
}
