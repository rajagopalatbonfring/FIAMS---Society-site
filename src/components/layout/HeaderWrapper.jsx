// components/layout/HeaderWrapper.jsx
import { useState, useEffect } from "react";
import TopHeader from "./topHeader";
import Navbar from "./navbar";

export default function HeaderWrapper() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY <= 10; // Trigger earlier for smoothness
      setAtTop(isAtTop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Header - Slides up on scroll */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          atTop 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-full pointer-events-none"
        }`}
      >
        <TopHeader />
      </div>

      {/* Main Navbar - Snaps perfectly to top with no gap */}
      <div
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ease-out ease-in ${
          atTop
            ? "top-14 bg-black/90 backdrop-blur-3xl"  // TopHeader height = ~44px → top-11
            : "top-0 bg-black/95 backdrop-blur-3xl shadow-2xl shadow-black/60"
        }`}
      >
        <Navbar />
      </div>

      {/* Critical: Only add spacer when at top */}
      <div className={`h-28 lg:h-32 transition-all duration-500 ease-in-out ${atTop ? "block" : "h-20 lg:h-24"}`} />
    </>
  );
}