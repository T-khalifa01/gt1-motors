"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

// Register ScrollTrigger safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function JourneySection() {
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(
    () => {
      // Select all elements with the 'journey-panel' class inside this component
      const panels = gsap.utils.toArray(".journey-panel");
      let lastPhase = -1;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const progress = self.progress;

          // 1. Advance the red progress bar
          if (progressRef.current) {
            progressRef.current.style.width = `${progress * 100}%`;
          }

          // 2. Determine active phase (0, 1, or 2) based on scroll depth
          const phase = Math.min(2, Math.floor(progress * 3));

          // 3. Toggle CSS classes directly to avoid React re-renders on scroll
          if (phase !== lastPhase) {
            lastPhase = phase;
            panels.forEach((panel, index) => {
              if (index === phase) {
                panel.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
                panel.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
              } else {
                panel.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
                panel.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
              }
            });
          }
        },
      });
    },
    { scope: containerRef }
  );

  return (
    // Outer relative container controls the total scroll length (300vh for 3 acts)
    <section ref={containerRef} id="journey" className="relative h-[300vh] bg-background">
      
      {/* Sticky Inner container pins to the viewport */}
      <div className="sticky left-0 right-0 top-0 flex h-[100svh] items-center  overflow-hidden">
        
        {/* 1. Optimized Next.js Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-fluid.webp"
            alt="Dealership Showroom"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        
        {/* <div className="absolute right-6 top-6 z-10 border border-dashed border-white/15 px-2.5 py-1.5 text-[0.55rem] uppercase tracking-[0.15em] text-white/20">
          Dealership photo — background
        </div> */}

        {/* 2. Static Dark Scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />

        {/* 3. Text Panels */}
        <div className="relative z-20 mx-auto w-full max-w-[980px] px-6 md:px-10 mt-[-100] md:mt-0">
          <div className="relative min-h-[280px]">
            
            {/* Act 1 */}
            <div className="journey-panel pointer-events-auto absolute inset-0 translate-y-0 opacity-100 transition-all duration-500 ease-out">
              {/* Combined Heading */}
              <h3 className="mb-1 font-display text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-[1.15] text-text-primary">
                <span className="font-normal italic text-accent">It begins with a dream.</span><br />
                Not What's Available.<br />What You Envision.
              </h3>
              
              {/* Italicized Arabic Text */}
              <p className="mb-8 font-display text-[clamp(1rem,2.5vw,1.5rem)] italic text-text-primary/30" dir="rtl">
                تحويل أحلامك إلى واقع
              </p>

              <div className="max-w-[600px] text-[0.9rem] leading-[1.9] text-text-muted">
                <p className="mb-3.5">
                  With GT1 Motors, you don't settle for what's sitting on a lot. You get exactly the car you pictured — <strong className="font-semibold text-text-primary">your color, your interior trim, your specification</strong>, sourced and imported to your exact standard.
                </p>
                <p className="mb-3.5">
                  From selection to delivery, every step is handled with safety, transparency, and professionalism — delivered right to your doorstep with precision and care.
                </p>
              </div>
              <p className="mt-3 max-w-[600px] font-display text-[0.85rem] italic leading-[1.85] text-text-primary/40" dir="rtl">
                مع GT1 موتورز، لا تكتفي بما هو متاح. تحصل بالضبط على السيارة التي تخيلتها — لونك، تفاصيل الديكور الداخلي، مواصفاتك الخاصة — يتم استيرادها بدقة وأمان حتى تصل إلى باب منزلك.
              </p>
            </div>

            {/* Act 2 */}
            <div className="journey-panel pointer-events-none absolute inset-0 translate-y-4 opacity-0 transition-all duration-500 ease-out">

              {/* Combined Heading */}
              <h3 className="mb-1 font-display text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-[1.15] text-text-primary">
                <span className="font-normal italic text-accent">Effortless ownership.</span><br />
                The Only Thing Standing<br />In Your Way — Gone.
              </h3>
              
              {/* Italicized Arabic Text */}
              <p className="mb-8 font-display text-[clamp(1rem,2.5vw,1.5rem)] italic text-text-primary/30" dir="rtl">
                امتلاك بدون عناء
              </p>

              <div className="max-w-[600px] text-[0.9rem] leading-[1.9] text-text-muted">
                <p className="mb-3.5">
                  A dream car means nothing if it stays out of reach. That's why GT1 Motors built financing around you, not the other way around — <strong className="font-semibold text-text-primary">flexible plans, real approval, no games.</strong>
                </p>
              </div>

              <p className="mt-3 max-w-[600px] font-display text-[0.85rem] italic leading-[1.85] text-text-primary/40" dir="rtl">
                سيارة الأحلام لا تعني شيئاً إن ظلت بعيدة المنال. لهذا صممنا خطط تمويل مرنة حولك أنت — موافقة حقيقية، وبدون تعقيد.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="border border-[#696E81]/40 bg-[#696E81]/10 px-4 py-2 text-[0.68rem] font-semibold tracking-wider text-[#696E81]">Triple Zero — 0% Down · 0% Fees · 0% Interest</span>
                <span className="border border-[#696E81]/40 bg-[#696E81]/10 px-4 py-2 text-[0.68rem] font-semibold tracking-wider text-[#696E81]">Valu — 10% Down, No Sale Restrictions</span>
                <span className="border border-[#696E81]/40 bg-[#696E81]/10 px-4 py-2 text-[0.68rem] font-semibold tracking-wider text-[#696E81]">Up to 7 Years, Instant Approval</span>
              </div>
            </div>

            {/* Act 3 */}

            <div className="journey-panel pointer-events-none absolute inset-0 translate-y-4 opacity-0 transition-all duration-500 ease-out">
              {/* Combined Heading */}
              <h3 className="mb-1 font-display text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-[1.15] text-text-primary">
                <span className="font-normal italic text-accent">Sit back and relax.</span><br />
                And When It's Time<br />For a Change.
              </h3>
              
              {/* Italicized Arabic Text */}
              <p className="mb-8 font-display text-[clamp(1rem,2.5vw,1.5rem)] italic text-text-primary/30" dir="rtl">
                حين يحين وقت التغيير
              </p>

              <div className="max-w-[600px] text-[0.9rem] leading-[1.9] text-text-muted">
                <p className="mb-3.5">
                  Owning a dream car isn't a one-time event — it's a relationship. When you're ready for what's next, GT1 Motors handles selling your current car too, professionally, <strong className="font-semibold text-text-primary">from listing to closing.</strong>
                </p>
              </div>
              
              {/* Long Arabic Paragraph */}
              <p className="mt-3 max-w-[600px] font-display text-[0.85rem] italic leading-[1.85] text-text-primary/40" dir="rtl">
                امتلاك سيارة الأحلام ليس حدثاً لمرة واحدة، بل علاقة مستمرة. حين يحين وقت التغيير، نتولى بيع سيارتك الحالية باحترافية — من العرض وحتى إتمام الصفقة.
              </p>
            </div>

          </div>
        </div>

        {/* 4. Progress Bar */}
        <div className="absolute bottom-16 md:bottom-8 left-6 right-6 z-20 h-[2px] bg-white/10 md:left-10 md:right-10">
          <div ref={progressRef} className="h-full w-0 bg-accent transition-all duration-100 ease-linear" />
        </div>
        
      </div>
    </section>
  );
}