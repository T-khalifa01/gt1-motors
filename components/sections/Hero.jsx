"use client";

import WhatsAppButton from "../ui/WhatsAppButton";
import Image from "next/image";

export default function HeroSection() {


  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-background px-6 pb-28 pt-48 md:justify-end md:pb-32 md:pt-12"
    >
      {/* Optimized Video Background — Conditionally loadeds based on screen size  */}
      <div className="absolute inset-0 z-0 bg-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          // A transparent 1x1 pixel so our CSS background shows through as the poster
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          // Tailwind swaps the background image based on screen size!
          className="h-full w-full object-cover bg-cover bg-center bg-[url('/poster-mobile.webp')] md:bg-[url('/poster-desk.webp')]"
        >
          {/* Browser checks media queries natively before downloading! */}
          <source src="/g1motors_hero_3.mp4" type="video/mp4" media="(min-width: 768px)" />
          <source src="/gt1mobilevid1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Scrim Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,10,9,0.8) 0%, rgba(11,10,9,0.1) 40%, rgba(11,10,9,0.2) 60%, rgba(11,10,9,0.95) 100%)",
        }}
      />

      <div className="relative z-20 mx-auto w-full max-w-[180px] md:mb-12 md:max-w-[320px]">
        <Image
          src="/logo-hero.svg"
          alt="GT1 Motors"
          width={539}
          height={241}
          priority
          className="h-auto w-full"
        />
      </div>

      {/* Bottom Content Container */}
      <div className="relative z-20 mt-auto flex flex-col items-center text-center text-text-primary md:mt-0">
        
        {/* Eyebrow */}
        <p className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-text-primary/70">
          New Cairo · Sheikh Zayed — Egypt
        </p>

        {/* Tagline EN */}
        <p className="mb-1 max-w-[280px] text-[0.9rem] font-normal tracking-wide text-text-primary/90 md:max-w-md md:text-base">
          A style that goes the extra mile — where luxury meets performance.
        </p>

        {/* Tricolon */}
        <h1 className="mb-8 font-display text-[2.2rem] italic leading-none tracking-tight md:mb-10 md:text-[3.2rem]">
          precision<span className="mx-1.5 font-normal text-accent">·</span>
          power<span className="mx-1.5 font-normal text-accent">·</span>
          prestige
        </h1>

        {/* CTAs */}
        <div className="flex w-full max-w-[320px] flex-col gap-3 md:max-w-none md:flex-row md:justify-center md:gap-5">
          <WhatsAppButton label="Chat on WhatsApp" />
          {/* <Link
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-white/50 md:w-auto"
          >
            Import Your Dream Car
          </Link> */}
          <button
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-white/50 md:w-auto"
          >
            Import Your Dream Car
          </button>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 md:bottom-8">
        <span className="text-[0.52rem] uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>
        <div className="h-[34px] w-[1px] origin-top animate-[scrollpulse_2.2s_ease-in-out_infinite] bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  );
}