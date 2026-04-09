import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TableOfContents() {
  const sections = [
    { title: "Title Page", path: "/" },
    { title: "Declaration", path: "/declaration" },
    { title: "Acknowledgement", path: "/acknowledgement" },
    { title: "Certificate", path: "/certificate" },
    { title: "Abstract", path: "/abstract" },
    { title: "List of Figures", path: "/list-of-figures" },

    { title: "Chapter 1 – Overview of the Organisation", path: "/chapter-1" },
    { title: "Chapter 2 – Internship Overview", path: "/chapter-2" },
    { title: "Chapter 3 – Project Overview", path: "/chapter-3" },
    { title: "Chapter 4 – System Architecture & Design", path: "/chapter-4" },
    { title: "Chapter 5 – Tool Categories & Modules", path: "/chapter-5" },
    { title: "Chapter 6 – Admin Panel & Management", path: "/chapter-6" },
    { title: "Chapter 7 – Deployment & Implementation", path: "/chapter-7" },
    { title: "Chapter 8 – Challenges Faced & Solutions", path: "/chapter-8" },
    { title: "Chapter 9 – Conclusion & Future Scope", path: "/chapter-9" },

    { title: "References", path: "/references" },
    { title: "Appendix", path: "/appendix" },
  ];

  return (
    <motion.div
      className="toc-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Table of Contents</h1>

      <div className="toc-grid">
        {sections.map((item, index) => (
          <Link to={item.path} key={index} className="toc-link">
            <motion.div
              whileHover={{ y: -6 }}
              className="toc-card"
            >
              {item.title}
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}