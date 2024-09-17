import Navbar from "./Scenes/Navbar";
import Landing from "./Scenes/Landing";
// import MySkills from "./Scenes/MySkills";
import ModelPage from "./Scenes/ModelPage";
import Contact from "./Scenes/Contact";
import Footer from "./Scenes/Footer";
function App() {
  return (
    <div className="app bg-deep-blue">
      <Navbar />
      <Landing />
      {/* <MySkills /> */}
      <ModelPage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
