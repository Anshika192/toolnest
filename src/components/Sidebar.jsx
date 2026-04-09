import { NavLink } from "react-router-dom";
import { pages } from "../utils/pages";

export default function Sidebar({ open, onClose, search = "" }) {
  const query = search.toLowerCase();

  const filtered = pages.filter((p) =>
    p.label.toLowerCase().includes(query)
  );

  const linkClass = ({ isActive }) =>
    isActive ? "sidebar-link active" : "sidebar-link";

  return (
    <>
      {open && <div className="overlay" onClick={onClose} />}

      <div className={`sidebar ${open ? "open" : ""}`}>
        <h3>Contents</h3>

        <nav>
          {filtered.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={linkClass}
              onClick={onClose}  // ✅ auto-close here
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}