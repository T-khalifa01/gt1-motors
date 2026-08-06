import Image from "next/image";
import Link from "next/link";

export default function LocationsSection() {
  return (
    <section id="locations" className="relative bg-background px-6 py-[4.5rem] md:px-10 md:py-24">
      <div className="mx-auto max-w-[1000px]">
        
        {/* EN Heading */}
        <h2 className="mt-0 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[1.08] text-text-primary">
          Two Showrooms.<br />
          <span className="font-normal italic text-accent">One Standard.</span>
        </h2>
        
        {/* AR Heading */}
        <p className="font-display text-[clamp(1rem,2.5vw,1.5rem)] italic text-text-primary/30" dir="rtl">
          معرضان، معيار واحد
        </p>

        {/* Hours Strip */}
        <div className="mt-10 flex flex-wrap items-center gap-10 border-l-2 border-accent bg-surface px-8 py-7">
          <div>
            <p className="mb-2 text-[0.56rem] font-bold uppercase tracking-[0.28em] text-accent">
              Showroom Hours
            </p>
            <div className="flex flex-wrap gap-8 text-[0.8rem] text-text-muted">
              <span><b className="font-semibold text-text-primary">Sat–Thu</b> 10:00–22:00</span>
              <span><b className="font-semibold text-text-primary">Fri</b> 14:00–22:00</span>
            </div>
          </div>
          {/* <div className="font-display text-[0.8rem] italic text-text-primary/35" dir="rtl">
            ساعات المعرض: السبت–الخميس ١٠:٠٠–٢٢:٠٠ · الجمعة ٢:٠٠–١٠:٠٠
          </div> */}
        </div>

        {/* Locations Grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          
          {/* New Cairo Branch */}
          <div className="overflow-hidden bg-surface">
            <div 
              className="h-[200px] w-full" 
              style={{ filter: "grayscale(0.55) invert(0.9) contrast(0.9)" }}
            >
              <iframe 
                src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.046464816783!2d31.461142199999998!3d30.035524799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458230ed4c3683f%3A0xa93b30e10e2a5025!2sGT1%20MOTORS!5e0!3m2!1sen!2seg!4v1785940000321!5m2!1sen!2seg"
                className="block h-full w-full border-0" 
                allowFullScreen 
                loading="lazy" 
                title="New Cairo Showroom Map"
              />
            </div>
            <div className="p-7">
              <p className="mb-2.5 text-[0.56rem] font-bold uppercase tracking-[0.28em] text-accent">
                Showroom One
              </p>
              <p className="mb-3 font-display text-[1.35rem] font-bold text-text-primary">
                New Cairo
              </p>
              <p className="text-[0.8rem] leading-[1.7] text-text-muted">
                5th Settlement, New Cairo
              </p>
              <p className="mt-1 font-display text-[0.78rem] italic leading-[1.7] text-text-primary/30" dir="rtl">
                التجمع الأول، القاهرة الجديدة
              </p>
              <Link 
                href="https://maps.app.goo.gl/SymS567Lf3bKDy9J6" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 border-b border-white/10 pb-0.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#696E81] decoration-transparent transition-colors hover:text-accent"
              >
                Get Directions →
              </Link>
            </div>
          </div>

          {/* Sheikh Zayed Branch */}
          <div className="overflow-hidden bg-surface">
            <div 
              className="h-[200px] w-full" 
              style={{ filter: "grayscale(0.55) invert(0.9) contrast(0.9)" }}
            >
              {/* PASTE YOUR EMBED URL HERE */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.720032003643!2d31.002221156164634!3d30.016194388216128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b00ccb34af9%3A0xa61dd018f20c205d!2sGT1%20MOTORS!5e0!3m2!1sen!2seg!4v1785940089286!5m2!1sen!2seg"
                className="block h-full w-full border-0" 
                allowFullScreen 
                loading="lazy" 
                title="Sheikh Zayed Showroom Map"
              />
            </div>
            <div className="p-7">
              <p className="mb-2.5 text-[0.56rem] font-bold uppercase tracking-[0.28em] text-accent">
                Showroom Two
              </p>
              <p className="mb-3 font-display text-[1.35rem] font-bold text-text-primary">
                Sheikh Zayed
              </p>
              <p className="text-[0.8rem] leading-[1.7] text-text-muted">
                Central Axis, inside Chill Out, in front of Galleria 40
              </p>
              <p className="mt-1 font-display text-[0.78rem] italic leading-[1.7] text-text-primary/30" dir="rtl">
                المحور المركزي، داخل تشيل أوت، أمام جاليريا ٤٠
              </p>
              {/* PASTE YOUR SHARE LINK HERE */}
              <Link 
                href="https://maps.app.goo.gl/5PMLtrU8wtSs9Sg9A" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 border-b border-white/10 pb-0.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#696E81] decoration-transparent transition-colors hover:text-accent"
              >
                Get Directions →
              </Link>
            </div>
          </div>

        </div>

        {/* Photo Collage */}
        <div className="mb-5 mt-12 flex items-center gap-3 text-[0.56rem] font-bold uppercase tracking-[0.28em] text-accent">
          <div className="h-[2px] w-[24px] bg-accent" />
          From Our Showroom &nbsp;|&nbsp; من داخل معرضنا
        </div>
        
        <div className="grid h-auto grid-cols-1 gap-3 sm:grid-cols-2 md:h-[280px] md:grid-cols-[1.4fr_1fr_1fr] md:grid-rows-2">
          
          {/* Main Tall Photo */}
          {/* <div className="relative flex min-h-[200px] items-center justify-center border border-dashed border-white/15 bg-gradient-to-br from-[#1c1a16] to-[#211d17] sm:col-span-2 md:col-span-1 md:row-span-2">
            <span className="relative z-10 text-[0.55rem] uppercase tracking-[0.12em] text-white/20">
              Showroom Photo 1
            </span>
            <Image
              src="/placeholder-showroom-1.jpg"
              alt="GT1 Motors Showroom 1"
              fill
              className="object-cover opacity-0 transition-opacity duration-300" 
              // Remove opacity-0 once you have actual images
            />
          </div> */}

          {/* Top Right Photo */}
          {/* <div className="relative flex min-h-[130px] items-center justify-center border border-dashed border-white/15 bg-gradient-to-br from-[#1c1a16] to-[#211d17] sm:col-span-1">
            <span className="relative z-10 text-[0.55rem] uppercase tracking-[0.12em] text-white/20">
              Showroom Photo 2
            </span>
            <Image
              src="/placeholder-showroom-2.jpg"
              alt="GT1 Motors Showroom 2"
              fill
              className="object-cover opacity-0 transition-opacity duration-300"
            />
          </div> */}

          {/* Bottom Right Photo */}
          {/* <div className="relative flex min-h-[130px] items-center justify-center border border-dashed border-white/15 bg-gradient-to-br from-[#1c1a16] to-[#211d17] sm:col-span-1">
            <span className="relative z-10 text-[0.55rem] uppercase tracking-[0.12em] text-white/20">
              Showroom Photo 3
            </span>
            <Image
              src="/placeholder-showroom-3.jpg"
              alt="GT1 Motors Showroom 3"
              fill
              className="object-cover opacity-0 transition-opacity duration-300"
            />
          </div> */}

        </div>
      </div>
    </section>
  );
}