/**
 * components/ui/Button.jsx
 * ------------------------------------------------------------------
 * Generic button primitive — for form submits and any non-WhatsApp
 * action. WhatsApp CTAs use WhatsAppButton.jsx instead, which has its
 * own link-building logic; this one is a plain <button> for things
 * like form submission where the parent controls onClick/type/disabled.
 *
 * Colors use the same accent/primary Tailwind utilities wired in
 * app/globals.css — no inline style needed for anything covered by
 * that system.
 * ------------------------------------------------------------------
 */

"use client";

export default function Button({
  variant = "solid",
  type = "button",
  disabled = false,
  loading = false,
  onClick,
  className = "",
  children,
}) {
  const isOutline = variant === "outline";
  const isDisabled = disabled || loading;

  const variantClasses = isOutline
    ? "border border-accent text-accent bg-transparent hover:bg-accent/10"
    : "bg-gradient-to-br from-[#D4293D] via-accent to-[#7E0F1D] text-white shadow-[0_4px_24px_rgba(179,24,43,0.28)] hover:-translate-y-[1px] hover:shadow-[0_8px_28px_rgba(179,24,43,0.32)]";

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={`relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-none p-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70 ${variantClasses} ${className}`}
    >
      <span className={loading ? "opacity-0" : "opacity-100"}>
        {children}
      </span>
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          Sending…
        </span>
      )}
    </button>
  );
}