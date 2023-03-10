import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Project from "./components/Project";
const App =()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HeroSection" element={<HeroSection />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;