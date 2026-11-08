import { GrainOverlay } from "@/components/grain-overlay";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { WaveDivider } from "@/components/sections/wave-divider";
import { Problem } from "@/components/sections/problem";
import { Platform } from "@/components/sections/platform";
import { Demos } from "@/components/sections/demos";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Ownership } from "@/components/sections/ownership";
import { Fit } from "@/components/sections/fit";
import { ContactCta } from "@/components/sections/contact-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <Hero />
      <main className="bg-body-tint">
        <Problem />
        <Platform />
        <Demos />
        <HowItWorks />
        <Ownership />
        <Fit />
      </main>
      <WaveDivider direction="body-to-cta" />
      <ContactCta />
      <Footer />
    </>
  );
}
