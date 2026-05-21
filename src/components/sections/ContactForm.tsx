"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  "Corporate Audit & Assurance",
  "Taxation & Regulatory",
  "GST Registration & Filing",
  "Company Registration",
  "Income Tax Filing",
  "Business Advisory",
  "Wealth Management",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Field
          id="name"
          label="Full Name"
          type="text"
          placeholder="E.g. Siddharth Malhotra"
          required
        />
        <Field
          id="email"
          label="Email Address"
          type="email"
          placeholder="contact@company.com"
          required
        />
      </div>

      <div className="space-y-3">
        <label
          htmlFor="service"
          className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block"
        >
          Service Required
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full bg-pearl border-0 rounded-xl p-4 focus:ring-2 focus:ring-lime/30 outline-none transition-all appearance-none"
        >
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        <label
          htmlFor="message"
          className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-pearl border-0 rounded-xl p-4 focus:ring-2 focus:ring-lime/30 outline-none transition-all resize-none"
          placeholder="How can our firm assist your enterprise today?"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group px-10 py-5 bg-ink text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-ink-light transition-all shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Submit Inquiry"}
          <Send
            className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            aria-hidden="true"
          />
        </button>

        {status === "success" && (
          <p
            role="status"
            className="inline-flex items-center gap-2 text-sm text-ink font-medium"
          >
            <CheckCircle2
              className="w-5 h-5 text-lime"
              aria-hidden="true"
            />
            Thank you — our team will respond within one business day.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-3">
      <label
        htmlFor={id}
        className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-pearl border-0 rounded-xl p-4 focus:ring-2 focus:ring-lime/30 outline-none transition-all"
      />
    </div>
  );
}
