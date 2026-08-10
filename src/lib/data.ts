export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#food-category" },
  { label: "Process", href: "/process" },
  { label: "Quality", href: "/quality" },
  { label: "Enquiry", href: "/enquiry" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const CONTACT_INFO = {
  salesPhones: [
    { display: "+91 82008 39798", value: "+918200839798" },
    { display: "+91 94283 62005", value: "+919428362005" },
  ],
  supportPhone: { display: "+91 95863 78004", value: "+919586378004" },
  emails: [
    { display: "info@purifyfoods.com", value: "info@purifyfoods.com" },
    { display: "support@purifyfoods.com", value: "support@purifyfoods.com" },
  ],
  officeAddress: "3 Giriraj, Behind Gandhi Baug, Mahuva, Gujarat 364290",
  processHouseAddress: "Behind Hanumant High School, Mahuva, Gujarat 364290",
} as const;

export const STATS: { value: number; suffix: string; label: string }[] = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Clients" },
  { value: 150, suffix: "+", label: "Working Members" },
  { value: 40, suffix: "+", label: "Products" },
];

export const WELCOME_PARAGRAPHS = [
  "Every enduring business begins with a dream, and the story of Purify Foods and Spices Pvt. Ltd. is no different. Rooted in a family with a strong background in trade and business, our journey reflects years of hands-on commitment to quality, reliability and customer trust. What began as an entrepreneurial vision has, over more than a decade, grown into a company recognised for consistency, food safety and dependable supply in the dehydration industry.",
  "Purify Foods and Spices Pvt. Ltd. is based in Mahuva, Gujarat — one of India's most prominent onion-growing belts — giving us direct access to some of the finest raw material available for dehydration in the country. Our location also places us close to the region's major agricultural produce, including onion, garlic and a wide range of spices, allowing us to maintain close oversight of quality right from the farm.",
  "With a vision to serve our clients on a true farm-to-fork basis, we work closely with growers, monitor produce from cultivation through processing, and apply strict quality checks at every stage — all in pursuit of delivering an authentic, consistent product to customers across the world.",
] as const;

export const VISION_MISSION = [
  {
    title: "Vision",
    detail:
      "To establish Purify Foods and Spices as a trusted and recognisable name in the dehydrated food category, expanding our visibility and market share while continuously strengthening our quality standards and product offering.",
  },
  {
    title: "Mission",
    detail:
      "Our mission is to enhance productivity through best-in-class quality practices, deliver consistently high-quality dehydrated products, and maintain an efficient, reliable supply chain — ensuring every customer, from large food processing industries to individual buyers, receives the same standard of excellence.",
  },
] as const;

export const EXPORT_COUNTRIES = [
  { name: "Malaysia", code: "my" },
  { name: "Vietnam", code: "vn" },
  { name: "Singapore", code: "sg" },
  { name: "UK", code: "gb" },
  { name: "Russia", code: "ru" },
  { name: "Spain", code: "es" },
  { name: "Germany", code: "de" },
  { name: "UAE (Dubai)", code: "ae" },
  { name: "USA", code: "us" },
  { name: "Cambodia", code: "kh" },
  { name: "Mexico", code: "mx" },
  { name: "South Africa", code: "za" },
] as const;

export const USPS = [
  {
    title: "Quality Assurance",
    detail: "Every batch is lab-tested for moisture, colour and microbial limits before it leaves the plant.",
  },
  {
    title: "Custom Cuts & Mesh Sizes",
    detail: "Flakes down to sub-millimetre granules and mesh-graded powders, matched to your own spec sheet.",
  },
  {
    title: "Global Export Capability",
    detail: "Packaging, documentation and logistics built around international buyers, not just the domestic market.",
  },
  {
    title: "Ethical Sourcing",
    detail: "Raw material sourced directly from growing regions with traceability back to the farm.",
  },
  {
    title: "On-Time Fulfilment",
    detail: "Production planned against your shipping window, not the other way around.",
  },
  {
    title: "Modern Infrastructure",
    detail: "Continuous-belt dehydration and mechanised grading replace manual, inconsistent processing.",
  },
] as const;

export const CERTIFICATIONS = [
  { code: "APEDA", name: "APEDA", detail: "Agricultural & Processed Food Products Export Development Authority — registered exporter.", image: "/assets/cert-apeda.png" },
  { code: "FSSAI", name: "FSSAI", detail: "Food Safety and Standards Authority of India — licensed food business operator.", image: "/assets/cert-fssai.png" },
  { code: "SPICE BOARD", name: "Spice Board of India", detail: "Registered with the Spice Board of India for spice export and quality certification.", image: "/assets/cert-spiceboard.png" },
  { code: "ISO", name: "ISO Certified", detail: "ISO-certified quality and food safety management systems (ISO 22000 & 9001).", image: "/assets/cert-iso.png" },
  { code: "IEC", name: "IEC Code", detail: "Import Export Code (IEC) — authorised by Directorate General of Foreign Trade for international trade.", image: "/assets/cert-iec.png" },
  { code: "HALAL", name: "Halal Certified", detail: "Jamiat Ulama-I-Hind Halal Trust certified processing for global Halal-compliant supply chains.", image: "/assets/cert-halal.png" },

] as const;

