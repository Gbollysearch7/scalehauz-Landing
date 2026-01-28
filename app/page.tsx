import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { CaseStudies } from "@/components/CaseStudies";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Industries />
        <WhyUs />
        <Process />
        <Testimonials />
        <CaseStudies />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
