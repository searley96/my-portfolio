import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./Components/About/AboutPage";
import ContactPage from "./Components/Contact/ContactPage";
import CodePage from "./Components/Code/CodePage";
import UXPage from "./Components/UX/UXPage";
import NavBarPage from "./Components/NavBar/NavBarPage";

function App() {
  return (
    <main>
      <Router>
        <div>
          <NavBarPage />
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/code" element={<CodePage />} />
            <Route path="/ux" element={<UXPage />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
