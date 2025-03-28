import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Menu from "./components/menu";
import Nav from "./components/nav";
import Contact from "./components/contact";
import FAQ from "./components/faq";
import About from "./components/about";

const App = () => {
  return (
    <div className="bg-[#FFF2E5]">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
