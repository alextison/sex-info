import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quizz from "../Quizz/Quizz";
import Documentation from "../Documentation/Documentation";
import "./App.css";
import Home from "../Home/Home";

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <Routes>
          <Route path="sex-info" element={<Home />} />
          <Route path="Quizz" element={<Quizz />} />
          <Route path="documentation" element={<Documentation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
