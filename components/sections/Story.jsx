"use client";

import { useRef, } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StorySection() {
  const textRef = useRef(null);

  // 2. Your GSAP Animation Logic remains exactly the same
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#story-trigger",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        let opacity, translate;
        
        // Phase 1: Fade in and slide up (0% to 25% scroll)
        if (p < 0.25) { 
          opacity = p / 0.25; 
          translate = 20 * (1 - opacity); 
        } 
        // Phase 2: Hold fully visible (25% to 75% scroll)
        else if (p < 0.75) { 
          opacity = 1; 
          translate = 0; 
        } 
        // Phase 3: Fade out and slide up (75% to 100% scroll)
        else { 
          opacity = Math.max(0, 1 - (p - 0.75) / 0.25); 
          translate = -20 * (1 - opacity); 
        }

        // Apply styles directly for 60fps smoothness
        if (textRef.current) {
          textRef.current.style.opacity = opacity;
          textRef.current.style.transform = `translateY(${translate}px)`;
        }
      },
    });
  });

  return (
    <section id="realstory" className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-background">
      
      <div className="absolute inset-0 z-0 bg-background">
        <picture className="block h-full w-full">

          <source media="(min-width: 768px)" srcSet="/redgt3-desk.webp" />
          <img
            src="/redgt3-mobile.webp"
            alt="Ahmed El Wakil's red Porsche GT3 delivered by GT1 Motors"
            className="h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      {/* Text Content Container (Dark Glass Panel) */}
      <div 
        ref={textRef}
        className="relative z-20 mx-auto w-[90%] max-w-[740px] rounded-xl border border-white/10 bg-[#0B0A09]/85 px-6 py-10 text-center shadow-2xl backdrop-blur-md opacity-0 md:px-12 md:py-12"
      >
        <div className="mb-[-1rem] font-display text-[4.5rem] italic leading-none text-accent/70">
          "
        </div>
        
        <p className="mb-6 font-display text-[clamp(1.3rem,3vw,1.85rem)] italic leading-[1.55] text-[#fcfaf7]">
          Thank you GT1 Motors for everything — thank you for being honest from day one about everything. Simply the best.
        </p>
        
        <p className="mx-auto mb-4 max-w-[600px] text-[0.88rem] leading-[1.85] text-[#aca6a4]">
          Ahmed El Wakil trusted GT1 Motors to bring his Porsche GT3 to life — imported with complete ease, safety, and professional support from start to finish.
        </p>
        
        <p className="mx-auto mb-7 max-w-[600px] font-display text-[0.85rem] italic leading-[1.9] text-[#aca6a4]/70" dir="rtl">
          وثق أحمد الوكيل بـ GT1 موتورز ليجعل سيارته بورش GT3 حقيقة — استيراد بسهولة تامة وأمان ودعم احترافي من البداية للنهاية.
        </p>
        
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.26em] text-accent">
          Ahmed El Wakil 
          <span className="ml-2 font-display text-[0.85rem] font-normal normal-case italic tracking-[0.1em] text-[#aca6a4]">
            · Porsche GT3, Delivered by GT1 Motors
          </span>
        </p>
      </div>

    </section>
  );
}