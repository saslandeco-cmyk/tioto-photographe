import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Match from "./components/Match";
import WhyPhotographer from "./components/WhyPhotographer";
import PhotoBanner from "./components/PhotoBanner";
import Faq from "./components/Faq";
import Tioto from "./components/Tioto";
import Pricing from "./components/Pricing";
import Approche from "./components/Approche";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Vision />
        <Match />
        <WhyPhotographer />
        <PhotoBanner />
        <Faq />
        <Tioto />
        <Pricing />
        <Approche />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
