import HeaderWrapper from "../components/layout/HeaderWrapper";
import MobileMenu from "../components/layout/mobileMenu";
import Hero from "../components/sections/hero";
import Services from "../components/sections/services";
import AboutSection from "../components/sections/aboutSection";
import Stats from "../components/sections/stats";
import Research from "../components/sections/research";
import Development from "../components/sections/development";
import Events from "../components/sections/events";
import Networks from "../components/sections/networks";
import Membership from "../components/sections/membership";
import FinalCTA from "../components/sections/finalCTA";
import Footer from "../components/layout/footer";

export default function Home() {
  return ( 
    <>
      <HeaderWrapper />
      <Hero />
      <Stats />
      <AboutSection />
      <Services/>
      <Development />
      <Research />
      <Networks />
      <Membership />
      <Events />
      <FinalCTA />
      <Footer />
    </>
  );
}