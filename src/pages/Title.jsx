import { motion } from "framer-motion";
import companyLogo from "../assets/company.png";
import collegeLogo from "../assets/college.png";

export default function Title() {
  return (
    <motion.div
      className="title-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="title-content"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h1>ToolNest</h1>
        <h2>A Unified Productivity Platform</h2>

        <p className="meta">
  Internship Duration<br />
  15 January 2026 – 30 April 2026
</p>

<div className="submit-info">
  {/* Submitted By */}
  <div className="submit-block">
    <img src={collegeLogo} alt="College Logo" className="submit-logo" />
    <p>
      <strong>Submitted By</strong><br />
      Anshika Pandey<br />
      B.Tech – Computer Science & Engineering<br />
      <em>(VIAT Department)</em><br />
      Sam Higginbottom University of Agriculture,<br />
      Technology and Sciences
    </p>
  </div>

  {/* Submitted To */}
  <div className="submit-block">
    <img src={companyLogo} alt="Company Logo" className="submit-logo" />
    <p>
      <strong>Submitted To</strong><br />
      Tata Technologies<br />
      Internship Mentor
    </p>
  </div>
</div>
      </motion.div>
    </motion.div>
  );
}
