"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "success";

const serviceOptions = [
  "Corporate Audit & Assurance",
  "Taxation & Regulatory",
  "GST Registration & Filing",
  "Company Registration",
  "Income Tax Filing",
  "Business Advisory",
  "Wealth Management",
];

// WhatsApp business number — digits only, no + or spaces
const WHATSAPP_NUMBER = siteConfig.contact.whatsapp.replace(/[^\d]/g, "");

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    // Build a clean, line-broken WhatsApp message
    const lines = [
      "*New Service Inquiry — AXIAFIN Website*",
      "",
      `*Name:* ${name || "—"}`,
      `*Email:* ${email || "—"}`,
      `*Service Required:* ${service || "—"}`,
      "",
      "*Message:*",
      message || "—",
    ];
    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    // Open WhatsApp in a new tab (web on desktop, app on mobile)
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("success");
    form.reset();
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
          className="group px-10 py-5 bg-ink text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-ink-light transition-all shadow-xl"
        >
          Send via WhatsApp
          <WhatsAppIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </button>

        {status === "success" && (
          <p
            role="status"
            className="inline-flex items-center gap-2 text-sm text-ink font-medium"
          >
            <CheckCircle2 className="w-5 h-5 text-lime" aria-hidden="true" />
            Opening WhatsApp — please send the pre-filled message to complete your inquiry.
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01a1.1 1.1 0 00-.795.372c-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
