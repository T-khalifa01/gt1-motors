export default function AboutSection() {
  return (
    <section id="about" className="relative bg-background px-6 py-[4.5rem] md:px-10 md:py-24">
      <div className="mx-auto max-w-[1000px]">
        
        {/* EN Heading */}
        <h2 className="mb-1 mt-0 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[1.08] text-text-primary">
          Every Detail,<br />
          <span className="font-normal italic text-accent">Carefully Calculated.</span>
        </h2>
        
        {/* AR Heading */}
        <p className="mb-10 font-display text-[clamp(1rem,2.5vw,1.5rem)] italic text-text-primary/30" dir="rtl">
          كل تفصيلة محسوبة بعناية
        </p>
        
        <div className="mx-auto mt-10 max-w-[820px]">
          {/* EN Quote */}
          <p className="mb-5 font-display text-[clamp(1.15rem,2.6vw,1.5rem)] italic leading-[1.6] text-text-primary/90">
            <span className="font-bold not-italic text-accent">"</span>There are cars you like, and then there's that one car that feels like it was made just for you. That's why at <span className="font-bold not-italic">GT</span><span className="text-accent font-bold not-italic">1</span> Motors, we bring you closer to the car of your dreams. From importing it from abroad to its arrival at the port, every single detail is handled to deliver nothing but the best — right up until you see it standing in front of you in the showroom. Every step is carefully calculated. At <span className="font-bold not-italic">GT</span><span className="text-accent font-bold not-italic">1</span> Motors, we turn your dream car into a reality.
          </p>
          {/* <p className="mb-5 font-display text-[clamp(1.15rem,2.6vw,1.5rem)] italic leading-[1.6] text-text-primary/90">
            <span className="font-bold not-italic text-accent">"</span>There are cars you like, and then there's that one car that feels like it was made just for you. That's why at <span className="font-bold not-italic tracking-wider">GT<span className="text-accent">1</span> MOTORS</span>, we bring you closer to the car of your dreams. From importing it from abroad to its arrival at the port, every single detail is handled to deliver nothing but the best — right up until you see it standing in front of you in the showroom. Every step is carefully calculated. At <span className="font-bold not-italic tracking-wider">GT<span className="text-accent">1</span> MOTORS</span>, we turn your dream car into a reality.
          </p> */}
          
          {/* AR Quote */}
          <p className="mb-6 font-display text-[clamp(1.05rem,2.3vw,1.3rem)] italic leading-[1.9] text-text-primary/40" dir="rtl">
            هناك سيارات تعجبك، وهناك تلك السيارة الوحيدة التي تشعر وكأنها صُنعت خصيصاً لك. لهذا في GT1 موتورز، نقربك من سيارة أحلامك — من استيرادها من الخارج وحتى وصولها إلى الميناء، كل تفصيلة تُدار بعناية لنقدم لك الأفضل، حتى تراها أمامك في المعرض. كل خطوة محسوبة بدقة. في GT1 موتورز، نحوّل سيارة أحلامك إلى واقع.
          </p>
          
          {/* Source Attribution */}
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
            — CEO GT1 MOTORS
          </p>
        </div>
      </div>
    </section>
  );
}