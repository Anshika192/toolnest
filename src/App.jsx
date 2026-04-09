import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./components/Layout";

import Title from "./pages/Title";
import TableOfContents from "./pages/TableOfContents";
import Declaration from "./pages/Declaration";
import Acknowledgement from "./pages/Acknowledgement";
import Certificate from "./pages/Certificate";
import Abstract from "./pages/Abstract";
import ListOfFigures from "./pages/ListOfFigures";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Chapter3 from "./pages/Chapter3";
import Chapter4 from "./pages/Chapter4";
import Chapter5 from "./pages/Chapter5";
import Chapter6 from "./pages/Chapter6";
import Chapter7 from "./pages/Chapter7";
import Chapter8 from "./pages/Chapter8";
import Chapter9 from "./pages/Chapter9";
import References from "./pages/References";
import Appendix from "./pages/Appendix";

/* 🔥 Wrapper for animated routes */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Title /></PageWrapper>} />
        <Route path="/toc" element={<PageWrapper><TableOfContents /></PageWrapper>} />
        <Route path="/declaration" element={<PageWrapper><Declaration /></PageWrapper>} />
        <Route path="/acknowledgement" element={<PageWrapper><Acknowledgement /></PageWrapper>} />
        <Route path="/certificate" element={<PageWrapper><Certificate /></PageWrapper>} />
        <Route path="/abstract" element={<PageWrapper><Abstract /></PageWrapper>} />
        <Route path="/list-of-figures" element={<PageWrapper>< ListOfFigures/></PageWrapper>} />
        
        <Route path="/chapter-1" element={<PageWrapper><Chapter1 /></PageWrapper>} />
        <Route path="/chapter-2" element={<PageWrapper><Chapter2 /></PageWrapper>} />
        <Route path="/chapter-3" element={<PageWrapper><Chapter3 /></PageWrapper>} />
        <Route path="/chapter-4" element={<PageWrapper><Chapter4 /></PageWrapper>} />
        <Route path="/chapter-5" element={<PageWrapper><Chapter5 /></PageWrapper>} />
        <Route path="/chapter-6" element={<PageWrapper><Chapter6 /></PageWrapper>} />
        <Route path="/chapter-7" element={<PageWrapper><Chapter7 /></PageWrapper>} />
        <Route path="/chapter-8" element={<PageWrapper><Chapter8 /></PageWrapper>} />
        <Route path="/chapter-9" element={<PageWrapper><Chapter9 /></PageWrapper>} />

        <Route path="/references" element={<PageWrapper><References /></PageWrapper>} />
        <Route path="/appendix" element={<PageWrapper><Appendix /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

/* 🔥 Page animation wrapper (page fold / slide feel) */
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}
