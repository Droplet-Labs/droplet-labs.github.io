import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Typewriter } from "@/components/ui/typewriter";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col max-w-5xl mx-auto px-6 md:px-12 py-8 relative selection:bg-white selection:text-black">
      {/* HEADER */}
      <header className="flex justify-between items-center py-6 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="text-xl md:text-2xl font-bold tracking-tighter">
          DROPLET LABS.
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <a
            href="#services"
            className="hover:text-foreground transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="flex-1 flex flex-col gap-32 md:gap-40 mt-20 mb-32">
        {/* HERO SECTION */}
        <section className="flex flex-col gap-6 items-start max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
          <Badge
            variant="outline"
            className="rounded-full px-4 py-1 text-xs font-normal tracking-wide border-zinc-200 text-zinc-600 bg-zinc-50"
          >
            SaaS Development & Consulting
          </Badge>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1]">
            We build scalable{" "}
            <span className="text-zinc-500">
              <Typewriter
                words={[
                  "SaaS architectures.",
                  "AI integrations.",
                  "MVP development.",
                  "Cloud infrastructure.",
                  "RBAC identity systems.",
                ]}
              />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-4">
            Transforming complex requirements into robust, high-performance web
            applications. Focus on capabilities, execution, and shipping minimal
            viable products that scale.
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              size="lg"
              className="rounded-full px-8 text-base bg-black text-white hover:bg-zinc-800"
              asChild
            >
              <a href="#contact">Let&apos;s talk</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-base border-zinc-200 hover:bg-zinc-100 hover:text-black"
              asChild
            >
              <a href="#services">Our capabilities</a>
            </Button>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="scroll-mt-32">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            Capabilities.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {/* Service 1 */}
            <div className="group">
              <div className="h-px w-full bg-zinc-200 mb-6 group-hover:bg-black transition-colors duration-500" />
              <h3 className="text-2xl font-medium mb-3">SaaS Architecture</h3>
              <p className="text-muted-foreground leading-relaxed">
                Designing multi-tenant systems built for scale, performance, and
                security from day one. Full-stack solutions tailored to your
                domain.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group">
              <div className="h-px w-full bg-zinc-200 mb-6 group-hover:bg-black transition-colors duration-500" />
              <h3 className="text-2xl font-medium mb-3">
                AI / LLM Integrations
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Embedding intelligent capabilities into your products. From RAG
                pipelines and custom agents to automated workflows.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group">
              <div className="h-px w-full bg-zinc-200 mb-6 group-hover:bg-black transition-colors duration-500" />
              <h3 className="text-2xl font-medium mb-3">MVP Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rapid go-to-market execution. We turn ideas into testable,
                production-ready products without compromising on architecture.
              </p>
            </div>

            {/* Service 4 */}
            <div className="group">
              <div className="h-px w-full bg-zinc-200 mb-6 group-hover:bg-black transition-colors duration-500" />
              <h3 className="text-2xl font-medium mb-3">Cloud & Auth (RBAC)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Robust infrastructure setup, seamless cloud deployments, and
                complex identity management with Role-Based Access Control.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="scroll-mt-32 w-full flex flex-col items-center text-center py-20 px-6 border border-zinc-200 rounded-3xl bg-zinc-50"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Ready to execute?
          </h2>
          <p className="text-muted-foreground max-w-xl mb-10 text-lg">
            Whether you&apos;re starting from scratch or scaling an existing
            platform, we provide the technical foundation you need.
          </p>
          <a
            href="mailto:hello@dropletlabs.com"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-black/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Button
              size="lg"
              className="relative rounded-full px-10 py-8 text-xl bg-black text-white hover:bg-zinc-800 transition-all shadow-lg"
            >
              hello@dropletlabs.com
            </Button>
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
        <div>
          &copy; {new Date().getFullYear()} Droplet Labs. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-black transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-black transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-black transition-colors">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
