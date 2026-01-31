import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import Features from "./components/Features";
import LoadingScreen from "./components/LoadingScreen";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <main className="bg-black">
      {loading && <LoadingScreen />}

      <div
        id="main-content"
        className={
          loading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"
        }>
        <NavBar />
        <Hero />

        <ProductViewer setLoading={setLoading} />

        <Showcase />
        <Performance />
        <Features />
        <Highlights />
        <Footer />
      </div>
    </main>
  );
};

export default App;
