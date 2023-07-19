import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import About from "./views/About";
import ProjectPage from "./views/ProjectPage";
import ServicePage from "./views/ServicePage";
import TeamPage from "./views/TeamPage";
import BlogPage from "./views/BlogPage";
import BlogSingle from "./views/BlogSingle";
import Contact from "./views/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Spinner from "./components/Spinner";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Spinner />
      <div className="App overflow-hidden">
        <div className="w-full flex justify-center bg-white">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
