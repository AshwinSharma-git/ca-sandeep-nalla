import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppFloat() {
  const href = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^\d]/g, "")}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with an expert on WhatsApp"
      className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform group focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold"
    >
      <MessageCircle className="w-7 h-7" aria-hidden="true" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-navy px-4 py-2 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity whitespace-nowrap border border-gold/10 pointer-events-none">
        Chat with an Expert
      </span>
    </a>
  );
}
