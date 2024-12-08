import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Model from "./pages/modelPage";
function App() {
  return (
    <div className="app bg-deep-blue">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modelPage" element={<Model />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
