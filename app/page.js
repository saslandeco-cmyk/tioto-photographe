import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Match from "./components/Match";
import WhyPhotographer from "./components/WhyPhotographer";
import PhotoBanner from "./components/PhotoBanner";
import Faq from "./components/Faq";
import Tioto from "./components/Tioto";
import Pricing from "./components/Pricing";
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
