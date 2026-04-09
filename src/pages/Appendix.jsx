import { motion } from "framer-motion";

import userLogin from "../assets/user-login.png";
import adminLogin from "../assets/admin-login.png";
import userDashboard from "../assets/user-dashboard.png";

import pdfTools from "../assets/pdf-tools.png";
import imageTools from "../assets/image-tools.png";
import documentTools from "../assets/document-tools.png";

import pdfToolOpen from "../assets/pdf-tool-open.png";
import imageToolOpen from "../assets/image-tool-open.png";
import aiToolOpen from "../assets/ai-tool-open.png";

import aiTools from "../assets/ai-tools.png";
import adminDashboard from "../assets/admin-dashboard (2).png";

export default function Appendix() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Appendix</h1>

      {/* A.1 USER LOGIN */}
      <div className="appendix-section" id="fig-a1">
        <h2>A.1 User Login Interface</h2>
        <img src={userLogin} className="appendix-image" alt="User Login" />
        <p className="img-caption">
          Figure A.1: User login interface for authenticated access
        </p>
      </div>

      {/* A.2 ADMIN LOGIN */}
      <div className="appendix-section" id="fig-a2">
        <h2>A.2 Admin Login Interface</h2>
        <img src={adminLogin} className="appendix-image" alt="Admin Login" />
        <p className="img-caption">
          Figure A.2: Admin login screen secured with role-based access
        </p>
      </div>

      {/* A.3 USER DASHBOARD */}
      <div className="appendix-section" id="fig-a3">
        <h2>A.3 User Dashboard</h2>
        <img src={userDashboard} className="appendix-image" alt="User Dashboard" />
        <p className="img-caption">
          Figure A.3: User dashboard displaying categorized tools
        </p>
      </div>

      {/* A.4 PDF TOOLS CATEGORY */}
      <div className="appendix-section" id="fig-a4">
        <h2>A.4 PDF Tools – Category View</h2>
        <img src={pdfTools} className="appendix-image" alt="PDF Tools" />
        <p className="img-caption">
          Figure A.4: PDF tools category showing available PDF utilities
        </p>
      </div>

      {/* A.5 IMAGE TOOLS CATEGORY */}
      <div className="appendix-section" id="fig-a5">
        <h2>A.5 Image Tools – Category View</h2>
        <img src={imageTools} className="appendix-image" alt="Image Tools" />
        <p className="img-caption">
          Figure A.5: Image tools category with multiple image-processing options
        </p>
      </div>

      {/* A.6 DOCUMENT TOOLS */}
      <div className="appendix-section" id="fig-a6">
        <h2>A.6 Document Tools – Category View</h2>
        <img src={documentTools} className="appendix-image" alt="Document Tools" />
        <p className="img-caption">
          Figure A.6: Document tools such as Word to PDF, QR Generator, PPT to Excel
        </p>
      </div>

      {/* A.7 AI TOOLS */}
      <div className="appendix-section" id="fig-a7">
        <h2>A.7 AI Tools Interface</h2>
        <img src={aiTools} className="appendix-image" alt="AI Tools" />
        <p className="img-caption">
          Figure A.7: AI-based Meeting MOM Generator interface
        </p>
      </div>

      {/* A.8 PDF TOOL OPEN */}
      <div className="appendix-section" id="fig-a8">
        <h2>A.8 PDF Tool – Open Interface</h2>
        <img src={pdfToolOpen} className="appendix-image" alt="PDF Tool Open" />
        <p className="img-caption">
          Figure A.8: Open state of PDF tool showing upload and execution workflow
        </p>
      </div>

      {/* A.9 IMAGE TOOL OPEN */}
      <div className="appendix-section" id="fig-a9">
        <h2>A.9 Image Tool – Open Interface</h2>
        <img src={imageToolOpen} className="appendix-image" alt="Image Tool Open" />
        <p className="img-caption">
          Figure A.9: Open state of image tool showing user interaction layout
        </p>
      </div>

      {/* A.10 AI TOOL OPEN */}
      <div className="appendix-section" id="fig-a10">
        <h2>A.10 AI Tool – Open Interface</h2>
        <img src={aiToolOpen} className="appendix-image" alt="AI Tool Open" />
        <p className="img-caption">
          Figure A.10: Open state of AI tool showing user interaction layout
        </p>
      </div>

      {/* A.11 ADMIN DASHBOARD */}
      <div className="appendix-section" id="fig-a11">
        <h2>A.11 Admin Dashboard</h2>
        <img src={adminDashboard} className="appendix-image" alt="Admin Dashboard" />
        <p className="img-caption">
          Figure A.11: Admin dashboard showing analytics, usage trends, and controls
        </p>
      </div>
    </motion.div>
  );
}
