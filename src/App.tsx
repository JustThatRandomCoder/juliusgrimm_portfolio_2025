import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Pages
import IndexPage from "./pages/IndexPage";
import InfoPage from "./pages/InfoPage";

// Project pages
import FestiFlyProject from "./pages/projects/Festifly";
import VibeVoteProject from "./pages/projects/VibeVote";
import SkyViewProject from "./pages/projects/SkyView";

import "./App.css";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/projects/festifly" element={<FestiFlyProject />} />
        <Route path="/projects/vibevote" element={<VibeVoteProject />} />
        <Route path="/projects/skyview" element={<SkyViewProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
