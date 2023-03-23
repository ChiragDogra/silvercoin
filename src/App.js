import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="services" element={<Services />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
