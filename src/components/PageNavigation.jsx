import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { pageOrder } from "../utils/pageOrder";

export default function PageNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = pageOrder.indexOf(location.pathname);
  const prevPage = pageOrder[currentIndex - 1];
  const nextPage = pageOrder[currentIndex + 1];

  // 🎹 Keyboard navigation effect
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        (event.key === "ArrowRight" || event.key === "PageDown") &&
        nextPage
      ) {
        navigate(nextPage);
      }

      if (
        (event.key === "ArrowLeft" || event.key === "PageUp") &&
        prevPage
      ) {
        navigate(prevPage);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextPage, prevPage, navigate]);

  return (
    <div className="page-nav">
      {prevPage && (
        <button onClick={() => navigate(prevPage)}>← Previous</button>
      )}
      {nextPage && (
        <button onClick={() => navigate(nextPage)}>Next →</button>
      )}
    </div>
  );
}
