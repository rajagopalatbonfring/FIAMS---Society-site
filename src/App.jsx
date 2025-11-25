import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;