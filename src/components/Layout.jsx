import { useState, useEffect } from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import PageNavigation from "./PageNavigation";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [printMode, setPrintMode] = useState(false);

  // ✅ Toggle class on BODY (IMPORTANT)
  useEffect(() => {
    if (printMode) {
      document.body.classList.add("print-mode");
    } else {
      document.body.classList.remove("print-mode");
    }

    return () => {
      document.body.classList.remove("print-mode");
    };
  }, [printMode]);

  return (
    <>
      <TopBar
  onMenuClick={() => setOpen(true)}
  onPrintToggle={() => setPrintMode(!printMode)}
  printMode={printMode}
/>


      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
      />

      <main>
        {children}
        <PageNavigation />
      </main>
      <Footer />
      
    </>
  );
}