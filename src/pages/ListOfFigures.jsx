import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ListOfFigures() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">List of Figures</h1>

      <div className="chapter-card">
        <ul className="reference-list">

          {/* Chapter 1 */}
          <li>
            <Link to="/chapter-1">
              Figure 1.1 – Tata Technologies Office Building
            </Link>
          </li>
          <li>
            <Link to="/chapter-1">
              Figure 1.2 – Organisational / Team Environment
            </Link>
          </li>

          {/* Chapter 4 */}
          <li>
            <Link to="/chapter-4">
              Figure 4.1 – Token‑based authentication mechanism
            </Link>
          </li>

          {/* Chapter 5 */}
          <li>
            <Link to="/chapter-5">
              Figure 5.1 – Tool workflow execution diagram
            </Link>
          </li>

          {/* Chapter 6 */}
          <li>
            <Link to="/chapter-6">
              Figure 6.1 – Admin dashboard analytics overview
            </Link>
          </li>

          {/* Appendix */}
          <li>
            <Link to="/appendix#fig-a1">
              Figure A.1 – User login interface
            </Link>
          </li>
          <li>
            <Link to="/appendix#fig-a2">
              Figure A.2 – Admin login interface
            </Link>
          </li>
          <li>
            <Link to="/appendix#fig-a3">
              Figure A.3 – User dashboard
            </Link>
          </li>
          <li>
            <Link to="/appendix#fig-a4">
              Figure A.4 – PDF tools category view
            </Link>
          </li>
          <li>
            <Link to="/appendix#fig-a5">
              Figure A.5 – Image tools category view
            </Link>
          </li>
          <li>
            <Link to="/appendix#fig-a6">
              Figure A.6 – Document tools category view
            </Link>
          </li>
          <li>
            <Link to="/appendix#fig-a7">
              Figure A.7 – AI tools interface
            </Link>
          </li>
          <li>
            <Link to="/appendix#fig-a8">
              Figure A.8 – PDF tool open state
            </Link>
          </li>
          <li>
            <Link to="/appendix#fig-a9">
              Figure A.9 – Image tool open state
            </Link>
          </li>
          <li>
            <Link to="/appendix#fig-a10">
              Figure A.10 – AI tool open state
            </Link>
          </li>
          <li>
            <Link to="/appendix#fig-a11">
              Figure A.11 – Admin dashboard detailed view
            </Link>
          </li>

        </ul>
      </div>
    </motion.div>
  );
}