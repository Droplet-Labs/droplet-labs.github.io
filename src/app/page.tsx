import { GrainOverlay } from "@/components/grain-overlay";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { WaveDivider } from "@/components/sections/wave-divider";
import { ServicesBuild } from "@/components/sections/services-build";
import { ServicesAfter } from "@/components/sections/services-after";
import { Demos } from "@/components/sections/demos";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ContactCta } from "@/components/sections/contact-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <Hero />
      <main className="bg-body-tint">
        <ServicesBuild />
        <ServicesAfter />
        <Demos />
        <HowItWorks />
      </main>
      <WaveDivider direction="body-to-cta" />
      <ContactCta />
      <Footer />
    </>
  );
}
