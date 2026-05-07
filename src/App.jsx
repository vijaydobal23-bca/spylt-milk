import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useEffect } from "react";
import NutritionSection from "./sections/NutritionSection";
import BenifitSection from "./sections/BenifitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  });

  return (
    <main>
      <NavBar></NavBar>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection></HeroSection>
          <MessageSection></MessageSection>
          <FlavorSection></FlavorSection>
          <NutritionSection/>
          <div className="">
            <BenifitSection/>
          <TestimonialSection/>
          </div>
          <FooterSection/>
        </div>
      </div>
    </main>
  );
}

export default App;
