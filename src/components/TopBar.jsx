export default function TopBar({
  onMenuClick,
  onPrintToggle,
  printMode = false,   // ✅ safe default
}) {
  return (
    <header className="top-bar">
      {/* Left: Sidebar menu */}
      <button
        className="menu-btn"
        onClick={onMenuClick}
        aria-label="Open menu"
        disabled={printMode}            // ✅ print mode me sidebar disabled
        title={printMode ? "Disabled in Print Mode" : "Open Menu"}
      >
        ☰
      </button>

      {/* Center: Report title */}
      <div className="topbar-center">
        Internship Report
      </div>

      {/* Right: Print mode toggle */}
      <button
        className="print-btn"
        onClick={onPrintToggle}
        aria-label={printMode ? "Exit print mode" : "Enter print mode"}
        title={printMode ? "Exit Print Mode" : "Enable Print Mode"}
      >
        {printMode ? "✕ Exit Print Mode" : "🖨 Print Mode"}
      </button>
    </header>
  );
}