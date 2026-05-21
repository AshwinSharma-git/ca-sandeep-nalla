export const siteConfig = {
  name: "AXIAFIN",
  legalName: "AXIAFIN Financial Services",
  shortName: "AXIAFIN",
  url: "https://axiafin.com",
  description:
    "AXIAFIN is a modern Chartered Accountancy and financial-compliance firm in Hyderabad — company registration, GST, audit, ITR filing, MSME, and end-to-end stewardship for startups, SMEs, professionals, and individuals.",
  tagline: "Empowering Your Financial Compliance",
  mission: "Providing best value to your time and money.",
  locale: "en_IN",
  contact: {
    email: "hello@axiafin.com",
    phone: "+91 89776 08216",
    phoneDisplay: "089776 08216",
    phoneE164: "+918977608216",
    whatsapp: "+918977608216",
    workingHours: "Mon – Fri · 9:00 AM – 6:00 PM",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/axiafin",
    twitter: "https://twitter.com/axiafin",
    facebook: "https://www.facebook.com/axiafin",
    instagram: "https://www.instagram.com/axiafin",
  },
} as const;

export const offices = [
  {
    city: "Kothapet, Hyderabad",
    label: "Head Office",
    addr: "2nd Floor, 11-13-116/8, Rd Number 4, Polkampally, Margadarshi Colony, Kothapet, Hyderabad, Telangana 500035",
    phone: "+91 89776 08216",
    email: "kothapet@axiafin.com",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Margadarshi+Colony+Kothapet+Hyderabad+500035",
  },
  {
    city: "HITEC City, Hyderabad",
    label: "Branch Office",
    addr: "5th Floor, Western Aqua, Whitefields, HITEC City, Kondapur, Hyderabad, Telangana 500081",
    phone: "+91 89776 08216",
    email: "hitech@axiafin.com",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Western+Aqua+Whitefields+HITEC+City+Kondapur+500081",
  },
] as const;
