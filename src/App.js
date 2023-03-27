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
import Blog4 from "./pages/blog/Blog4";
import Blog5 from "./pages/blog/Blog5";
import Audit from "./pages/services/Audit";
import DirectTax from "./pages/services/DirectTax";
import GST from "./pages/services/GST";
import CompReg from "./pages/services/CompReg";
import MarketRes from "./pages/services/MarketRes";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="services" element={<Services />}></Route>
        <Route path="blog" element={<BlogPage />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="blog/blog1" element={<Blog1 />}></Route>
        <Route path="blog/blog2" element={<Blog2 />}></Route>
        <Route path="blog/blog3" element={<Blog3 />}></Route>
        <Route path="blog/blog4" element={<Blog4 />}></Route>
        <Route path="blog/blog5" element={<Blog5 />}></Route>
        <Route path="audit" element={<Audit/>}></Route>
        <Route path="tax" element={<DirectTax/>}></Route>
        <Route path="gst" element={<GST/>}></Route>
        <Route path="compreg" element={<CompReg/>}></Route>
        <Route path="markres" element={<MarketRes/>}></Route>
      </Routes>

      
      

      
      
      
      
      
      <Footer />
    </>
  );
}

export default App;
