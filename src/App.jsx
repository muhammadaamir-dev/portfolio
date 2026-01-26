import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./Components/Layout.jsx"

// Pages
import Home from "./Pages/Home.jsx";
import AllProjects from "./Pages/AllProjects.jsx";
import CompleteSkill from "./Pages/CompleteSkill.jsx";
import AllExperience from "./Pages/AllExperience.jsx";
import Educations from "./Pages/Educations.jsx";
import CertificatesSection from "./Pages/CertificatesSection.jsx";
import Learning from "./Pages/Learning.jsx";
import NotFound from "./Pages/NotFound.jsx";

const App = () => {
  const location = useLocation();

  // Debug: Log route changes
  useEffect(() => {
    console.log("📍 Current Route:", location.pathname);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<AllProjects />} />
        <Route path="skills" element={<CompleteSkill />} />
        <Route path="experience" element={<AllExperience />} />
        <Route path="education" element={<Educations />} />
        <Route path="certificates" element={<CertificatesSection />} />
        <Route path="learning" element={<Learning />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;