import { motion } from "framer-motion";

/* ✅ IMPORT IMAGES FROM src/assets */
import systemArchitecture from "../assets/system-architecture.png";
import dataFlow from "../assets/data-flow.png";
import userAdminWorkflow from "../assets/user-admin-workflow.jpg";

export default function Chapter4() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">
        Chapter 4 – System Architecture &amp; Design
      </h1>

      {/* 4.1 OVERALL SYSTEM ARCHITECTURE */}
      <div className="chapter-card">
        <h2>4.1 Overall System Architecture</h2>

        <p>
          The system architecture of <strong>BlueNexus</strong> follows a modern
          full‑stack design approach where the presentation layer, business logic,
          and data storage layers are clearly separated. This modular architecture
          ensures better scalability, maintainability, and ease of enhancement.
        </p>

        <p>
          The platform supports both end users and administrators through
          role‑based access control, ensuring secure and structured interaction
          with system features.
        </p>

        {/* ✅ ARCHITECTURE OVERVIEW DIAGRAM */}
        <div className="workflow-section">
          <img
            src={systemArchitecture}
            alt="System Architecture Overview"
            className="workflow-image"
          />
          <p className="img-caption">
            <em>
              Figure 4.1: High‑level system architecture showing interaction
              between users, frontend, backend, and database components.
            </em>
          </p>
        </div>
      </div>

      {/* 4.2 FRONTEND ARCHITECTURE */}
      <div className="chapter-card">
        <h2>4.2 Frontend Architecture</h2>

        <p>
          The frontend of BlueNexus is developed using <strong>React</strong> along
          with <strong>Vite</strong> as the build tool, providing fast development
          cycles and optimized performance.
        </p>

        <p>
          A component‑based architecture ensures reusability and
          maintainability, while client‑side routing enables smooth navigation
          across different modules.
        </p>
      </div>

      {/* 4.3 BACKEND ARCHITECTURE */}
      <div className="chapter-card">
        <h2>4.3 Backend Architecture</h2>

        <p>
          The backend is implemented using <strong>FastAPI</strong>, offering
          high‑performance RESTful APIs for handling authentication, requests,
          and tool processing operations.
        </p>

        <p>
          Token‑based authentication mechanisms ensure secure access to APIs,
          differentiating privileges between users and administrators.
        </p>

        {/* ✅ DATA FLOW DIAGRAM */}
        <div className="workflow-section">
          <img
            src={dataFlow}
            alt="Data Flow Diagram"
            className="workflow-image"
          />
          <p className="img-caption">
            <em>
              Figure 4.2: Data flow diagram illustrating request–response flow
              between frontend, backend services, and database.
            </em>
          </p>
        </div>

        {/* ✅ AUTHENTICATION CODE SNIPPET */}
        <pre className="code-block">
{`def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):
    try:
        data = decode_token(token)
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

    user = db.query(User).filter(User.id == int(data.get("sub"))).first()
    if not user:
        raise HTTPException(status_code=401, detail="User not found")

    return user`}
        </pre>

        <p className="code-caption">
          <em>
            Code Snippet 4.1: Token‑based authentication logic for secure API
            access.
          </em>
        </p>
      </div>

      {/* 4.4 DATABASE DESIGN */}
      <div className="chapter-card">
        <h2>4.4 Database Design Overview</h2>

        <p>
          <strong>PostgreSQL</strong> is used as the primary relational database to
          store structured data such as user information, tool metadata, logs,
          and feedback records.
        </p>

        <p>
          Database interactions are managed using <strong>SQLAlchemy ORM</strong>,
          ensuring scalability and data integrity.
        </p>
      </div>

      {/* 4.5 USER & ADMIN WORKFLOW */}
      <div className="chapter-card">
        <h2>4.5 User and Admin Workflow</h2>

        <p>
          Users interact with the platform through a centralized dashboard,
          while administrators manage tools, analytics, and feedback through an
          extended admin interface.
        </p>

        <p>
          This separation ensures controlled access, security, and efficient
          system management.
        </p>

        {/* ✅ USER & ADMIN WORKFLOW DIAGRAM */}
        <div className="workflow-section">
          <img
            src={userAdminWorkflow}
            alt="User and Admin Workflow Diagram"
            className="workflow-image"
          />
          <p className="img-caption">
            <em>
              Figure 4.3: Workflow diagram depicting interaction between users,
              administrators, and system modules.
            </em>
          </p>
        </div>
      </div>
    </motion.div>
  );
}