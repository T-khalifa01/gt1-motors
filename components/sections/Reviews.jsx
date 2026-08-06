export default function ReviewsSection() {
  return (
    <section className="relative bg-secondary px-6 py-[4.5rem] md:px-10 md:py-24">
      <div className="mx-auto max-w-[1000px]">
        
        {/* EN Heading */}
        <h2 className="mt-0 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[1.08] text-text-primary">
          The Trust We've<br />
          <span className="font-normal italic text-accent">Earned.</span>
        </h2>
        
        {/* AR Heading */}
        <p className="mb-10 font-display text-[clamp(1rem,2.5vw,1.5rem)] italic text-text-primary/30" dir="rtl">
          الثقة التي كسبناها
        </p>

        {/* Review Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="relative bg-surface p-8">
            <div className="absolute left-0 top-0 h-[2px] w-[32px] bg-accent" />
            <div className="mb-4 mt-4 flex gap-[3px] text-[0.72rem] text-accent">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="mb-5 font-display text-base italic leading-[1.65] text-text-primary/85">
              "It's not just a car! It's a whole experience!"
            </p>
            <p className="text-[0.74rem] font-bold uppercase tracking-[0.08em] text-text-primary">Sarah Hany</p>
            <p className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-[#696E81]">Instagram</p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-surface p-8">
            <div className="absolute left-0 top-0 h-[2px] w-[32px] bg-accent" />
            <div className="mb-4 mt-4 flex gap-[3px] text-[0.72rem] text-accent">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="mb-5 font-display text-base italic leading-[1.65] text-text-primary/85">
              "Masterpieces."
            </p>
            <p className="text-[0.74rem] font-bold uppercase tracking-[0.08em] text-text-primary">Mohamed Hassan</p>
            <p className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-[#696E81]">Google Maps</p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-surface p-8">
            <div className="absolute left-0 top-0 h-[2px] w-[32px] bg-accent" />
            <div className="mb-4 mt-4 flex gap-[3px] text-[0.72rem] text-accent">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="mb-5 font-display text-base italic leading-[1.65] text-text-primary/85" dir="rtl">
              "معرض سيارات على مستوى عالي جدا"
            </p>
            <p className="text-[0.74rem] font-bold uppercase tracking-[0.08em] text-text-primary">Hashim Masei</p>
            <p className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-[#696E81]">Google Maps</p>
            
            {/* Local Guide Badge */}
            <p className="mt-2.5 inline-flex items-center gap-1.5 text-[0.6rem] tracking-[0.04em] text-text-primary/40">
              <svg viewBox="0 0 24 24" className="h-[11px] w-[11px] fill-transparent stroke-[#696E81] stroke-[1.6px]">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              Local Guide · 480 Reviews · 34 Photos
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}