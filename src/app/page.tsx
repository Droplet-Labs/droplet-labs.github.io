import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Descent } from "@/components/sections/descent";
import { Rise } from "@/components/sections/rise";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Fit } from "@/components/sections/fit";
import { Faq } from "@/components/sections/faq";
import { Demos } from "@/components/sections/demos";
import { ClosingAsk } from "@/components/sections/closing-ask";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Descent />
      <Rise />
      <main className="bg-body-tint">
        <HowItWorks />
        <Fit />
        <Faq />
        <Demos />
      </main>
      <ClosingAsk />
      <Footer />
    </>
  );
}
