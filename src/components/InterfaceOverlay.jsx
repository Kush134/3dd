import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { Leva } from "leva";

export default function InterfaceOverlay() {
  const overlayRef = useRef();

  const [showLeva, setShowLeva] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        ".wrapper",
        { scale: 4, opacity: 0, translateY: "25vh" },
        {
          scale: 1,
          opacity: 1,
          duration: 6,
          translateY: 0,
          delay: 0.5,
          ease: "power1.inOut",
        },
      );
    },
    { scope: overlayRef },
  );

  return (
    <>
      <div className="overlay" ref={overlayRef}>
        <div className="wrapper">
          <p>Car</p>
          <h1>Customize</h1>

        </div>
      </div>
      <footer>
        
       
        <a onClick={() => setShowLeva(!showLeva)}>Show controls</a>
      </footer>
      <Leva collapsed hidden={!showLeva} />
    </>
  );
}
