/**
 * components/sections/Contact.jsx
 * ------------------------------------------------------------------
 * LIBRARY REFERENCE — a real, working foundation for the lead form
 * section, not a generic config-driven component. Copy this into a
 * dealership project and restyle freely (layout, spacing, copy,
 * single-column vs two-column, dark vs light, etc) — but keep using
 * useLeadForm() for the actual submit behavior rather than
 * reimplementing validation/honeypot/redirect logic per project.
 *
 * COUNTRY LIST: built dynamically from libphonenumber-js's supported
 * country list + the browser/Node Intl.DisplayNames API for human-
 * readable names — no hardcoded country data file to maintain, and
 * it covers every country libphonenumber-js supports rather than a
 * curated subset. Computed once at module load, not per render.
 *
 * INTERESTED IN: options come from site.config.js's
 * leadCapture.services — real, dealership-specific list. The
 * dropdown only ever offers those configured options, which is what
 * actually constrains the submitted value (lib/validators.js's
 * server-side check is deliberately generic, not tied to this exact
 * list — see that file's comment for why).
 * ------------------------------------------------------------------
 */

"use client";

import { getCountries, getCountryCallingCode } from "libphonenumber-js/min";
import { useLeadForm } from "@/hooks/useLeadForm";
import siteConfig from "@/config/site.config";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import Button from "@/components/ui/Button";

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

const COUNTRY_OPTIONS = getCountries()
  .map((iso) => ({
    iso,
    name: regionNames.of(iso) ?? iso,
    dialCode: getCountryCallingCode(iso),
  }))
  .sort((a, b) => {
    // Egypt first (primary market), then alphabetical by name.
    if (a.iso === "EG") return -1;
    if (b.iso === "EG") return 1;
    return a.name.localeCompare(b.name);
  });

