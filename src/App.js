import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route exact path="/" element={<TextForm heading="ENTER THE TEXT TO ANALYZE BELOW" />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
