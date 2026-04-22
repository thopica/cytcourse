import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Creator from "@/components/Creator";
import CourseIntro from "@/components/CourseIntro";
import Modules from "@/components/Modules";
import Bonuses from "@/components/Bonuses";
import Stacking from "@/components/Stacking";
import BuyCard from "@/components/BuyCard";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Creator />
        <CourseIntro />
        <Modules />
        <Pricing />
        <Guarantee />
        <Bonuses />
        <Stacking />
        <section className="section">
          <div className="container">
            <BuyCard />
          </div>
        </section>
        <Faq />
       
      </main>
      <Footer />
    </>
  );
}
