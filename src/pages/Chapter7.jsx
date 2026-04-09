import { motion } from "framer-motion";

export default function Chapter7() {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Chapter 7 – Deployment & Implementation</h1>

      {/* 7.1 DEPLOYMENT OVERVIEW */}
      <div className="chapter-card">
        <h2>7.1 Deployment Overview</h2>
        <p>
          Deployment is an essential phase of the application lifecycle, as it
          ensures that the developed system is accessible and functional in a
          real‑world environment. The <strong>ToolNest</strong> platform
          was implemented using a modular architecture that supports both local
          and cloud‑based execution.
        </p>
      </div>

      {/* 7.2 FRONTEND DEPLOYMENT */}
      <div className="chapter-card">
        <h2>7.2 Frontend Deployment</h2>
        <p>
          The frontend of the application was developed using
          <strong> React</strong> with <strong>Vite</strong>, which provides fast
          build times and optimized production bundles. The frontend was tested
          locally to ensure responsiveness and smooth user interaction across
          different devices.
        </p>
        <p>
          Component‑based design and routing mechanisms allow seamless
          navigation throughout the application, enhancing overall user
          experience.
        </p>
      </div>

      {/* 7.3 BACKEND IMPLEMENTATION */}
      <div className="chapter-card">
        <h2>7.3 Backend Implementation</h2>
        <p>
          The backend services were implemented using
          <strong> FastAPI</strong>, which handles API requests, business logic,
          authentication, and tool processing. RESTful APIs enable efficient
          interaction between the frontend and backend components.
        </p>
        <p>
          Backend implementation ensures proper validation of inputs, secure
          request handling, and reliable communication between system layers.
        </p>
      </div>

      {/* 7.4 DATABASE INTEGRATION */}
      <div className="chapter-card">
        <h2>7.4 Database Integration</h2>
        <p>
          <strong>PostgreSQL</strong> was integrated as the primary database for
          storing application data such as user records, logs, tool usage
          statistics, and administrative information. The database structure
          supports data integrity, consistency, and scalability.
        </p>
        <p>
          Seamless integration between the backend and database ensures reliable
          data storage and efficient retrieval during application execution.
        </p>

        {/* ✅ CODE SNIPPET – DEPLOYMENT & DB CONFIG */}
        <pre className="code-block">
{`SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL", DEFAULT_URL)

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    pool_pre_ping=True
)

SessionLocal = sessionmaker(
    bind=engine,
    autocommit=False,
    autoflush=False
)`}
        </pre>

        <p className="code-caption">
          <em>
            Code Snippet 7.1: Environment‑based database configuration and session
            management used during deployment.
          </em>
        </p>
      </div>

      {/* 7.5 APPLICATION EXECUTION FLOW */}
      <div className="chapter-card">
        <h2>7.5 Application Execution Flow</h2>
        <p>
          When a user interacts with the application, requests are initiated
          from the frontend and routed to the backend APIs. The backend processes
          the request, performs the required logic, and interacts with the
          database whenever necessary.
        </p>
        <p>
          Once execution is complete, the processed response is returned to the
          frontend and displayed to the user. This flow ensures real‑time
          processing and a smooth user experience.
        </p>
      </div>

      {/* 7.6 SOURCE CODE MANAGEMENT */}
      <div className="chapter-card">
        <h2>7.6 Source Code Management and Version Control</h2>
        <p>
          The complete source code of the ToolNest platform was managed
          using <strong>Git‑based version control practices</strong>. All
          development activities, feature implementations, and improvements
          were tracked through a centralized Git repository.
        </p>
        <p>
          Version control enabled structured development, easier maintenance,
          reliable change tracking, and safe deployment of new features.
        </p>

        <p>
          <strong>Source Code Repository:</strong><br />
          <a
            href="https://github.com/your-username/my-applications"
            target="_blank"
            rel="noopener noreferrer"
            className="deployment-link"
          >
            https://github.com/your-username/my-applications
          </a>
        </p>
      </div>

      {/* 7.7 DEPLOYMENT ACCESS */}
      <div className="chapter-card">
        <h2>7.7 Deployment Access</h2>
        <p>
          The application was successfully deployed in a web‑based environment
          for testing and demonstration purposes. This deployment validates the
          integration of frontend, backend, and database components.
        </p>

        <p>
          <strong>Live Application URL:</strong><br />
          <a
            href="https://your-live-deployment-link"
            target="_blank"
            rel="noopener noreferrer"
            className="deployment-link"
          >
            https://your-live-deployment-link
          </a>
        </p>

        <p>
          In addition to the current deployment, the system architecture also
          supports <strong>internal organizational deployment</strong>. This
          internal deployment is planned as a future enhancement to enable
          controlled access, enhanced security, and integration with internal
          infrastructure.
        </p>
      </div>
    </motion.div>
  );
}
