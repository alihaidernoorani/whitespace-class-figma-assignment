import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import { ProjectManagementSection } from "./components/projectManagementSection";
import WorkTogetherSection from "./components/workTogetherSection";
import WorkEverywhereSection from "./components/workEverywhereSection";
import SponsorsSection from "./components/sponsorsSection";
import Footer from "./components/footer";

export default function Home() {
  return (
   <div>
      <Navbar />
      <HeroSection />
      <ProjectManagementSection />
      <WorkTogetherSection />
      <WorkEverywhereSection/>
      <SponsorsSection />
      <Footer />
   </div>
  );
}
