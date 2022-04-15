import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Ourwork from "./pages/Ourwork";
import Services from "./pages/Services";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<Homepage />}></Route>
       <Route path="/services" element={<Services />}></Route>
       <Route path="/ourwork" element={<Ourwork />}></Route>
       <Route path="/about" element={<About />}></Route>
       <Route path="/contact" element={<Contact />}></Route>
     </Routes>
   </Router>
  );
}

export default App;
