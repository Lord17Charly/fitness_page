// App.tsx
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import FitnessClasses from "./components/FitnessClasses";
import Footer from "./components/Footer";
import ExerciseList from "./components/ExerciseList";
import { Routes, Route } from "react-router-dom";
import Contacto from "./components/Contacto";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/classes" element={<FitnessClasses />} />
        <Route path="/exercises" element={<ExerciseList />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/personal-training" element={<ExerciseList />} />
        <Route path="/contactanos" element={<Contacto />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