export type ProductVariant = {
  name: string;
  variants: string[];
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  items: ProductVariant[];
  flat?: string[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "white-onion",
    name: "Dehydrated White Onion",
    tagline: "Kibbled flakes to 100–120 mesh powder",
    blurb:
      "The widest cut range in our onion line — eleven sizes from coarse kibbled flakes down to ultra-fine 100–120 mesh powder.",
    items: [
      {
        name: "Dehydrated White Onion",
        variants: [
          "Kibbled / Flakes",
          "Chopped (3–5 mm)",
          "Minced (2–4 mm)",
          "Minced (1–3 mm)",
          "Granules (1–2 mm)",
          "Granules (0.5–1 mm)",
          "Granules (0.3–0.8 mm)",
          "Granules (0.2–0.5 mm)",
          "Granules (40–80 Mesh)",
          "Powder (80–100 Mesh)",
          "Powder (100–120 Mesh)",
        ],
      },
    ],
  },
  {
    slug: "red-onion",
    name: "Dehydrated Red Onion",
    tagline: "Kibbled flakes to fine powder",
    blurb: "Consistent colour and pungency across five cuts, from kibbled flakes to fine powder.",
    items: [
      {
        name: "Dehydrated Red Onion",
        variants: ["Kibbled / Flakes", "Chopped (3–5 mm)", "Minced (1–3 mm)", "Granules (0.2–1 mm)", "Powder"],
      },
    ],
  },
  {
    slug: "pink-onion",
    name: "Dehydrated Pink Onion",
    tagline: "Kibbled flakes to fine powder",
    blurb: "A milder colour and flavour profile than red onion, available across the same five cuts.",
    items: [
      {
        name: "Dehydrated Pink Onion",
        variants: ["Kibbled / Flakes", "Chopped (3–5 mm)", "Minced (1–3 mm)", "Granules (0.2–1 mm)", "Powder"],
      },
    ],
  },
  {
    slug: "toasted-onion",
    name: "Toasted Onion",
    tagline: "Light & dark roast, flakes to powder",
    blurb: "Roasted for depth of flavour before dehydration — available in light and dark powder variants.",
    items: [
      {
        name: "Toasted Onion",
        variants: [
          "Kibbled / Flakes",
          "Chopped (3–5 mm)",
          "Minced (1–3 mm)",
          "Granules (0.2–1 mm)",
          "Powder — Light variant",
          "Powder — Dark variant",
        ],
      },
    ],
  },
  {
    slug: "fried-onion",
    name: "Fried Onion",
    tagline: "Fresh, coated, gluten-free & dehydrated",
    blurb: "Ready-to-use fried onion in fresh, coated, gluten-free and shelf-stable dehydrated forms.",
    items: [
      {
        name: "Fried Onion",
        variants: [
          "Fresh Fried Onion",
          "Coated Fried Onion",
          "Gluten-Free Fried Onion",
          "Dehydrated Fried Onion — Palm Oil",
          "Dehydrated Fried Onion — Sunflower Oil",
        ],
      },
    ],
  },
  {
    slug: "garlic",
    name: "Dehydrated Garlic",
    tagline: "Flakes to fine powder",
    blurb: "One consistent product line, graded across five cuts to match sauces, seasoning blends or snack coatings.",
    items: [
      {
        name: "Dehydrated Garlic",
        variants: ["Kibbled / Flakes", "Chopped (3–5 mm)", "Minced (1–3 mm)", "Granules (0.2–1 mm)", "Powder"],
      },
    ],
  },
  {
    slug: "vegetables",
    name: "Dehydrated Vegetables",
    tagline: "Eleven core vegetable powders & flakes",
    blurb: "Single-form vegetable ingredients for soups, snacks, seasoning blends and instant food manufacturing.",
    items: [],
    flat: [
      "Potato Flakes",
      "Potato Powder",
      "Beetroot Powder",
      "Tomato Powder",
      "Spinach Powder",
      "Carrot Powder",
      "Cabbage Powder",
      "Green Chilli Powder",
      "Ginger Powder",
      "Curry Leaf Powder",
      "Mint Powder",
      "Coriander Leaf Powder",
    ],
  },
  {
    slug: "spices",
    name: "Indian Spices",
    tagline: "Whole & ground, sourced at origin",
    blurb: "Core Indian spices supplied whole or ground, with a wider range available against custom enquiry.",
    items: [],
    flat: [
      "Cumin",
      "Coriander",
      "Fenugreek",
      "Cloves",
      "Cardamom",
      "Chilli",
      "Turmeric",
      "Amchur",
      "Cinnamon",
      "Other whole & ground spices — on request",
    ],
  },
];

export const PROCESS_STEPS = [
  { title: "Sourcing", detail: "Raw material sourced directly from growing regions with traceability back to the farm." },
  { title: "Cleaning & Sorting", detail: "Mechanised cleaning and size-grading removes foreign matter before processing begins." },
  { title: "Dehydration", detail: "Continuous-belt dehydration under controlled temperature to lock in colour, flavour and shelf life." },
  { title: "Grading & Cutting", detail: "Product is cut, milled and mesh-graded to the exact spec — from kibbled flakes to fine powder." },
  { title: "Quality Testing", detail: "Every batch is lab-tested for moisture, colour value, and microbial limits." },
  { title: "Packaging", detail: "Export-grade packaging sized and labelled to buyer and destination-country requirements." },
  { title: "Export Dispatch", detail: "Documentation and logistics coordinated against the buyer's shipping window." },
] as const;
