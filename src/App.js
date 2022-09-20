import "./App.css";
import "./mobil.css";
import BigFlex from "./components/big-flex/BigFlex";
import SmallFlex from "./components/small-flex/SmallFlex";
import ProjectsFlex from "./components/projects-flex/ProjectsFlex";
import Navbar from "./components/navbar/Navbar";
import TopInfo from "./components/top-info/TopInfo";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <TopInfo />
      <BigFlex />
      <SmallFlex />
      <ProjectsFlex />
      <Footer />
    </div>
  );
}

export default App;
