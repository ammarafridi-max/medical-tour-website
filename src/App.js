import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./ui/Layout/Layout";
import Home from "./ui/Home/Home";
import BookConsultation from "./features/BookConsultation/BookConsultation";
import About from "./ui/About/About";
import Contact from "./ui/Contact/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
