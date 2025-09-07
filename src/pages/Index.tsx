import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Coaches from "@/components/Coaches";
import Contact from "@/components/Contact";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Coaches />
      <Contact />
    </div>
  );
};

export default Index;