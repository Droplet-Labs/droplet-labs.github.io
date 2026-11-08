import { GrainOverlay } from "@/components/grain-overlay";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { WaveDivider } from "@/components/sections/wave-divider";
import { Descent } from "@/components/sections/descent";
import { Demos } from "@/components/sections/demos";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Fit } from "@/components/sections/fit";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <Hero />
      <Descent />
      <main className="bg-body-tint">
        <HowItWorks />
        <Fit />
        <Faq />
        <Demos />
      </main>
      <WaveDivider direction="body-to-cta" />
      <ContactCta />
      <Footer />
    </>
  );
}
