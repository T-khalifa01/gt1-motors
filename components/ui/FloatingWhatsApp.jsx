/**
 * components/ui/FloatingWhatsApp.jsx
 * ------------------------------------------------------------------
 * Shared primitive — persistent floating WhatsApp button, fixed
 * bottom-right, visible across the whole single-page scroll. Same
 * link + analytics logic as WhatsAppButton, different treatment
 * (icon-only, fixed position, pulse effect for visibility).
 *
 * Deliberately fixed bottom-right regardless of i18n.dir (LTR/RTL) —
 * floating chat buttons are a universal UX convention, not something
 * that should flip with text direction the way content layout does.
 * ------------------------------------------------------------------
 */

"use client";

import { useState, useEffect } from "react";
import siteConfig from "@/config/site.config";
import { buildCtaLink } from "@/lib/whatsapp";
import { trackEvent, ANALYTICS_EVENTS } from "@/lib/analytics";

export default function FloatingWhatsApp() {
  const href = buildCtaLink(siteConfig);
  
  // Track visibility of specific sections
  const [visibleSections, setVisibleSections] = useState({ home: true, contact: false });
  
  // Manage the expand state natively for mobile
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Look for the Hero and Contact sections
    const elements = [
      document.getElementById("home") || document.getElementById("hero"),
      document.getElementById("contact")
    ].filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSections((prev) => {
          const next = { ...prev };
          entries.forEach((entry) => {
            if (entry.target.id) {
              next[entry.target.id] = entry.isIntersecting;
            }
          });
          return next;
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!href) return null;

  function handleClick(e) {
    // On mobile (< 768px), force the first tap to just expand the button
    if (window.innerWidth < 768 && !isExpanded) {
      e.preventDefault();
      setIsExpanded(true);
      return;
    }

    // On desktop, or if already expanded on mobile, allow the link to open WhatsApp
    trackEvent(ANALYTICS_EVENTS.WHATSAPP_FLOATING_CLICK, {
      dealership: siteConfig.dealership.slug,
    });
    
    // Collapse it again shortly after they tap away (for mobile cleanup)
    setTimeout(() => setIsExpanded(false), 500);
  }

  // Hide the button if ANY of the tracked sections are currently in view
  const isHidden = Object.values(visibleSections).some((isVisible) => isVisible);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-16 -right-4 z-50 flex items-center rounded-2xl bg-[#25D366] p-3 shadow-[0_8px_32px_rgba(37,211,102,0.4)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 ${
        isHidden
          ? "translate-x-[150%] opacity-0 pointer-events-none" 
          : isExpanded
            ? "-translate-x-8 rotate-0" 
            // On mobile it rests tilted and tucked. On desktop (md), it forces the expanded translation and rotation.
            : "translate-x-0 -rotate-12 md:-translate-x-8 md:rotate-0" 
      }`}
    >
      {/* Icon Wrapper: Fixed size so the square shape stays perfectly maintained */}
      <div className="flex h-8 w-8 shrink-0 items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.122 1.528 5.855L0 24l6.293-1.502A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.647-.494-5.17-1.357l-.371-.216-3.737.892.923-3.622-.236-.385A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </div>
      
      {/* Sliding Text: Forces the text to be fully visible on desktop sizes automatically */}
      <div
        className={`flex items-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isExpanded 
            ? "ml-3 max-w-[120px] opacity-100" 
            : "ml-0 max-w-0 opacity-0 md:ml-3 md:max-w-[120px] md:opacity-100"
        }`}
      >
        <span className="whitespace-nowrap pr-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white">
          Chat with us
        </span>
      </div>
    </a>
  );
}