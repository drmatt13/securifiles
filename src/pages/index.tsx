/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

import { useRef, useEffect, useState, useCallback } from "react";
import LoginAnimation from "@/components/LoginAnimation";

export default function Home() {
  const phase1Ref = useRef<HTMLDivElement>(null);
  const phase2Ref = useRef<HTMLDivElement>(null);
  const phase3Ref = useRef<HTMLDivElement>(null);
  const phase4Ref = useRef<HTMLDivElement>(null);

  const [phase, setPhase] = useState(1);

  useEffect(() => {
    if (
      !phase1Ref.current ||
      !phase2Ref.current ||
      !phase3Ref.current ||
      !phase4Ref.current
    )
      return;
    // if fully visible set state to 1
    const phase1Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("phase1");
          setPhase(1);
        }
      },
      { threshold: 0.5 }
    );
    phase1Observer.observe(phase1Ref.current);
    const phase2Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("phase2");
          setPhase(2);
        }
      },
      { threshold: 0.5 }
    );
    phase2Observer.observe(phase2Ref.current);
    const phase3Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("phase3");
          setPhase(3);
        }
      },
      { threshold: 0.5 }
    );
    phase3Observer.observe(phase3Ref.current);
    const phase4Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("phase4");
          setPhase(4);
        }
      },
      { threshold: 0.5 }
    );
    phase4Observer.observe(phase4Ref.current);
  }, []);

  return (
    <>
      <main className="relative min-h-screen text-white overflow-hidden">
        {/* navbar */}
        <div className="fixed top-0 w-full bg-black/60 backdrop-blur z-50">
          <div className="mx-auto flex px-6 sm:px-8 lg:px-16 justify-between py-6 text-xl ">
            <div className="font-mono cursor-pointer">SecuriDocs</div>
            <div className="flex items-baseline cursor-pointer">
              <div className="font-sans text-white">login</div>
              <i className="fas fa-lock ml-3 text-sm text-white/75" />
            </div>
          </div>
        </div>
        <div className="fixed top-0 left-0 h-screen w-full -z-10">
          {/* <img
            className="w-full h-full object-cover hue-rotate-15"
            src="./images/peakpx.jpg"
            alt=""
          /> */}
          {/* video background */}
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./videos/Untitled Project.mp4" type="video/mp4" />
          </video>
        </div>
        {/* phase1 */}
        <div
          className={`
          ${phase < 1 && "translate-y-full"}
          ${phase === 1 && "translate-y-0"} 
          ${phase > 1 && "-translate-y-full"}
          transition-transform ease-in-out duration-1000 fixed top-0 w-full`}
        >
          <div
            className={`
            ${phase < 1 && "opacity-0 duration-300 ease-out"}
            ${phase === 1 && "opacity-100 duration-700 ease-in"} 
            ${phase > 1 && "opacity-0 duration-300 ease-out"}
            transition-opacity relative h-screen w-full`}
          >
            <LoginAnimation />
          </div>
        </div>
        {/* phase2 */}
        <div
          className={`
          ${phase < 2 && "translate-y-full"}
          ${phase === 2 && "translate-y-0"} 
          ${phase > 2 && "-translate-y-full"}
          transition-transform ease-in-out duration-1000 fixed top-0 w-full`}
        >
          <div
            className={`
            ${phase < 2 && "opacity-0 duration-300 ease-out"}
            ${phase === 2 && "opacity-100 duration-700 ease-in"} 
            ${phase > 2 && "opacity-0 duration-300 ease-out"}
            transition-opacity relative h-screen w-full`}
          >
            {/* <LoginAnimation /> */}
            <div className="w-full h-full flex justify-center items-center text-white text-3xl font-bold">
              PAGE 2
            </div>
          </div>
        </div>
        {/* phase3 */}
        <div
          className={`
          ${phase < 3 && "translate-y-full"}
          ${phase === 3 && "translate-y-0"} 
          ${phase > 3 && "-translate-y-full"}
          transition-transform ease-in-out duration-1000 fixed top-0 w-full`}
        >
          <div
            className={`
            ${phase < 3 && "opacity-0 duration-300 ease-out"}
            ${phase === 3 && "opacity-100 duration-700 ease-in"} 
            ${phase > 3 && "opacity-0 duration-300 ease-out"}
            transition-opacity relative h-screen w-full`}
          >
            <div className="w-full h-full flex justify-center items-center text-white text-3xl font-bold">
              PAGE 3
            </div>
          </div>
        </div>
        {/* phase4 */}
        <div
          className={`
          ${phase < 4 && "translate-y-full"}
          ${phase === 4 && "translate-y-0"} 
          ${phase > 4 && "-translate-y-full"}
          transition-transform ease-in-out duration-1000 fixed top-0 w-full`}
        >
          <div
            className={`
            ${phase < 4 && "opacity-0 duration-300 ease-out"}
            ${phase === 4 && "opacity-100 duration-700 ease-in"} 
            ${phase > 4 && "opacity-0 duration-300 ease-out"}
            transition-opacity relative h-screen w-full`}
          >
            <div className="w-full h-full flex justify-center items-center text-white text-3xl font-bold">
              PAGE 4
            </div>
          </div>
        </div>
        {/* observable refs */}
        <div className="z-50">
          <div className="h-screen" ref={phase1Ref} />
          <div className="h-screen" ref={phase2Ref} />
          <div className="h-screen" ref={phase3Ref} />
          <div className="h-screen" ref={phase4Ref} />
        </div>
      </main>
    </>
  );
}
