import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/homepage/Home";
import { Footer } from "./components/Footer";
import { WebDesign } from "./components/pages/webdesign/webdesign.jsx";
import { AppDesign } from "./components/pages/appdesign/AppDesign.jsx";
import { GraphicDesign } from "./components/pages/graphicdesign/GraphicDesign.jsx";
import { About } from "./components/pages/about/About.jsx";
import { Locations } from "./components/pages/locations/Locations.jsx";
import { Contact } from "./components/pages/contact/Contact.jsx";

function App() {
  return (
    <Router>
      <div className=" sm:mt-[64px] lg flex flex-col items-center">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webdesign" element={<WebDesign />} />
          <Route path="/appdesign" element={<AppDesign />} />
          <Route path="/graphicdesign" element={<GraphicDesign />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
