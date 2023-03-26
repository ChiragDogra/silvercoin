import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Blog1 from "./pages/blog/Blog1";
import Blog2 from "./pages/blog/Blog2";
import Blog3 from "./pages/blog/Blog3";
import Audit from "./pages/services/Audit";
import DirectTax from "./pages/services/DirectTax";
import GST from "./pages/services/GST";
import CompReg from "./pages/services/CompReg";
import MarketRes from "./pages/services/MarketRes";

function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="services" element={<Services />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes> */}

       {/* <Blog1 /> */}
       {/* <Blog2 /> */}
       {/* <Blog3/> */}

       {/* <Audit/> */}
       {/* <DirectTax/> */}
       {/* <GST/> */}
       {/* <CompReg/> */}
       <MarketRes/>
      <Footer />
    </>
  );
}

export default App;
