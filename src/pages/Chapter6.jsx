import { motion } from "framer-motion";
import adminDashboard from "../assets/admin-dashboard.png";

export default function Chapter6() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Chapter 6 – Admin Panel & Management</h1>

      {/* 6.1 INTRODUCTION */}
      <div className="chapter-card">
        <h2>6.1 Introduction to Admin Panel</h2>
        <p>
          The <strong>Admin Panel</strong> is a dedicated management interface of
          the <strong>ToolNest</strong> platform that allows administrators
          to supervise, control, and maintain the system effectively. It provides
          centralized access to monitoring tools, analytics, and system controls.
        </p>
        <p>
          Through the admin dashboard, administrators gain real‑time visibility
          into system usage, tool performance, and user activities, ensuring
          smooth operation and scalability of the platform.
        </p>
      </div>

      {/* ✅ FIGURE 6.1 – ADMIN DASHBOARD (ANCHOR POINT) */}
      <div className="workflow-section" id="fig-6-1">
        <img
          src={adminDashboard}
          alt="Admin Dashboard"
          className="workflow-image"
        />
        <p className="img-caption">
          <strong>Figure 6.1:</strong> Admin Dashboard of ToolNest showing
          system metrics, analytics, and management features
        </p>
      </div>

      {/* 6.2 ROLES & RESPONSIBILITIES */}
      <div className="chapter-card">
        <h2>6.2 Admin Roles and Responsibilities</h2>
        <ul className="role-list">
          <li>Managing and configuring available tools on the platform</li>
          <li>Monitoring overall system usage and performance metrics</li>
          <li>Reviewing user activity, feedback, and audit logs</li>
          <li>Moderating suggestions and administrative actions</li>
          <li>Ensuring system stability and availability</li>
        </ul>
      </div>

      {/* 6.3 ADMIN AUTHORIZATION */}
      <div className="chapter-card">
        <h2>6.3 Admin Authorization Mechanism</h2>
        <p>
          Admin‑level functionalities are protected using role‑based access
          control. Only users with valid administrative roles are permitted to
          access management APIs and sensitive resources.
        </p>

        <pre className="code-block">
{`def get_current_admin(authorization: str = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Not authenticated")

    token = authorization.split(" ", 1)[1]
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    if payload.get("role") not in ("admin", "superadmin"):
        raise HTTPException(status_code=403, detail="Forbidden")
    return payload`}
        </pre>

        <p className="code-caption">
          <em>
            Code Snippet 6.1: Role‑based authorization logic to restrict admin
            panel access.
          </em>
        </p>
      </div>

      {/* 6.4 TOOL MANAGEMENT */}
      <div className="chapter-card">
        <h2>6.4 Tool Management and Monitoring</h2>
        <p>
          The admin panel provides control over platform tools, allowing
          administrators to enable or disable tools as required. Usage metrics
          help identify popular tools and monitor system activity.
        </p>
        <p>
          This monitoring capability supports performance optimization and
          informed decision‑making for future enhancements.
        </p>
      </div>

      {/* 6.5 USER MANAGEMENT & ANALYTICS */}
      <div className="chapter-card">
        <h2>6.5 User Management and Analytics</h2>
        <p>
          The platform maintains analytical data such as total users, daily usage
          statistics, and feedback counts. Visual analytics assist administrators
          in understanding user behavior and engagement trends.
        </p>
        <p>
          These insights contribute to continuous system improvement and better
          user experience.
        </p>
      </div>

      {/* 6.6 SECURITY */}
      <div className="chapter-card">
        <h2>6.6 Security and Access Control</h2>
        <p>
          Security is enforced through token‑based authentication and role‑based
          authorization. Sensitive administrative operations are shielded from
          unauthorized access.
        </p>
        <p>
          This controlled access model ensures data integrity, system reliability,
          and compliance with organizational security standards.
        </p>
      </div>
    </motion.div>
  );
}