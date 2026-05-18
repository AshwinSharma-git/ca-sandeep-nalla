export const siteConfig = {
  name: "CA Sandeep Nalla & Co.",
  shortName: "CA Sandeep Nalla",
  url: "https://casandeepnalla.com",
  description:
    "Chartered Accountancy firm in Hyderabad offering company registration, GST, audit, ITR filing, MSME, and end-to-end financial compliance for startups, SMEs, professionals, and individuals.",
  tagline: "Empowering Your Financial Compliance",
  mission: "Providing best value to your time and money.",
  locale: "en_IN",
  contact: {
    email: "info@sandeepnallaco.com",
    phone: "+91 89776 08216",
    phoneDisplay: "089776 08216",
    phoneE164: "+918977608216",
    whatsapp: "+918977608216",
    workingHours: "Mon – Fri · 9:00 AM – 6:00 PM",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/ca-sandeep-nalla",
    twitter: "https://twitter.com/casandeepnalla",
    facebook: "https://www.facebook.com/casandeepnalla",
    instagram: "https://www.instagram.com/casandeepnalla",
  },
} as const;

export const offices = [
  {
    city: "Kothapet, Hyderabad",
    label: "Head Office",
    addr: "2nd Floor, 11-13-116/8, Rd Number 4, Polkampally, Margadarshi Colony, Kothapet, Hyderabad, Telangana 500035",
    phone: "+91 89776 08216",
    email: "kothapet@sandeepnallaco.com",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Margadarshi+Colony+Kothapet+Hyderabad+500035",
  },
  {
    city: "HITEC City, Hyderabad",
    label: "Branch Office",
    addr: "5th Floor, Western Aqua, Whitefields, HITEC City, Kondapur, Hyderabad, Telangana 500081",
    phone: "+91 89776 08216",
    email: "hitech@sandeepnallaco.com",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Western+Aqua+Whitefields+HITEC+City+Kondapur+500081",
  },
] as const;
