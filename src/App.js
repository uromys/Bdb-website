import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import Home from './pages/Home';
import Tasting from './pages/Tasting';
import Chase from './pages/Chase';
import Pic from './pages/Pic';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasting" element={<Tasting />} />
        <Route path="/beer-chase" element={<Chase />} />
        <Route path="/pic-perm" element={<Pic />} />
      </Routes>
    </Router>
  );
}

export default App;
