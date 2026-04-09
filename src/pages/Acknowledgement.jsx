import { motion } from "framer-motion";

export default function Acknowledgement() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Acknowledgement</h1>

      <div className="ack-card">
        <p>
          I would like to express my sincere gratitude to
          <strong> Tata Technologies</strong> for providing me with the
          opportunity to undertake this internship and gain exposure to
          real‑world industry practices.
        </p>

        <p>
          I am especially grateful to my internship mentor,
          <strong> Mr. Aditya Vernekar</strong>, for his constant guidance,
          support, and encouragement throughout the internship period. His
          mentorship significantly contributed to my professional growth and
          successful completion of this project.
        </p>

        <p>
          I would also like to thank all members of the
          <strong> Blue Bird Team</strong> at Tata Technologies for their
          cooperation, collaboration, and knowledge sharing, which provided me
          with valuable insights into teamwork and professional workflows.
        </p>

        <p>
          I sincerely acknowledge
          <strong> Sam Higginbottom University of Agriculture, Technology and Sciences</strong>
          for providing the academic foundation and continuous support that
          enabled me to effectively apply theoretical concepts during this
          internship.
        </p>

        <p>
          Lastly, I would like to thank my family and friends for their constant
          motivation and encouragement throughout this journey.
        </p>

        <div className="ack-sign">
          <strong>— Anshika Pandey</strong>
        </div>
      </div>
    </motion.div>
  );
}