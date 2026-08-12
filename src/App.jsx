import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PublicationPage from "./pages/publicationPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publication" element={<PublicationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;