import {
  Building2,
  Scale,
  Briefcase,
  UserCheck,
  HandCoins,
  Landmark,
  Factory,
  Rocket,
  Globe,
  Wallet,
  ScrollText,
  ClipboardList,
  Mail,
  FileWarning,
  Receipt,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  hero: {
    titleLead: string;
    titleAccent: string;
    description: string;
  };
  intro: {
    heading: string;
    body: string;
  };
  advantages: { icon: LucideIcon; title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  bundle?: { title: string; items: string[] };
  cta: { headline: string; sub: string; label: string };
};

export const servicePages: Record<string, ServicePage> = {
  "private-limited-company": {
    slug: "private-limited-company",
    title: "Private Limited Company",
    metaTitle:
      "Private Limited Company Registration in Hyderabad | Company Registration in India",
    metaDescription:
      "Register a Private Limited Company in Hyderabad with senior CAs. DSC, DIN, SPICe+ INC-32, MOA/AOA, PAN/TAN, GST, MSME, ESIC, EPF — fully bundled.",
    eyebrow: "Start a Business",
    hero: {
      titleLead: "Private Limited",
      titleAccent: "Company Registration",
      description:
        "A separate legal entity with limited liability protection — the most fundable and credible structure for ambitious Indian businesses.",
    },
    intro: {
      heading: "What is a Private Limited Company?",
      body: "A Private Limited Company is a business entity owned by private shareholders with limited liability protection and separate legal identity. It is the structure of choice for founders raising capital, hiring teams, and building long-term institutional value.",
    },
    advantages: [
      {
        icon: Building2,
        title: "Limited Liability Protection",
        desc: "Personal assets stay protected — your liability is capped to your share capital.",
      },
      {
        icon: Scale,
        title: "Separate Legal Entity",
        desc: "The company can own assets, sign contracts, sue and be sued in its own name.",
      },
      {
        icon: HandCoins,
        title: "Easier Fundraising",
        desc: "Issue equity, preference shares, CCDs, or convertible notes to angels and VCs.",
      },
      {
        icon: UserCheck,
        title: "High Credibility",
        desc: "Banks, vendors, and enterprise customers prefer dealing with a registered Pvt Ltd.",
      },
      {
        icon: ScrollText,
        title: "Perpetual Succession",
        desc: "The company continues uninterrupted regardless of changes in shareholders or directors.",
      },
    ],
    process: [
      { step: "01", title: "Obtain DSC", desc: "Digital Signature Certificates for all proposed directors and subscribers." },
      { step: "02", title: "Obtain DIN", desc: "Director Identification Number filed as part of the SPICe+ form." },
      { step: "03", title: "Name Approval", desc: "Reserve your company name through the MCA's RUN / SPICe+ Part A facility." },
      { step: "04", title: "SPICe+ INC-32 Filing", desc: "Single integrated incorporation form with eMOA & eAOA submitted to the ROC." },
      { step: "05", title: "PAN & TAN Issued", desc: "Automatically allotted along with the Certificate of Incorporation." },
    ],
    bundle: {
      title: "Bundle Services Included",
      items: [
        "Company Incorporation (COI)",
        "GST Registration",
        "MSME / Udyam Registration",
        "ESIC Registration",
        "EPF Registration",
        "PAN Card",
        "TAN Number",
        "Labour License Support",
      ],
    },
    cta: {
      headline: "Take the First Step Toward Growth and Stability",
      sub: "Start your Pvt Ltd incorporation today — we'll handle every form, every fee, every follow-up with the MCA.",
      label: "Begin Incorporation",
    },
  },

  "llp-registration": {
    slug: "llp-registration",
    title: "LLP Registration",
    metaTitle: "LLP Registration in Hyderabad | Limited Liability Partnership",
    metaDescription:
      "LLP registration in Hyderabad with name approval, agreement drafting, PAN/TAN, and ongoing compliance — handled by senior Chartered Accountants.",
    eyebrow: "Start a Business",
    hero: {
      titleLead: "Limited Liability",
      titleAccent: "Partnership (LLP)",
      description:
        "The flexibility of a partnership with the limited liability of a company — perfect for professional firms and family businesses.",
    },
    intro: {
      heading: "Why choose an LLP?",
      body: "An LLP combines the operational flexibility of a partnership with corporate-grade liability protection. Compliance is lighter than a Pvt Ltd, capital requirements are minimal, and partners are shielded from each other's misconduct.",
    },
    advantages: [
      { icon: Scale, title: "Limited Partner Liability", desc: "No partner is personally liable for another partner's wrongful acts." },
      { icon: Briefcase, title: "Operational Flexibility", desc: "Internal governance is set by the LLP agreement — fully customisable." },
      { icon: Wallet, title: "Lower Compliance Cost", desc: "No mandatory audit until turnover crosses ₹40 L or capital exceeds ₹25 L." },
      { icon: ScrollText, title: "Separate Legal Entity", desc: "The LLP owns assets, signs contracts, and survives partner changes." },
    ],
    process: [
      { step: "01", title: "DSC for Designated Partners", desc: "Digital Signature Certificates for all designated partners." },
      { step: "02", title: "DPIN Application", desc: "Designated Partner Identification Number via FiLLiP form." },
      { step: "03", title: "Name Reservation", desc: "Reserve a unique LLP name through MCA's RUN-LLP facility." },
      { step: "04", title: "FiLLiP Filing", desc: "Incorporation form filed with the Registrar of Companies." },
      { step: "05", title: "LLP Agreement", desc: "Form 3 filed within 30 days of incorporation with the stamped agreement." },
    ],
    cta: {
      headline: "Launch Your LLP — End-to-End in 10 Days",
      sub: "We draft the agreement, file every form, and set up your compliance calendar.",
      label: "Register Your LLP",
    },
  },

  "partnership-firm": {
    slug: "partnership-firm",
    title: "Partnership Firm Registration",
    metaTitle: "Partnership Firm Registration in Hyderabad | Partnership Deed Drafting",
    metaDescription:
      "Partnership firm registration in Hyderabad with custom deed drafting, PAN, TAN, GST, and current account setup — done in days, not weeks.",
    eyebrow: "Start a Business",
    hero: {
      titleLead: "Partnership Firm",
      titleAccent: "Registration",
      description:
        "The fastest legal start for two or more co-founders — minimal paperwork, immediate operations.",
    },
    intro: {
      heading: "Is a partnership right for you?",
      body: "A partnership firm is ideal when two or more individuals want to start operations quickly with shared management. Setup is fast, compliance is minimal, and the deed gives you total control over profit-sharing and governance.",
    },
    advantages: [
      { icon: Briefcase, title: "Fast Set-Up", desc: "Operational within days — no MCA portal dependency." },
      { icon: Wallet, title: "Minimal Compliance", desc: "No mandatory annual filings unless registered with the Registrar." },
      { icon: HandCoins, title: "Flexible Profit Sharing", desc: "Partners decide ratios, capital contribution, and roles via the deed." },
      { icon: ScrollText, title: "Custom Governance", desc: "Decision rights, exit clauses, dispute resolution — all defined upfront." },
    ],
    process: [
      { step: "01", title: "Deed Drafting", desc: "Custom partnership deed reflecting capital, profit-share, and governance." },
      { step: "02", title: "Stamp Duty & Notarisation", desc: "Deed executed on appropriate stamp paper as per state schedule." },
      { step: "03", title: "PAN & TAN", desc: "Partnership firm PAN and TAN applied immediately." },
      { step: "04", title: "GST & Bank Account", desc: "GST registration plus current-account documentation handover." },
    ],
    cta: {
      headline: "Set Up Your Partnership Quickly",
      sub: "Custom deed, complete registrations, and a current account — all from one place.",
      label: "Start Partnership Setup",
    },
  },

  "one-person-company": {
    slug: "one-person-company",
    title: "One Person Company (OPC)",
    metaTitle: "One Person Company Registration | OPC in Hyderabad",
    metaDescription:
      "OPC registration in Hyderabad with nominee appointment, MOA/AOA drafting, and complete startup compliance bundle for solo founders.",
    eyebrow: "Start a Business",
    hero: {
      titleLead: "One Person",
      titleAccent: "Company (OPC)",
      description:
        "Corporate identity, limited liability, and full control — engineered for solo founders.",
    },
    intro: {
      heading: "Why OPC over Proprietorship?",
      body: "An OPC gives you the legal protection of a Pvt Ltd while keeping single-owner control. Unlike a proprietorship, your personal assets stay shielded, and conversion to a Pvt Ltd later is straightforward.",
    },
    advantages: [
      { icon: UserCheck, title: "Single Director Entity", desc: "Run the company yourself — no co-founder needed." },
      { icon: Building2, title: "Limited Liability", desc: "Personal assets remain protected from business obligations." },
      { icon: HandCoins, title: "Funding Ready", desc: "Convert to Pvt Ltd seamlessly when raising your first round." },
      { icon: ScrollText, title: "Legal Recognition", desc: "Recognised by banks, government tenders, and enterprise vendors." },
    ],
    process: [
      { step: "01", title: "DSC & DIN", desc: "Digital signature and DIN for the sole director." },
      { step: "02", title: "Name Approval", desc: "OPC name reserved through SPICe+ Part A." },
      { step: "03", title: "Nominee Consent", desc: "Form INC-3 from your appointed nominee." },
      { step: "04", title: "SPICe+ Incorporation", desc: "INC-32 with eMOA, eAOA, PAN, and TAN filed together." },
    ],
    cta: {
      headline: "Build a Real Business as a Solo Founder",
      sub: "Get the legal structure that investors and enterprise customers respect.",
      label: "Register Your OPC",
    },
  },

  proprietorship: {
    slug: "proprietorship",
    title: "Proprietorship Registration",
    metaTitle: "Proprietorship Registration in Hyderabad | GST + MSME + Current Account",
    metaDescription:
      "Sole proprietorship setup in Hyderabad — GST, MSME / Udyam, Shop & Establishment, and current-account opening completed end-to-end.",
    eyebrow: "Start a Business",
    hero: {
      titleLead: "Sole",
      titleAccent: "Proprietorship",
      description:
        "The fastest legal route for solo entrepreneurs — operational with full banking and GST support in days.",
    },
    intro: {
      heading: "Lightest legal structure available",
      body: "A proprietorship has no separate registration with the MCA. We package the practical registrations you actually need — GST, MSME, Shop & Establishment, and a current bank account — so you're legitimately in business immediately.",
    },
    advantages: [
      { icon: HandCoins, title: "Lowest Cost Start", desc: "No incorporation fees, no MCA filings, no minimum capital." },
      { icon: Briefcase, title: "Full Control", desc: "All decisions and profits belong to the owner." },
      { icon: Wallet, title: "Minimal Compliance", desc: "Only your personal ITR plus GST / TDS if applicable." },
      { icon: ScrollText, title: "Easy Conversion", desc: "Upgrade to LLP or Pvt Ltd later without disruption." },
    ],
    process: [
      { step: "01", title: "Identity Setup", desc: "PAN, Aadhaar, and address proof verification." },
      { step: "02", title: "MSME / Udyam", desc: "Udyam registration unlocking subsidies and priority lending." },
      { step: "03", title: "GST & Shop Act", desc: "GST + Shop & Establishment license filed in parallel." },
      { step: "04", title: "Current Account", desc: "Documentation pack for your preferred bank — zero rework." },
    ],
    cta: {
      headline: "Get Operational in 72 Hours",
      sub: "Skip the bureaucracy. We'll set up everything you need to start invoicing.",
      label: "Start My Proprietorship",
    },
  },

  "society-trust": {
    slug: "society-trust",
    title: "Society & Trust Registration",
    metaTitle: "Society & Trust Registration in Hyderabad | 12A, 80G, FCRA",
    metaDescription:
      "Society and trust registration with 12A, 80G, and FCRA compliance support for NGOs, charitable organisations, and family trusts.",
    eyebrow: "Start a Business",
    hero: {
      titleLead: "Society & Trust",
      titleAccent: "Registration",
      description:
        "Establish your charitable, educational, or family trust with full statutory and tax-exemption compliance.",
    },
    intro: {
      heading: "Built for purpose-driven entities",
      body: "Whether you're forming a charitable society, public trust, or private family trust, the structure must align with your objects and the tax exemptions you want to claim. We design the deed, register the entity, and prepare you for 12A and 80G certification.",
    },
    advantages: [
      { icon: Landmark, title: "Statutory Recognition", desc: "Registered under the Societies Act or Indian Trusts Act." },
      { icon: ScrollText, title: "Tax Exemptions", desc: "12A registration for income exemption and 80G for donor benefit." },
      { icon: HandCoins, title: "Donation-Ready", desc: "Foreign-contribution capability via FCRA when eligible." },
      { icon: Briefcase, title: "Governance Clarity", desc: "Board structure, succession, and dissolution clauses tailored to objects." },
    ],
    process: [
      { step: "01", title: "Object Drafting", desc: "Clear, exemption-aligned objects and rules of the society/trust." },
      { step: "02", title: "Deed Execution", desc: "Trust deed or society MoA & rules registered with the appropriate authority." },
      { step: "03", title: "PAN & Bank Account", desc: "Entity PAN and current account in the trust/society name." },
      { step: "04", title: "12A & 80G Filing", desc: "Income-tax exemption applications filed and tracked to certificate issuance." },
    ],
    cta: {
      headline: "Launch Your Mission with the Right Structure",
      sub: "From deed to 80G — we handle the entire compliance chain.",
      label: "Register Your Society / Trust",
    },
  },

  "msme-registration": {
    slug: "msme-registration",
    title: "MSME / Udyam Registration",
    metaTitle: "MSME / Udyam Registration in Hyderabad | Subsidy & Priority Lending",
    metaDescription:
      "Udyam (MSME) registration in Hyderabad — unlock priority lending, subsidies, and statutory MSME protections in 24 hours.",
    eyebrow: "Registrations",
    hero: {
      titleLead: "MSME / Udyam",
      titleAccent: "Registration",
      description:
        "Unlock priority lending, government subsidies, and statutory protections under the MSMED Act.",
    },
    intro: {
      heading: "Why every Indian SME should register",
      body: "Udyam registration is free, paperless, and gives you measurable financial benefits — lower interest rates, faster credit, GST and electricity concessions, and statutory protection against delayed payments from buyers.",
    },
    advantages: [
      { icon: Factory, title: "Priority Sector Lending", desc: "Banks must lend to MSMEs at lower interest rates." },
      { icon: HandCoins, title: "Subsidy Access", desc: "Capital, ISO, and patent reimbursement subsidies." },
      { icon: ShieldCheck, title: "Delayed Payment Protection", desc: "Buyers must pay within 45 days — 3× bank rate interest otherwise." },
      { icon: ScrollText, title: "Government Tender Eligibility", desc: "Exemption from EMD and tender-form fees." },
    ],
    process: [
      { step: "01", title: "Eligibility Check", desc: "Investment + turnover thresholds for Micro / Small / Medium classification." },
      { step: "02", title: "Document Pack", desc: "Aadhaar, PAN, GSTIN, and bank details collated." },
      { step: "03", title: "Udyam Filing", desc: "Application filed on the Udyam Registration portal." },
      { step: "04", title: "Certificate Delivery", desc: "Udyam Registration Number and e-certificate within 24 hours." },
    ],
    cta: {
      headline: "Get Your Udyam Certificate in 24 Hours",
      sub: "Free under the scheme — we handle filing and lifetime renewals.",
      label: "Apply for MSME / Udyam",
    },
  },

  "startup-india": {
    slug: "startup-india",
    title: "Startup India / DPIIT Recognition",
    metaTitle: "Startup India / DPIIT Recognition | Angel Tax Exemption | Hyderabad",
    metaDescription:
      "DPIIT recognition under Startup India — angel-tax exemption, 3-year tax holiday, IPR fast-track, and easy exit norms.",
    eyebrow: "Registrations",
    hero: {
      titleLead: "Startup India",
      titleAccent: "DPIIT Recognition",
      description:
        "Tax holiday, angel-tax exemption, fast-track IPR, and easier exits — for India's most ambitious founders.",
    },
    intro: {
      heading: "More than a certificate — a strategic unlock",
      body: "DPIIT recognition under Startup India gives your venture concrete financial benefits: a three-year tax holiday under Section 80-IAC, exemption from angel tax under Section 56(2)(viib), IPR fast-tracking, and self-certification for labour and environmental laws.",
    },
    advantages: [
      { icon: Rocket, title: "3-Year Tax Holiday", desc: "100% deduction on profits for three consecutive years (80-IAC)." },
      { icon: HandCoins, title: "Angel Tax Exemption", desc: "Investments above fair value exempted under 56(2)(viib)." },
      { icon: ScrollText, title: "IPR Fast-Track", desc: "80% rebate on patent filing and trademark fees." },
      { icon: Briefcase, title: "Easier Exit Norms", desc: "Wind up the company within 90 days under the Insolvency Code." },
    ],
    process: [
      { step: "01", title: "Eligibility Review", desc: "Age, turnover, innovation criteria assessed against DPIIT norms." },
      { step: "02", title: "Pitch & Justification", desc: "Innovation/scalability narrative drafted for the DPIIT portal." },
      { step: "03", title: "Application Filing", desc: "Application + supporting documents submitted on the Startup India portal." },
      { step: "04", title: "Section 80-IAC Filing", desc: "Separate application for the tax-holiday certificate post-recognition." },
    ],
    cta: {
      headline: "Get Recognised. Get the Benefits.",
      sub: "We secure your DPIIT certificate and the 80-IAC tax holiday — end-to-end.",
      label: "Apply for DPIIT Recognition",
    },
  },

  "import-export-code": {
    slug: "import-export-code",
    title: "Import Export Code (IEC)",
    metaTitle: "Import Export Code (IEC) Registration | Hyderabad",
    metaDescription:
      "IEC registration with DGFT for businesses going cross-border — issued in 48 hours with lifetime validity.",
    eyebrow: "Registrations",
    hero: {
      titleLead: "Import Export",
      titleAccent: "Code (IEC)",
      description:
        "The 10-digit DGFT code every business needs to import, export, or receive foreign remittances.",
    },
    intro: {
      heading: "Mandatory for cross-border trade",
      body: "Without IEC, banks won't clear export-import payments and customs won't process consignments. The code is issued by DGFT, has lifetime validity, and we typically secure it within 48 hours.",
    },
    advantages: [
      { icon: Globe, title: "Lifetime Validity", desc: "No renewal, no annual filing — issued once for the entity's life." },
      { icon: HandCoins, title: "Foreign Remittance Ready", desc: "Receive payments from overseas clients legally and seamlessly." },
      { icon: ScrollText, title: "Export Incentives", desc: "Eligibility for MEIS, SEIS, RoDTEP, and duty drawback schemes." },
      { icon: Briefcase, title: "GST LUT Filing", desc: "Letter of Undertaking filed to export without paying IGST." },
    ],
    process: [
      { step: "01", title: "Document Pack", desc: "PAN, Aadhaar/passport, bank certificate, address proof." },
      { step: "02", title: "DGFT Application", desc: "Online application on the DGFT portal with digital signatures." },
      { step: "03", title: "Fee & Verification", desc: "Statutory fee paid and documents auto-verified." },
      { step: "04", title: "IEC Delivered", desc: "10-digit code issued — usually within 48 hours." },
    ],
    cta: {
      headline: "Go Global in 48 Hours",
      sub: "Get your IEC and start exporting, importing, and receiving foreign payments.",
      label: "Apply for IEC",
    },
  },

  "roc-filing": {
    slug: "roc-filing",
    title: "ROC Filings & Secretarial Compliance",
    metaTitle: "ROC Filing Services in Hyderabad | MGT-7, AOC-4, DIR-3 KYC",
    metaDescription:
      "ROC annual returns, MGT-7, AOC-4, DIR-3 KYC, board resolutions, and full Companies Act compliance — managed by senior CAs.",
    eyebrow: "Return Filing",
    hero: {
      titleLead: "ROC Filings &",
      titleAccent: "Secretarial Compliance",
      description:
        "Stay 100% compliant with the Companies Act — annual returns, KYC, resolutions, and event-based filings handled on time.",
    },
    intro: {
      heading: "Avoid penalties, protect director KYC",
      body: "Missing an ROC deadline triggers ₹100/day late fees per form — and DIN deactivation if DIR-3 KYC lapses. We maintain a dedicated compliance calendar so every form (MGT-7, AOC-4, DPT-3, ADT-1, DIR-3 KYC) is filed before due date.",
    },
    advantages: [
      { icon: ScrollText, title: "Annual Returns", desc: "MGT-7 / MGT-7A filed within 60 days of the AGM." },
      { icon: ClipboardList, title: "Financial Statements", desc: "AOC-4 / AOC-4 XBRL filed within 30 days of the AGM." },
      { icon: UserCheck, title: "DIR-3 KYC", desc: "Director KYC filed annually to keep DINs active." },
      { icon: Briefcase, title: "Event-Based Filings", desc: "Director changes, share allotment, charges, address change." },
    ],
    process: [
      { step: "01", title: "Compliance Calendar", desc: "Map every due date for the financial year." },
      { step: "02", title: "Books & Resolutions", desc: "Finalise books, board meeting minutes, and AGM resolutions." },
      { step: "03", title: "Form Preparation", desc: "MGT-7, AOC-4, DIR-3 KYC, and supporting attachments." },
      { step: "04", title: "Filing & SRN Tracking", desc: "Filings submitted with DSC and SRNs archived in your portal." },
    ],
    cta: {
      headline: "Never Miss an ROC Deadline Again",
      sub: "Move your secretarial compliance to a team that owns the calendar.",
      label: "Outsource ROC Compliance",
    },
  },

  "tds-returns": {
    slug: "tds-returns",
    title: "TDS Returns",
    metaTitle: "TDS Return Filing in Hyderabad | 24Q, 26Q, 27Q, 26AS Reconciliation",
    metaDescription:
      "TDS deduction, monthly deposit, and quarterly Form 24Q / 26Q / 27Q filing with 26AS reconciliation by senior CAs.",
    eyebrow: "Return Filing",
    hero: {
      titleLead: "TDS Deduction &",
      titleAccent: "Return Filing",
      description:
        "Monthly TDS challan, quarterly Form 24Q / 26Q / 27Q, and 26AS reconciliation — handled with zero short-deduction risk.",
    },
    intro: {
      heading: "Get TDS right, every quarter",
      body: "TDS mistakes are expensive: 1% interest per month for short-deduction, 1.5% for late deposit, and ₹200/day for late returns. We deduct, deposit, file, and reconcile so your books and Form 26AS always match.",
    },
    advantages: [
      { icon: Wallet, title: "Accurate Deduction", desc: "Section-wise rates verified against the latest CBDT circulars." },
      { icon: ClipboardList, title: "Monthly Deposit", desc: "Challan 281 filed by the 7th of every month." },
      { icon: ScrollText, title: "Quarterly Returns", desc: "24Q (salary), 26Q (others), 27Q (NR), 27EQ (TCS)." },
      { icon: ShieldCheck, title: "26AS Reconciliation", desc: "Match TDS deducted vs Form 26AS to avoid mismatches at scrutiny." },
    ],
    process: [
      { step: "01", title: "Section Mapping", desc: "Classify every payment under the correct TDS section." },
      { step: "02", title: "Monthly Deposit", desc: "Challan 281 filed before the 7th of each month." },
      { step: "03", title: "Quarterly Return", desc: "24Q / 26Q / 27Q filed before the statutory due date." },
      { step: "04", title: "TDS Certificates", desc: "Form 16 / 16A / 27D generated and distributed to deductees." },
    ],
    cta: {
      headline: "Outsource TDS — Stop Chasing Penalties",
      sub: "Predictable monthly fees, zero defaults, fully reconciled.",
      label: "Move TDS to Experts",
    },
  },

  "payroll-compliance": {
    slug: "payroll-compliance",
    title: "Payroll Compliance (ESIC / EPF / PT)",
    metaTitle: "Payroll Compliance in Hyderabad | ESIC, EPF, Professional Tax",
    metaDescription:
      "ESIC, EPF, and Professional Tax registration plus monthly returns and challan management for growing teams.",
    eyebrow: "Return Filing",
    hero: {
      titleLead: "Payroll Compliance",
      titleAccent: "ESIC · EPF · PT",
      description:
        "Onboard employees the right way and stay compliant with EPFO, ESIC, and state Professional Tax departments.",
    },
    intro: {
      heading: "Compliance scales with headcount",
      body: "Once you cross 10–20 employees, EPF and ESIC become mandatory; Professional Tax kicks in even sooner in most states. We register your establishment, structure salaries, file monthly returns, and handle inspections.",
    },
    advantages: [
      { icon: UserCheck, title: "EPF Registration & Returns", desc: "UAN generation, monthly ECR, and KYC reconciliation." },
      { icon: ShieldCheck, title: "ESIC Compliance", desc: "Employee + employer contributions and monthly returns." },
      { icon: ScrollText, title: "Professional Tax", desc: "State-wise registration and monthly deposit challans." },
      { icon: ClipboardList, title: "Inspection Support", desc: "Replies, records, and representation during PF/ESI inspections." },
    ],
    process: [
      { step: "01", title: "Establishment Registration", desc: "EPFO, ESIC, and state PT codes obtained." },
      { step: "02", title: "Salary Structuring", desc: "Optimise CTC components for tax and statutory efficiency." },
      { step: "03", title: "Monthly Returns", desc: "ECR (EPF), Return (ESI), and PT challans filed monthly." },
      { step: "04", title: "Employee Lifecycle", desc: "Onboarding KYC, transfers, and full-and-final settlements." },
    ],
    cta: {
      headline: "Hire Confidently. We Handle Compliance.",
      sub: "From your first employee to your hundredth — EPF, ESI, and PT covered.",
      label: "Set Up Payroll Compliance",
    },
  },

  "income-tax-notices": {
    slug: "income-tax-notices",
    title: "Income Tax Notice Response",
    metaTitle: "Income Tax Notice Response | Section 143, 148, 245 Defense",
    metaDescription:
      "Senior CA representation for Income Tax notices — Section 143(2) scrutiny, 148 reassessment, 245 adjustments, and faceless assessments.",
    eyebrow: "Notices & Advisory",
    hero: {
      titleLead: "Income Tax",
      titleAccent: "Notice Response",
      description:
        "Senior-partner drafting and representation for every Income Tax notice — scrutiny, reassessment, adjustment, and appeals.",
    },
    intro: {
      heading: "A notice is not a verdict",
      body: "Most notices can be resolved without escalation if the response is precise, well-drafted, and filed within deadline. We've defended hundreds of assessments — from intimation u/s 143(1) to CIT(A) appeals.",
    },
    advantages: [
      { icon: Mail, title: "Section 143(1) & 143(2)", desc: "Intimation reconciliation and scrutiny assessment responses." },
      { icon: ScrollText, title: "Section 148 / 147", desc: "Reassessment notice defense with case-law backing." },
      { icon: ClipboardList, title: "Section 245", desc: "Refund adjustment objections and rectification." },
      { icon: ShieldCheck, title: "Faceless Assessment", desc: "End-to-end representation under the faceless e-Assessment Scheme." },
    ],
    process: [
      { step: "01", title: "Notice Review", desc: "Decode the notice — section, ground, deadline, and risk exposure." },
      { step: "02", title: "Document Marshalling", desc: "Collate evidence, bank statements, and supporting records." },
      { step: "03", title: "Reply Drafting", desc: "Legally watertight reply with statutory references and case law." },
      { step: "04", title: "Representation", desc: "Appear before the AO, faceless unit, or CIT(A) on your behalf." },
    ],
    cta: {
      headline: "Got a Notice? Don't Panic.",
      sub: "Share it confidentially — we'll tell you exactly what's at stake and how to respond.",
      label: "Get Notice Help",
    },
  },

  "gst-notices-refunds": {
    slug: "gst-notices-refunds",
    title: "GST Notices & Refunds",
    metaTitle: "GST Notice Response & Refund Processing | Hyderabad",
    metaDescription:
      "ASMT-10 response, departmental audit defence, and fast-track export GST refund processing under LUT and with payment.",
    eyebrow: "Notices & Advisory",
    hero: {
      titleLead: "GST Notices",
      titleAccent: "& Refunds",
      description:
        "From ASMT-10 to export refunds — expert handling of every GST departmental interaction.",
    },
    intro: {
      heading: "Two GST realities every business hits",
      body: "Either the department asks questions, or it owes you money. Both need expert handling: notice responses must be precise and on time; refund claims (RFD-01) need clean documentation and persistent follow-up to actually credit your account.",
    },
    advantages: [
      { icon: FileWarning, title: "ASMT-10 Response", desc: "Discrepancy notice drafted with section-wise reconciliation." },
      { icon: ScrollText, title: "Audit Representation", desc: "GST departmental audit (ADT-01 / ADT-02) end-to-end defense." },
      { icon: Receipt, title: "Export Refunds", desc: "RFD-01 filing under LUT or with-payment route, end-to-end." },
      { icon: HandCoins, title: "Inverted Duty Refunds", desc: "Refund of accumulated ITC on inverted-duty structure." },
    ],
    process: [
      { step: "01", title: "Initial Assessment", desc: "Notice analysis or refund eligibility study within 24 hours." },
      { step: "02", title: "Documentation Pack", desc: "Invoice, shipping bill, FIRC, and bank realisation matched." },
      { step: "03", title: "Filing", desc: "Reply / RFD-01 filed with comprehensive annexures." },
      { step: "04", title: "Follow-Up to Closure", desc: "Active follow-up with the proper officer until order or credit." },
    ],
    cta: {
      headline: "Resolve Notices. Recover Refunds.",
      sub: "Stop chasing the GST portal. Hand it over to a specialist team.",
      label: "Talk to a GST Expert",
    },
  },

  "project-reports": {
    slug: "project-reports",
    title: "Project Reports & CMA Data",
    metaTitle: "Project Report & CMA Data Preparation | Bank Loan Reports",
    metaDescription:
      "Bankable project reports, CMA data, and financial projections for term loans, working capital, MUDRA, and PMEGP funding.",
    eyebrow: "Notices & Advisory",
    hero: {
      titleLead: "Project Reports",
      titleAccent: "& CMA Data",
      description:
        "Bankable financial projections built on real-world ratios — designed to clear credit-committee scrutiny.",
    },
    intro: {
      heading: "The difference between a good idea and a funded one",
      body: "Banks fund projects on the strength of the report, not the founder's enthusiasm. We build CMA data and projections grounded in industry benchmarks, sensitivity-tested, and structured exactly the way credit committees want to read them.",
    },
    advantages: [
      { icon: ClipboardList, title: "Term Loan Reports", desc: "5–7 year projections with DSCR, IRR, and break-even analysis." },
      { icon: HandCoins, title: "Working Capital CMA", desc: "Operating-cycle based limit working with current-ratio compliance." },
      { icon: Wallet, title: "MUDRA / PMEGP", desc: "Scheme-aligned project reports for government-subsidised loans." },
      { icon: ScrollText, title: "Equity Pitch Decks", desc: "Investor-grade financial models for angel and VC fundraises." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Promoter background, project scope, funding requirement." },
      { step: "02", title: "Assumption Workshop", desc: "Ratios, capacity, pricing, and macro assumptions agreed in writing." },
      { step: "03", title: "Model & Report", desc: "Excel model + bound report in bank's preferred format." },
      { step: "04", title: "Banker Walkthrough", desc: "We walk the relationship manager through the report personally." },
    ],
    cta: {
      headline: "Get a Report Banks Actually Approve",
      sub: "Industry-grade projections, drafted by CAs who know how credit committees think.",
      label: "Build My Project Report",
    },
  },
};
