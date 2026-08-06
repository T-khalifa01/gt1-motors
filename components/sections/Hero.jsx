"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import WhatsAppButton from "../ui/WhatsAppButton";

export default function HeroSection() {
  // const [isMobile, setIsMobile] = useState(false);
  // const [hasMounted, setHasMounted] = useState(false);

  // useEffect(() => {
  //   setHasMounted(true);

  //   const checkScreenSize = () => {
  //     // Tailwind's 'md' breakpoint is 768px
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   checkScreenSize();
  //   window.addEventListener("resize", checkScreenSize);
  //   return () => window.removeEventListener("resize", checkScreenSize);
  // }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-background px-6 pb-28 pt-48 md:justify-end md:pb-32 md:pt-12"
    >
      {/* Optimized Video Background — Conditionally loaded on client */}
      <div className="absolute inset-0 z-0 bg-background">
        {/* {hasMounted ? (
          isMobile ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/gtimobile.jpg"
              className="h-full w-full object-cover"
            >
              <source src="/gt1mobilevid.mp4" type="video/mp4" />
            </video>
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/g1motorshero.png"
              className="h-full w-full object-cover"
            >
              <source src="/g1motors_hero_3.mp4" type="video/mp4" />
            </video>
          )
        ) : (
          /* High-quality poster placeholder shown during initial server render/hydration /
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url('/g1motorshero.png')` }}
          />
        )} */}
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
          <source src="/gt1mobilevid.mp4" type="video/mp4" media="(max-width: 767px)" />
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

      {/* Logo Slot */}
      <div className="relative z-20 mx-auto w-full max-w-[180px] md:mb-12 md:max-w-[320px]">
        <svg viewBox="0 0 539 241" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
          <path d="M521.749 74H411.749L408.598 89L436.249 89.5L417.749 176.5H498.249L521.749 74Z" fill="#C42537" />
          <path d="M131.749 2.63572e-09C283.75 0.000787862 538.249 2.63572e-09 538.249 2.63572e-09L530.749 26H395.249L361.749 176.5H274.749L304.249 26H153.249C66.248 26 31.4849 159.5 153.249 159.5L168.249 89.5H141.249L145.249 74H254.249L228.249 176.5H99.2491C-53.2522 176.5 -20.2518 -0.000787852 131.749 2.63572e-09Z" fill="#F6F6F6" />
          <path d="M99.9081 240L105.508 212H110.788L118.748 231.84L115.948 231.8L131.468 212H137.028L131.468 240H125.388L129.108 221.24H130.348L117.988 237.04H115.108L108.508 221.2L109.708 221.32L105.988 240H99.9081Z" fill="#F6F6F6" />
          <path d="M182.631 240.48C179.805 240.48 177.365 239.973 175.311 238.96C173.285 237.92 171.725 236.493 170.631 234.68C169.538 232.84 168.991 230.72 168.991 228.32C168.991 225.92 169.405 223.707 170.231 221.68C171.058 219.627 172.231 217.853 173.751 216.36C175.298 214.84 177.125 213.653 179.231 212.8C181.365 211.947 183.725 211.52 186.311 211.52C189.138 211.52 191.565 212.04 193.591 213.08C195.645 214.093 197.218 215.52 198.311 217.36C199.405 219.173 199.951 221.28 199.951 223.68C199.951 226.08 199.538 228.307 198.711 230.36C197.885 232.387 196.698 234.16 195.151 235.68C193.631 237.173 191.805 238.347 189.671 239.2C187.565 240.053 185.218 240.48 182.631 240.48ZM183.191 234.96C184.765 234.96 186.178 234.68 187.431 234.12C188.711 233.533 189.791 232.733 190.671 231.72C191.551 230.707 192.218 229.547 192.671 228.24C193.151 226.907 193.391 225.507 193.391 224.04C193.391 222.653 193.098 221.44 192.511 220.4C191.925 219.333 191.058 218.507 189.911 217.92C188.791 217.333 187.405 217.04 185.751 217.04C184.178 217.04 182.765 217.333 181.511 217.92C180.258 218.48 179.178 219.267 178.271 220.28C177.391 221.293 176.711 222.467 176.231 223.8C175.778 225.107 175.551 226.493 175.551 227.96C175.551 229.347 175.845 230.573 176.431 231.64C177.045 232.68 177.911 233.493 179.031 234.08C180.178 234.667 181.565 234.96 183.191 234.96Z" fill="#F6F6F6" />
          <path d="M237.271 240L241.791 217.28H232.831L233.911 212H258.311L257.231 217.28H248.311L243.751 240H237.271Z" fill="#F6F6F6" />
          <path d="M300.326 240.48C297.5 240.48 295.06 239.973 293.007 238.96C290.98 237.92 289.42 236.493 288.326 234.68C287.233 232.84 286.686 230.72 286.686 228.32C286.686 225.92 287.1 223.707 287.926 221.68C288.753 219.627 289.926 217.853 291.446 216.36C292.993 214.84 294.82 213.653 296.926 212.8C299.06 211.52 301.42 211.52 304.007 211.52C306.833 211.52 309.26 212.04 311.286 213.08C313.34 214.093 314.913 215.52 316.007 217.36C317.1 219.173 317.646 221.28 317.646 223.68C317.646 226.08 317.233 228.307 316.406 230.36C315.58 232.387 314.393 234.16 312.846 235.68C311.326 237.173 309.5 238.347 307.366 239.2C305.26 240.053 302.913 240.48 300.326 240.48ZM300.886 234.96C302.46 234.96 303.873 234.68 305.126 234.12C306.406 233.533 307.486 232.733 308.366 231.72C309.246 230.707 309.913 229.547 310.366 228.24C310.846 226.907 311.086 225.507 311.086 224.04C311.086 222.653 310.793 221.44 310.206 220.4C309.62 219.333 308.753 218.507 307.606 217.92C306.486 217.333 305.1 217.04 303.447 217.04C301.873 217.04 300.46 217.333 299.206 217.92C297.953 218.48 296.873 219.267 295.966 220.28C295.086 221.293 294.406 222.467 293.926 223.8C293.473 225.107 293.246 226.493 293.246 227.96C293.246 229.347 293.54 230.573 294.126 231.64C294.74 232.68 295.607 233.493 296.727 234.08C297.873 234.667 299.26 234.96 300.886 234.96Z" fill="#F6F6F6" />
          <path d="M349.556 240L355.156 212H366.556C370.05 212 372.743 212.76 374.636 214.28C376.556 215.8 377.516 217.933 377.516 220.68C377.516 223.027 376.956 225.067 375.836 226.8C374.743 228.507 373.17 229.827 371.116 230.76C369.09 231.693 366.69 232.16 363.916 232.16H354.796L358.196 229.32L356.076 240H349.556ZM367.556 240L361.836 229.84H368.636L374.396 240H367.556ZM358.036 230.08L355.796 227H364.156C366.316 227 367.983 226.52 369.156 225.56C370.356 224.573 370.956 223.147 370.956 221.28C370.956 219.92 370.49 218.92 369.556 218.28C368.65 217.613 367.37 217.28 365.716 217.28H357.836L361.236 214.12L358.036 230.08Z" fill="#F6F6F6" />
          <path d="M418.731 240.48C417.211 240.48 415.731 240.333 414.291 240.04C412.877 239.773 411.584 239.4 410.411 238.92C409.264 238.44 408.291 237.92 407.491 237.36L410.131 232.36C411.011 232.973 411.944 233.507 412.931 233.96C413.944 234.387 414.997 234.72 416.091 234.96C417.184 235.173 418.277 235.28 419.371 235.28C420.571 235.28 421.597 235.147 422.451 234.88C423.331 234.613 423.997 234.24 424.451 233.76C424.931 233.28 425.171 232.693 425.171 232C425.171 231.36 424.917 230.84 424.411 230.44C423.904 230.04 423.237 229.707 422.411 229.44C421.611 229.147 420.717 228.867 419.731 228.6C418.744 228.333 417.744 228.027 416.731 227.68C415.744 227.307 414.837 226.853 414.011 226.32C413.211 225.76 412.557 225.053 412.051 224.2C411.544 223.347 411.291 222.28 411.291 221C411.291 219.08 411.811 217.413 412.851 216C413.917 214.587 415.411 213.493 417.331 212.72C419.251 211.92 421.504 211.52 424.091 211.52C425.984 211.52 427.771 211.733 429.451 212.16C431.131 212.56 432.571 213.147 433.771 213.92L431.331 218.88C430.264 218.16 429.077 217.627 427.771 217.28C426.464 216.907 425.117 216.72 423.731 216.72C422.477 216.72 421.397 216.867 420.491 217.16C419.611 217.453 418.931 217.867 418.451 218.4C417.997 218.907 417.771 219.493 417.771 220.16C417.771 220.827 418.011 221.373 418.491 221.8C418.997 222.2 419.664 222.547 420.491 222.84C421.317 223.107 422.224 223.373 423.211 223.64C424.197 223.907 425.184 224.213 426.171 224.56C427.157 224.907 428.064 225.347 428.891 225.88C429.717 226.413 430.384 227.093 430.891 227.92C431.397 228.72 431.651 229.733 431.651 230.96C431.651 232.88 431.117 234.56 430.051 236C428.984 237.413 427.477 238.52 425.531 239.32C423.611 240.093 421.344 240.48 418.731 240.48Z" fill="#F6F6F6" />
        </svg>
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