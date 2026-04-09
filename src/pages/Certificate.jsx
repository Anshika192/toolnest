import { motion } from "framer-motion";

export default function Certificate() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Certificate</h1>

      <div className="certificate-card">
        <p>
          This is to certify that <strong>Ms. Anshika Pandey</strong>, a student of{" "}
          <strong>B.Tech – Computer Science & Engineering (VIAT Department)</strong>,
          from{" "}
          <strong>
            Sam Higginbottom University of Agriculture, Technology and Sciences
          </strong>
          , has successfully completed her internship at{" "}
          <strong>Tata Technologies</strong>.
        </p>

        <p>
          The internship was carried out for a duration of{" "}
          <strong>15 January 2026 to 30 April 2026</strong>. During this period, she
          worked as a part of the <strong>Blue Bird Team</strong> and demonstrated
          sincerity, dedication, and a strong willingness to learn.
        </p>

        <p>
          Her performance throughout the internship was found to be satisfactory,
          and she successfully applied her technical knowledge to real‑world project
          development under professional guidance.
        </p>

        <div className="certificate-footer">
  <div className="certificate-left">
    <p><strong>Mentor</strong></p>
    <p className="mentor-name">Mr. Aditya Vernekar</p>
    <p>Tata Technologies</p>
  </div>

  <div className="certificate-right">
    <p><strong>Date:</strong> 30 April 2026</p>
    <p><strong>Place:</strong> Pune, Maharashtra</p>

    <div className="sign-block">
      <div className="sign-line"></div>
      <p className="sign-label">Authorized Signatory</p>
      <p className="sign-company">Tata Technologies</p>
    </div>
  </div>
</div>
</div>
    </motion.div>
  );
}