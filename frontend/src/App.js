import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Preview from "./components/Preview";
import NewsLetter from "./components/NewsLetter";
import PaidPlans from "./components/PaidPlans";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Preview />
      <NewsLetter />
      <PaidPlans />
      <Footer />
    </div>
  );
}

export default App;
