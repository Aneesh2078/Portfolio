import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import ProgrammingSkills from "./Components/ProgrammingSkills/ProgrammingSkills";
import Achievements from "./Components/Achievements/Achievements";
import Workshops from "./Components/Workshops/Workshops";
import Footer from "./Components/Footer/Footer";
import BackToTop from "./Components/BackToTop/BackToTop";


function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Education/>
      <ProgrammingSkills/>
      <Achievements/>
      <Workshops/>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;