import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Plans from "./pages/plans/Plans";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/Navbar";
import Meals from "./pages/meals/Meals";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="meals" element={<Meals />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