export default function Contact() {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    submitError,
    country,
    setCountry,
  } = useLeadForm();

  return (
    <section id="contact" className="relative bg-background px-6 py-[4.5rem] md:px-10 md:py-24">
      <div className="mx-auto max-w-[1000px]">
        
        {/* EN Heading */}
        <h2 className="mt-0 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[1.08] text-text-primary">
          Start Your<br />
          <span className="font-normal italic text-accent">Dream Car Journey.</span>
        </h2>
        
        {/* AR Heading */}
        <p className="font-display text-[clamp(1rem,2.5vw,1.5rem)] italic text-text-primary/30" dir="rtl">
          ابدأ رحلة سيارة أحلامك
        </p>

        {/* Contact Layout Grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          
          {/* LEFT: Form Panel */}
          <div className="relative bg-surface p-9">
            {/* Top Red Gradient Line */}
            <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-accent to-transparent" />
            
            <p className="mb-6 text-[0.56rem] font-bold uppercase tracking-[0.28em] text-accent">
              Send an Enquiry &nbsp;|&nbsp; تواصل معنا
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
              
              <Input
                label="Your Name / اسمك"
                placeholder="Ahmed Hassan"
                {...register("name")}
                error={errors.name?.message}
              />

              {/* Phone Field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-text-muted">
                  Phone / الهاتف
                </label>
                <div className="flex gap-2">
                  
                  {/* Custom Mobile-Optimized Select Wrapper for Country Code */}
                  <div className="relative w-1/3 min-w-[100px]">
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full appearance-none rounded-none border border-white/10 bg-surface py-3 pl-3 pr-8 font-sans text-[0.75rem] text-text-primary outline-none transition-colors focus:border-accent [&:-webkit-autofill]:[-webkit-text-fill-color:#fff] [&:-webkit-autofill]:[transition:background-color_5000s_ease-in-out_0s]"
                    >
                      {COUNTRY_OPTIONS.map((c) => (
                        <option key={c.iso} value={c.iso} suppressHydrationWarning className="bg-surface text-[0.75rem]">
                          +{c.dialCode} {c.name}
                        </option>
                      ))}
                    </select>
                    {/* The Dropdown Arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/30">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1">
                    <Input
                      placeholder="100 000 0000"
                      {...register("phone")}
                      error={errors.phone?.message}
                    />
                  </div>
                </div>
              </div>

              {/* Interested In Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="interestedIn" className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-text-muted">
                  I'm Interested In / مهتم بـ
                </label>
                
                {/* Custom Mobile-Optimized Select Wrapper for Services */}
                <div className="relative w-full">
                  <select
                    id="interestedIn"
                    defaultValue=""
                    className="w-full appearance-none rounded-none border border-white/10 bg-surface py-3 pl-4 pr-10 font-sans text-[0.75rem] text-text-primary outline-none transition-colors focus:border-accent [&:-webkit-autofill]:[-webkit-text-fill-color:#fff] [&:-webkit-autofill]:[transition:background-color_5000s_ease-in-out_0s]"
                    {...register("interestedIn")}
                  >
                    <option value="" disabled className="bg-surface text-[0.75rem] text-text-muted">
                      Select an option...
                    </option>
                    {siteConfig.leadCapture.services?.map((service) => (
                      <option key={service} value={service} className="bg-surface text-[0.75rem]">
                        {service}
                      </option>
                    ))}
                  </select>
                  {/* The Dropdown Arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white/30">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {errors.interestedIn && (
                  <span className="text-[0.7rem] font-semibold text-red-500">
                    {errors.interestedIn.message}
                  </span>
                )}
              </div>

              <TextArea
                label="Message (optional) / رسالة"
                placeholder="Tell us about the car you're picturing..."
                {...register("message")}
                error={errors.message?.message}
              />

              {/* Honeypot */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("website")}
                />
              </div>

              {submitError && <p className="text-[0.7rem] font-semibold text-red-500">{submitError}</p>}

              <Button type="submit" loading={isSubmitting} className="mt-2 w-full">
                Send Enquiry →
              </Button>
            </form>
          </div>

          {/* RIGHT: Contact Details */}
          <div className="flex flex-col justify-center">
            
            {/* Phone & WhatsApp */}
            {(siteConfig.contact.whatsapp?.formNumber || siteConfig.contact.phone) && (
              <div className="flex items-start gap-4 border-b border-white/10 py-6 last:border-none">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center border border-white/10 bg-accent/10">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-accent stroke-[1.6px] stroke-linecap-round stroke-linejoin-round">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.122 1.528 5.855L0 24l6.293-1.502A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.647-.494-5.17-1.357l-.371-.216-3.737.892.923-3.622-.236-.385A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="none" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.24em] text-accent">Contact</p>
                  <p className="mt-0.5 text-[0.83rem] leading-[1.6] text-text-muted">
                    {[
                      siteConfig.contact.whatsapp?.formNumber ? `+${siteConfig.contact.whatsapp.formNumber}` : null,
                      siteConfig.contact.phone || null
                    ].filter(Boolean).join(" · ")}
                  </p>
                </div>
              </div>
            )}

            {/* Instagram */}
            {siteConfig.social?.instagram && (
              <div className="flex items-start gap-4 border-b border-white/10 py-6 last:border-none">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center border border-white/10 bg-accent/10">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-accent stroke-[1.6px] stroke-linecap-round stroke-linejoin-round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.24em] text-accent">Instagram</p>
                  <a 
                    href={
                      siteConfig.social.instagram.startsWith("http") 
                        ? siteConfig.social.instagram 
                        : `https://instagram.com/${siteConfig.social.instagram.replace("@", "")}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block text-[0.83rem] leading-[1.6] text-text-muted transition-colors hover:text-accent"
                  >
                    {siteConfig.social.instagram.includes("instagram.com/") 
                      ? `@${siteConfig.social.instagram.split("instagram.com/")[1].replace(/\/.*/, "")}` 
                      : siteConfig.social.instagram.startsWith("@")
                        ? siteConfig.social.instagram
                        : `@${siteConfig.social.instagram}`}
                  </a>
                </div>
              </div>
            )}

            {/* Email */}
            {siteConfig.contact?.email && (
              <div className="flex items-start gap-4 border-b border-white/10 py-6 last:border-none">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center border border-white/10 bg-accent/10">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-accent stroke-[1.6px] stroke-linecap-round stroke-linejoin-round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.24em] text-accent">Email</p>
                  <a 
                    href={`mailto:${siteConfig.contact.email}`}
                    className="mt-0.5 block text-[0.83rem] leading-[1.6] text-text-muted transition-colors hover:text-accent"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}