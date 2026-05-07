import React from "react";
import ClipPathTitlte from "../components/ClipPathTitlte";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import VideoPinSection from "./VideoPinSection";

const BenifitSection = () => {
  useGSAP(() => {
    const reavelTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    reavelTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0% ,100% 0% , 100% 100% , 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0% ,100% 0% , 100% 100% , 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0% ,100% 0% , 100% 100% , 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0% ,100% 0% , 100% 100% , 0% 100%)",
        ease: "circ.out",
      });
  });
  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            U lock the advantages :<br /> Exploring the key Benifits od spylt
            milk
          </p>
          <div className="mt-20 col-center">
            <ClipPathTitlte
              title={"Shelf stable"}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"first-title"}
              borderColor={"#222123"}
            />

            <ClipPathTitlte
              title={"Protine + Caffeine"}
              color={"#111"}
              bg={"#faeade"}
              className={"second-title"}
              borderColor={"#222123"}
            />

            <ClipPathTitlte
              title={"Infinitely Recyclebale"}
              color={"#faeade"}
              bg={"#7f3820"}
              className={"third-title"}
              borderColor={"#222123"}
            />

            <ClipPathTitlte
              title={"Locatus Free"}
              color={"#2e2d3e"}
              bg={"#fec775"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p>And much more...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPinSection/>
      </div>
    </section>
  );
};

export default BenifitSection;
