/**
 * components/ui/TextArea.jsx
 * ------------------------------------------------------------------
 * Shared form textarea primitive — same pattern as Input.jsx
 * (forwardRef for React Hook Form's register(), hardcoded red for
 * error state). See Input.jsx for the reasoning on both.
 * ------------------------------------------------------------------
 */

import { forwardRef } from "react";

const TextArea = forwardRef(function TextArea(
  { label, error, rows = 3, className = "", ...props },
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
      <textarea
        ref={ref}
        id={fieldId}
        rows={rows}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className={`w-full resize-none appearance-none rounded-none border bg-white/5 px-4 py-3 font-sans text-[0.85rem] text-text-primary outline-none transition-colors placeholder:text-white/20 focus:border-accent [&:-webkit-autofill]:[-webkit-text-fill-color:#fff] [&:-webkit-autofill]:[transition:background-color_5000s_ease-in-out_0s] ${
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

export default TextArea;