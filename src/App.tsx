import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import FitnessClasses from "./components/FitnessClasses";
import Footer from "./components/Footer";
import ExerciseList from "./components/ExerciseList";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FitnessClasses />
      <Footer />
      <ExerciseList></ExerciseList>
    </>
  );
}
export default App;
