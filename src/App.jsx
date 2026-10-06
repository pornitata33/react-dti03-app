//rfc
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"; 
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx";
import Smartphone from "./pages/Smartphone.jsx";
import Tablet from "./pages/Tablet.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dti/sau/product" element={<Product />} />
          <Route path="/product/smartphone" element={<Smartphone />} />
          <Route path="/product/tablet" element={<Tablet />} />
          <Route path="*" element={<NotFound /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

//rfce

//function App() {
//  return (
//    <div>App</div>
//  )
//}

//export default App


//rafce

//const App = () => {
//  return (
//    <div>App</div>
//  )
//}

//export default App