"use client";

import { useState } from "react";

const faqs = [
  {
    qEn: 'What does "no resale ban" actually mean?',
    qAr: 'ماذا يعني "بدون حظر إعادة بيع"؟',
    aEn: "Some financing plans restrict you from selling the car until it's fully paid off. Our Valu and Triple Zero plans carry no such restriction — the car is genuinely yours to keep or sell whenever you choose.",
    aAr: "بعض خطط التمويل تمنعك من بيع السيارة حتى السداد الكامل. خططنا لا تفرض هذا القيد — السيارة ملكك بالكامل، تحتفظ بها أو تبيعها متى شئت.",
  },
  {
    qEn: "What's the difference between Triple Zero and Valu?",
    qAr: 'ما الفرق بين "تريبل زيرو" و"فاليو"؟',
    aEn: "Triple Zero applies to brand new cars — 0% down payment, 0% admin fees, 0% interest. Valu is our broader financing option with 10% down payment and 0% admin fees, with no sale restrictions, and can be used with financing partners including Banque du Caire.",
    aAr: '"تريبل زيرو" مخصصة للسيارات الجديدة تماماً — بدون مقدم، بدون رسوم إدارية، بدون فوائد. أما "فاليو" فهي خيار تمويل أوسع بمقدم ١٠٪ وبدون رسوم إدارية، ودون قيود على البيع.',
  },
  {
    qEn: "How fast is approval, and what do I need?",
    qAr: "كم تستغرق الموافقة، وما المطلوب؟",
    aEn: "Approval is instant in most cases. All you need to apply is a valid ID — no lengthy paperwork, no extended waiting period.",
    aAr: "الموافقة فورية في معظم الحالات. كل ما تحتاجه للتقديم هو بطاقة هوية سارية — بدون أوراق معقدة أو انتظار طويل.",
  },
  {
    qEn: "How long does importing a custom-spec car take?",
    qAr: "كم تستغرق عملية استيراد سيارة بمواصفات خاصة؟",
    aEn: "Timelines vary by model, spec, and origin market. Once you share what you're looking for — color, trim, features — we'll give you a clear, realistic timeline before anything is confirmed.",
    aAr: "تختلف المدة حسب الموديل والمواصفات وبلد المصدر. بمجرد تحديد ما تريده — اللون، التجهيزات — سنعطيك جدولاً زمنياً واضحاً قبل تأكيد أي شيء.",
  },
  {
    qEn: "Can you sell my current car for me?",
    qAr: "هل يمكنكم بيع سيارتي الحالية؟",
    aEn: "Yes. We handle the full process professionally — from listing your car to closing the sale — so you're not managing two transactions on your own.",
    aAr: "نعم. نتولى العملية بالكامل باحترافية — من عرض السيارة حتى إتمام البيع — حتى لا تدير صفقتين بمفردك.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-secondary px-6 py-[4.5rem] md:px-10 md:py-24">
      <div className="mx-auto max-w-[1000px]">
        
        {/* EN Heading */}
        <h2 className="mt-0 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[1.08] text-text-primary">
          Before You<br />
          <span className="font-normal italic text-accent">Reach Out.</span>
        </h2>
        
        {/* AR Heading */}
        <p className="mb-10 font-display text-[clamp(1rem,2.5vw,1.5rem)] italic text-text-primary/30" dir="rtl">
          قبل أن تتواصل معنا
        </p>

        {/* FAQ List */}
        <div className="mx-auto mt-12 max-w-[780px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-white/10 first:border-t"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[0.85rem] font-medium text-text-primary">
                      {faq.qEn}
                    </span>
                    <span className="font-display text-[0.78rem] italic text-text-primary/35" dir="rtl">
                      {faq.qAr}
                    </span>
                  </div>
                  
                  {/* Plus/Cross Icon */}
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center border text-base font-light transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-accent bg-accent text-white"
                        : "border-white/15 text-[#696E81]"
                    }`}
                  >
                    +
                  </div>
                </button>

                {/* FAQ Body with max-height transition */}
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <div className="pb-6 text-[0.82rem] leading-[1.9] text-text-muted">
                    {faq.aEn}
                    <div className="mt-2.5 border-t border-white/10 pt-2.5 font-display text-[0.8rem] italic leading-[1.9] text-text-primary/30" dir="rtl">
                      {faq.aAr}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}