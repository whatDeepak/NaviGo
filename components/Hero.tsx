import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import GridGlobe from "./ui/GridGlobe";
import { BoxComponent } from "./ui/BoxComponent";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="h-screen w-screen">
      <div className="pb-20 pt-36">
        <div className="absolute inset-0">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50"
          />
        </div>
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div
          className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
        >
          {/* Radial gradient for the container to give a faded look */}
          <div
            // chnage the bg to bg-black-100, so it matches the bg color and will blend in
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
          {/* Add the GridGlobe component here */}
          <GridGlobe />
        </div>
        <div className="top-[20%] left-[75%] first-line:flex items-center justify-center h-screen">
          <BoxComponent />
        
        </div>
      </div>
    </div>
  );
};

export default Hero;
