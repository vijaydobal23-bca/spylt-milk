import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const MessageSection = () => {

  useGSAP(() => {

    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });

    const secMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });

    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      lineClass: "paragraph-line"
    });

    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: 2,
      }
    });

    gsap.to(secMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: 2,
      }
    });

    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
        end: "top 30%",
        scrub: true,
  
      }
    });

    revealTl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
      ease: "circ.inOut"
    });


    const paragraphTl= gsap.timeline({

      scrollTrigger:{
        trigger:".message-content p",
        start:"top center",
       
      }
    });

    paragraphTl.from(paragraphSplit.words , {
      yPercent:300,
      rotate:3,
      ease:"power1.inOut",
      duration:1,
      stagger:0.01,
      
    })

  });

  return (
    <section className="message-content">

      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">

          <div className="msg-wrapper">
 
            <h1 className="first-message">
              STIR UP YOUR FEARIESS PAST AND
            </h1>

            <div
              className="msg-text-scroll"
              style={{ clipPath: "polygon(0 0,0 0, 0 100%, 0% 100%)" }}
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">FUEL UP</h2>
              </div>
            </div>

            <h1 className="second-message">
              your future with every gulp of Perfect Protine
            </h1>

          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p>
                Rev up Your rebel spirit and feed the adventure of life with
                SPYLT, where you're one chug away from epic nostalgia and
                fearless fun
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default MessageSection;