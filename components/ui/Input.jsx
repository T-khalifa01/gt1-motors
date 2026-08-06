/**
 * components/ui/Input.jsx
 * ------------------------------------------------------------------
 * Shared form input primitive. Uses forwardRef so React Hook Form's
 * register() can attach its ref directly — this component is meant
 * to be spread with register("fieldName") props, not manually wired.
 *
 * Error state uses a hardcoded red, not an accent-driven color —
 * same reasoning as WhatsApp green staying hardcoded: an error needs
 * to read as universally alarming regardless of what a given
 * dealership's accent color happens to be (a gold accent, for
 * instance, wouldn't communicate "something's wrong" clearly).
 * ------------------------------------------------------------------
 */

import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, error, className = "", ...props },
  ref
) {
  const fieldId = props.id || props.name;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={fieldId}
          className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-text-muted"
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={fieldId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className={`w-full appearance-none rounded-none border bg-white/5 px-4 py-3 font-sans text-[0.85rem] text-text-primary outline-none transition-colors placeholder:text-white/20 focus:border-accent [&:-webkit-autofill]:[-webkit-text-fill-color:#fff] [&:-webkit-autofill]:[transition:background-color_5000s_ease-in-out_0s] ${
          error ? "border-red-500" : "border-white/10"
        } ${className}`}
        {...props}
      />
      {error && (
        <span id={`${fieldId}-error`} className="text-[0.7rem] font-medium text-red-500">
          {error}
        </span>
      )}
    </div>
  );
});

export default Input;