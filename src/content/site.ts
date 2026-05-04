// =====================================================================
// Beyond Impact — Site Content
// =====================================================================
// EDIT THIS FILE to update copy, stats, team members, portfolio, etc.
// All text on the site is sourced from this single file.
// =====================================================================

import heroFields from "@/assets/hero-fields.jpg";
import heroBio from "@/assets/hero-bio.jpg";
import heroLab from "@/assets/hero-lab.jpg";
import heroEarth from "@/assets/hero-earth.jpg";
import transitionRupture from "@/assets/transition-rupture.jpg";
import sectorMaterials from "@/assets/sector-materials.jpg";
import sectorNutrition from "@/assets/sector-nutrition.jpg";
import sectorPharma from "@/assets/sector-pharma.jpg";
import sectorIngredients from "@/assets/sector-ingredients.jpg";
import teamClaire from "@/assets/team/claire.png";
import teamTarja from "@/assets/team/tarja.png";
import teamSagar from "@/assets/team/sagar.png";
import teamAnthony from "@/assets/team/anthony.png";
import teamHanna from "@/assets/team/hanna.png";
import teamJody from "@/assets/team/jody.png";

export const site = {
  brand: "Beyond Impact",
  tagline: "Accelerating the transition to a kinder, cleaner, healthier world.",
  contactEmail: "invest@beyondimpact.vc",
  founded: 2017,
  navLinks: [
    { label: "About", href: "/about" },
    { label: "Funds", href: "/funds" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Insights", href: "/insights" },
  ],
};

export const home = {
  hero: {
    eyebrow: "Pioneer Impact VC · Est. 2017",
    headlineLead: "Capital for the",
    headlineScript: "transition",
    headlineRest: "economy.",
    sub: "Beyond Impact is a venture platform investing in superior, scalable, sustainable solutions across nutrition, ingredients, life sciences and materials — engineered for resilience as animal-derived supply chains break.",
    primaryCta: { label: "Explore the platform", href: "/funds" },
    secondaryCta: { label: "Read our thesis", href: "/about" },
    image: heroFields,
  },
  missionCallout: {
    eyebrow: "The Transition Economy",
    title: "The animal supply chain is not at risk — it is actively breaking.",
    body: "Avian flu has destroyed >100M U.S. layer hens. Marine ingredients in aquafeed dropped from 25% to 3%. Western per-capita meat is in structural decline. We back the companies replacing what's failing — with humane, decarbonizing, regenerative innovation.",
    image: transitionRupture,
    stats: [
      { value: ">168M", label: "U.S. birds culled by H5N1 since Feb 2022" },
      { value: "25% → 3%", label: "Marine ingredients in aquafeed (2000–2023)" },
      { value: "+275%", label: "U.S. egg price surge post 18% flock depopulation" },
      { value: "−6%", label: "EU & U.S. peak dairy herd decline YoY" },
    ],
  },
  stats: [
    { value: "$175M", label: "AUM across two impact VC funds" },
    { value: "2.3×", label: "Fund I TVPI (Jan ’24)" },
    { value: "$1B+", label: "Raised by portfolio post-investment" },
    { value: "80+", label: "Years of combined team experience" },
  ],
  sectors: [
    { name: "Advanced Nutrition", desc: "New protein sources, human & pet nutrition.", image: sectorNutrition, market: "$1.9T" },
    { name: "Ingredients", desc: "Functional ingredients, enablers & capacity builders.", image: sectorIngredients, market: "$200B+" },
    { name: "Life Sciences", desc: "Cruelty-free personal & health care, organ-chips.", image: sectorPharma, market: "$500B" },
    { name: "Materials", desc: "Next-gen, bio-based, circular materials.", image: sectorMaterials, market: "$1.5T" },
  ],
  partnership: {
    title: "Partner with the platform built for the next decade of impact.",
    body: "We advise, design and launch flagship funds — and co-build specialised vehicles with aligned strategic partners.",
    cta: { label: "Email invest@beyondimpact.vc", href: "mailto:invest@beyondimpact.vc" },
  },
};

export const about = {
  hero: {
    eyebrow: "About",
    title: "Pioneer impact VC, built on conviction.",
    sub: "Founded by Claire Smith in 2017, Beyond Impact has been a pioneer in providing venture capital for the transition towards a kinder, cleaner, healthier world. Article 9 (SFDR) classified.",
    image: heroLab,
  },
  values: [
    {
      tag: "01",
      title: "Humane Innovation",
      body: "We replace animal-derived inputs across nutrition, ingredients, pharmaceuticals and materials — eliminating suffering at industrial scale.",
    },
    {
      tag: "02",
      title: "Decarbonization",
      body: "Precision fermentation and cellular agriculture deliver 50–80% lower cost AND a fraction of the emissions footprint of legacy supply chains.",
    },
    {
      tag: "03",
      title: "Bio-Economy",
      body: "Regenerative inputs — micro-algae, fungi, pulses, fibres — feeding circular ingredient systems with structural margin advantages.",
    },
  ],
  leadership: [
    { name: "Claire Smith", role: "Founder & CIO", bio: "30+ years across institutional investing, venture capital and impact. Founder of Beyond Impact.", initials: "CS" },
    { name: "Partner Two", role: "Managing Partner", bio: "Deep operator experience in food-tech and bio-economy scale-ups across Europe and North America.", initials: "P2" },
    { name: "Partner Three", role: "Partner, Life Sciences", bio: "Background in cruelty-free pharma, organ-chip platforms and clinical translation.", initials: "P3" },
  ],
  investmentTeam: [
    { name: "Advisor One", role: "Venture Partner — APAC", bio: "Strategic dealflow across Asia-Pacific bio-economy ventures." },
    { name: "Advisor Two", role: "Venture Partner — MENA", bio: "Sovereign and corporate LP relationships across MENA region." },
    { name: "Analyst One", role: "Investment Analyst", bio: "Diligence lead on advanced nutrition and ingredients pipeline." },
    { name: "Analyst Two", role: "Investment Analyst", bio: "Materials and circular-economy thesis research." },
  ],
};

export const funds = {
  hero: {
    eyebrow: "Investment Strategy",
    title: "An impact fund platform — not a single fund.",
    sub: "Luxembourg SICAV-RAIF umbrella, MC Square SA AIFM, Beyond Impact Advisors Sàrl as registered investment advisor. New sub-funds operational in ~6 weeks.",
    image: heroBio,
  },
  vehicles: [
    {
      name: "Beyond Impact Ventures",
      status: "Flagship VC platform",
      vintage: "2018 →",
      size: "€55M+ AUM",
      tvpi: "2.3×",
      focus: "Article 9 SFDR venture funds investing seed → Series A across animal-free nutrition, ingredients, life sciences and materials. Luxembourg SICAV-RAIF umbrella with new sub-funds operational in ~6 weeks.",
      highlights: ["Fund I (2018) — closed", "Fund II (2022) — active", "23+ portfolio companies", "Article 9 SFDR"],
    },
    {
      name: "Co-Investments",
      status: "Open — rolling",
      vintage: "Ongoing",
      size: "Bespoke",
      tvpi: "—",
      focus: "Direct co-investment opportunities into high-conviction follow-ons, secondaries and pro-rata rounds alongside Beyond Impact Ventures. LP-aligned terms, full diligence memos shared.",
      highlights: ["Single-asset vehicles", "Sterling & EUR structures", "LP-aligned terms"],
    },
  ],
  sister: {
    name: "Beyond Investing",
    tag: "Sister entity",
    desc: "Public-market platform for the transition economy — sponsor and adviser to the U.S. Vegan Climate ETF (CBOE: VEGN) and related listed strategies.",
    cta: { label: "Visit beyondinvesting.com", href: "https://beyondinvesting.com" },
  },
  philosophy: {
    title: "Scaling the impact, not the hype.",
    body: "Disciplined selection over market hype. Our specialist B2B filters protected the platform from high-profile capital traps — backing companies that started in high-margin niches and earned their way to scale.",
  },
};

export const portfolio = {
  hero: {
    eyebrow: "Portfolio",
    title: "A working directory of the transition economy.",
    sub: "Filter by fund, sector or geography. Founders raised over $1B post our initial investment.",
  },
  companies: [
    { name: "Paleo", sector: "Ingredients", fund: "Fund II", region: "EU", desc: "Precision fermentation — meaty taste proteins for human & pet food.", raised: ">€15M" },
    { name: "Swedish Algae Factory", sector: "Materials", fund: "Fund I", region: "EU", desc: "Diatoms (microalgae) for sustainable industrial materials.", raised: "€10M+" },
    { name: "Mosa Meat", sector: "Nutrition", fund: "Fund I", region: "EU", desc: "World's first cultivated beef burger. Leading cellular agriculture.", raised: "€100M" },
    { name: "Gourmey", sector: "Nutrition", fund: "Fund II", region: "EU", desc: "Cultivated foie gras from duck liver tissue — cruelty-free.", raised: ">€100M" },
    { name: "Geltor", sector: "Ingredients", fund: "Fund I", region: "US", desc: "Designer collagen and proteins via precision fermentation.", raised: ">$100M" },
    { name: "Better Origin", sector: "Ingredients", fund: "Fund II", region: "UK", desc: "AI-powered insect bioconversion of food waste into protein.", raised: ">$20M" },
    { name: "Modern Synthesis", sector: "Materials", fund: "Fund II", region: "UK", desc: "Bacterial nanocellulose materials for fashion and beyond.", raised: ">$5M" },
    { name: "Clara Foods", sector: "Ingredients", fund: "Fund I", region: "US", desc: "Animal-free egg proteins via precision fermentation.", raised: ">$60M" },
  ],
};

export const insights = {
  hero: {
    eyebrow: "Field Notes",
    title: "Strategy, signal and the long arc of the transition.",
    sub: "Perspectives from the team on supply-chain rupture, dealflow discipline, and what comes next.",
  },
  articles: [
    {
      tag: "Thesis",
      title: "The animal supply chain is breaking — here's the data.",
      excerpt: "Avian flu, marine feed scarcity, regulatory shocks. We map the structural fractures and the companies positioned to replace them.",
      date: "Mar 2026",
      readTime: "9 min",
    },
    {
      tag: "Discipline",
      title: "Good misses: why our B2B filter said no to unicorns.",
      excerpt: "Beyond Meat. Oatly. New Age Meats. A frank look at the companies we passed on — and why discipline beat momentum.",
      date: "Feb 2026",
      readTime: "7 min",
    },
    {
      tag: "Sector",
      title: "Precision fermentation: the 50–80% cost-down is real.",
      excerpt: "RethinkX projections meet operating reality. What our portfolio is delivering at gram-scale and tonne-scale.",
      date: "Jan 2026",
      readTime: "12 min",
    },
    {
      tag: "Market",
      title: "Pet nutrition: the $120B niche hiding a transition story.",
      excerpt: "Pet food is the canary for animal-free adoption. Margin structure, retailer behaviour, and the brands winning shelf.",
      date: "Dec 2025",
      readTime: "6 min",
    },
  ],
  newsletter: {
    title: "Join the Vanguard.",
    body: "Quarterly notes from the front of the transition economy. No spam, no pitchdecks — just signal.",
  },
};
