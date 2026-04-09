import { Link } from "react-router-dom";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <div className="overlay" onClick={onClose}></div>}

      <div className={`sidebar ${open ? "open" : ""}`}>
        <h3>Contents</h3>

        <nav>
          <Link to="/" onClick={onClose}>Title Page</Link>
          <Link to="/toc" onClick={onClose}>Table of Contents</Link>
          <Link to="/declaration" onClick={onClose}>Declaration</Link>
          <Link to="/acknowledgement" onClick={onClose}>Acknowledgement</Link>
          <Link to="/certificate" onClick={onClose}>Certificate</Link>
          <Link to="/abstract" onClick={onClose}>Abstract</Link>

          <Link to="/chapter-1" onClick={onClose}>Chapter 1 – Organisation</Link>
          <Link to="/chapter-2" onClick={onClose}>Chapter 2 – Internship</Link>
          <Link to="/chapter-3" onClick={onClose}>Chapter 3 – Project</Link>
          <Link to="/chapter-4" onClick={onClose}>Chapter 4 – Architecture</Link>
          <Link to="/chapter-5" onClick={onClose}>Chapter 5 – Tools</Link>
          <Link to="/chapter-6" onClick={onClose}>Chapter 6 – Admin</Link>
          <Link to="/chapter-7" onClick={onClose}>Chapter 7 – Deployment</Link>
          <Link to="/chapter-8" onClick={onClose}>Chapter 8 – Challenges</Link>
          <Link to="/chapter-9" onClick={onClose}>Chapter 9 – Learnings</Link>
          <Link to="/chapter-10" onClick={onClose}>Chapter 10 – Conclusion</Link>

          <Link to="/references" onClick={onClose}>References</Link>
          <Link to="/appendix" onClick={onClose}>Appendix</Link>
        </nav>
      </div>
    </>
  );
}