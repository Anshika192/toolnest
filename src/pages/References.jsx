import { motion } from "framer-motion";

export default function References() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">References</h1>

      <div className="reference-container">
        <ol className="reference-list">
          <li>
            <span className="ref-title">FastAPI Documentation</span>
            <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer">
              https://fastapi.tiangolo.com/
            </a>
          </li>

          <li>
            <span className="ref-title">React Documentation</span>
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              https://react.dev/
            </a>
          </li>

          <li>
            <span className="ref-title">Vite – Next Generation Frontend Tooling</span>
            <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
              https://vitejs.dev/
            </a>
          </li>

          <li>
            <span className="ref-title">PostgreSQL Documentation</span>
            <a href="https://www.postgresql.org/docs/" target="_blank" rel="noreferrer">
              https://www.postgresql.org/docs/
            </a>
          </li>

          <li>
            <span className="ref-title">SQLAlchemy Documentation</span>
            <a href="https://docs.sqlalchemy.org/" target="_blank" rel="noreferrer">
              https://docs.sqlalchemy.org/
            </a>
          </li>

          <li>
            <span className="ref-title">PyPDF2 Documentation</span>
            <a href="https://pypdf2.readthedocs.io/" target="_blank" rel="noreferrer">
              https://pypdf2.readthedocs.io/
            </a>
          </li>

          <li>
            <span className="ref-title">pdf2docx – PDF to Word Converter</span>
            <a href="https://pypi.org/project/pdf2docx/" target="_blank" rel="noreferrer">
              https://pypi.org/project/pdf2docx/
            </a>
          </li>

          <li>
            <span className="ref-title">python‑pptx Documentation</span>
            <a href="https://python-pptx.readthedocs.io/" target="_blank" rel="noreferrer">
              https://python-pptx.readthedocs.io/
            </a>
          </li>

          <li>
            <span className="ref-title">Google Gemini API Documentation</span>
            <a href="https://ai.google.dev/" target="_blank" rel="noreferrer">
              https://ai.google.dev/
            </a>
          </li>

          <li>
            <span className="ref-title">GitHub Documentation</span>
            <a href="https://docs.github.com/" target="_blank" rel="noreferrer">
              https://docs.github.com/
            </a>
          </li>
        </ol>
      </div>
    </motion.div>
  );
}