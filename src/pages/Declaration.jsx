import { motion } from "framer-motion";

export default function Declaration() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Declaration</h1>

      <div className="declaration-card">
        <p>
          I hereby declare that the internship report titled
          <strong> “ToolNest – A Unified Productivity Platform”</strong>
          is the original work carried out by me during my internship period at
          <strong> Tata Technologies</strong>.
        </p>

        <p>
          The work documented in this report is based on the knowledge,
          experience, and practical training acquired during the internship
          under professional guidance. All information presented in this report
          is true to the best of my knowledge, and appropriate references have
          been provided wherever necessary.
        </p>

        <p>
          I further declare that this report has not been submitted previously,
          either wholly or in part, for the award of any academic degree or
          professional certification.
        </p>

        <div className="decl-footer">
          <div>
            <p><strong>Name:</strong> Anshika Pandey</p>
            <p><strong>Program:</strong> B.Tech – Computer Science & Engineering</p>
            <p>
              <strong>Institution:</strong> Sam Higginbottom University of
              Agriculture, Technology and Sciences
            </p>
          </div>

          <div>
            <p><strong>Date:</strong> 30 April 2026</p>
            <p><strong>Place:</strong> Prayagraj, Uttar Pradesh</p>
          </div>
        </div>

        <div className="decl-signature">
          <div className="decl-line"></div>
          <p><strong>Anshika Pandey</strong></p>
          <p>Signature</p>
        </div>
      </div>
    </motion.div>
  );
}