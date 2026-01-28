import { NavbarPro } from "@/components/professional/Navbar";
import { HeroPro } from "@/components/professional/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ServicesPro } from "@/components/professional/Services";
import { Industries } from "@/components/Industries";
import { WhyUsPro } from "@/components/professional/WhyUs";
import { Process } from "@/components/Process";
import { TestimonialsPro } from "@/components/professional/Testimonials";
import { CaseStudies } from "@/components/CaseStudies";
import { FAQPro } from "@/components/professional/FAQ";
import { ContactPro } from "@/components/professional/Contact";
import { FooterPro } from "@/components/professional/Footer";

export default function ProfessionalPage() {
  return (
    <>
      <NavbarPro />
      <main className="relative">
        <HeroPro />
        <TrustBar />
        <ServicesPro />
        <Industries />
        <WhyUsPro />
        <Process />
        <TestimonialsPro />
        <CaseStudies />
        <FAQPro />
        <ContactPro />
        <FooterPro />
      </main>
    </>
  );
}
