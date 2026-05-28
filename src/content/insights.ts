// Insights — long-form essays and opinion pieces from the Beyond Impact team.
// Each insight renders as its own page at /insights/:slug

export interface Insight {
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  // Body is an array of blocks. "p" = paragraph, "h2" = subhead, "ul" = bullet list, "quote" = blockquote
  body: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "quote"; text: string; cite?: string }
  >;
}

export const insights: Insight[] = [
  {
    slug: "great-china-food-wall",
    title: "The Great China Food Wall",
    author: "Sagar Tandon",
    date: "May 15, 2026",
    category: "Geopolitics & Food",
    excerpt:
      "The long game of re-engineering the global food chain — how China is applying its EV playbook to alternative proteins and the bioeconomy.",
    body: [
      { type: "p", text: "China's approach to the future is defined by a long-term commitment to resilience, sovereignty, social cohesion, and the green transition. This mindset is deeply rooted in the core principles of Confucianism, which prioritizes social harmony and stability over disruptive, short-term gains. To understand China's impact is not necessarily to \"take a side,\" but to recognize that a patient, multi-decadal commitment is required to transition toward a kinder, cleaner, and healthier world." },
      { type: "p", text: "While many Western democratic states fuelled the initial phase of the green transition, some have lost momentum, retreating toward extractive energy methods or slowing down in favour of short-term appeasement politics. In contrast, Confucian-inspired states in Pacific Asia — regardless of their specific political systems — are acting with a rational, logical consistency that often eludes the West." },
      { type: "p", text: "I believe in Dao Foods' thesis that China needs protein diversification and biomanufacturing for its food security, and I also believe China is going to lead the alternative protein, bioeconomy, and animal-free economy sectors, because it is committed and continually deepening its commitment. When China sets its mind on something it considers strategic for the nation, it will be realized." },
      { type: "h2", text: "From EVs to Alternative Proteins" },
      { type: "p", text: "Just as China revolutionised the Electric Vehicle market, it is now applying the same playbook to food security. By diversifying protein sources and investing in biomanufacturing, China is positioning itself to lead the global bioeconomy. According to a recent report by Systemiq Ltd and the Moore Foundation, China has moved beyond treating alternative proteins as a niche innovation and is instead classifying them as a strategic national priority to reduce dependence on imported soy and beef." },
      { type: "p", text: "Chinese solar reached 70% market share in 15 years. Chinese EVs reached 70% market share in 13 years. China is now in the early stages of a food systems transition, with alternative proteins increasingly treated as a strategic priority rather than a niche innovation." },
      { type: "h2", text: "The China Playbook: A Five-Phase Strategy" },
      { type: "ul", items: [
        "Strategic Prioritisation: The central government integrates alternative protein into five-year plans with binding production targets, ensuring investment follows administrative mandates rather than market speculation.",
        "Financial & Infrastructure De-Risking: State-owned banks provide low-cost, long-term capital, while regional governments build shared bioreactors to lower the 'cost of failure' for private startups.",
        "Induced Demand Creation: The state guarantees early adoption through military rations, school lunch programmes, and government procurement, creating predictable revenue streams before the retail market even matures.",
        "Entrepreneurial Cost Competition: Dense supplier ecosystems and university partnerships force rapid iteration. As the sector consolidates, firms achieve price parity with traditional animal proteins.",
        "Export & Standards Leadership: China aims to export 'turnkey' alt-protein factories to Belt and Road countries and to set international ISO standards for production, locking in a structural global advantage.",
      ]},
      { type: "h2", text: "Confucian Capitalism" },
      { type: "p", text: "The Confucian approach to capitalism differs fundamentally from the Western model, viewing the market through the lens of moral duty and social stability rather than solely in terms of individual profit. It suggests that economic activity should serve the collective harmony of the state and its people, creating a framework where private enterprise and social responsibility are inextricably linked." },
      { type: "p", text: "Impact investing, by its very nature, requires extreme patience and long-term thinking — qualities that I believe make China and Japan the natural lead for centuries to come. This Confucianist approach to capitalism has the potential to make the entire system more ethical, and China is uniquely well-suited for this evolution." },
      { type: "p", text: "In essence, China is not waiting for vegan trends to dictate the future of food; it is using a state-led industrial strategy to mandate a bioeconomy revolution. By applying the same logic that allowed them to dominate the EV and renewable energy sectors, China is poised to lead the world in alternative proteins. This patient capital approach, rooted in Confucian values of harmony and long-term stability, offers a stark alternative to the often-exhausted cycles of Western political shifts." },
    ],
  },
  {
    slug: "the-great-reckoning",
    title: "The Great Reckoning",
    author: "Sagar Tandon",
    date: "April 1, 2026",
    category: "Strategy",
    excerpt:
      "Doubling down on a kinder, cleaner, healthier world — why committed fund managers will outlast the hype cycle.",
    body: [
      { type: "p", text: "The role of a fund manager is to be an honest, committed, and trusted intermediary. If that honesty, commitment, and trust fade, there is little a fund manager can do to regain investors' trust in a thesis they have formulated with deep sectoral insights and trends." },
      { type: "p", text: "The issue I see with several funds in the private markets space is that they have such a short attention span and are driven by mega-trends that, in most cases, are just hype and lead to Ponzi-like behaviour. Many fund managers can show very high TVPI over a short period of a few years, while the committed fund managers who stick to fundamental catalysts are ridiculed for remaining honest and steadfast." },
      { type: "quote", text: "Our value system is always present in our actions — consciously or unconsciously. At the same time, much care and profound reflections are needed to make explicit and justify what is ethically desirable and what is not.", cite: "3TH1CS — A reinvention of ethics in the digital age" },
      { type: "h2", text: "Still Committed Since 2018" },
      { type: "p", text: "At Beyond Impact, we remain deeply committed to the space we have been invested in since 2018. Beachhead markets may have shifted, and go-to-market strategies have evolved, but the essence remains: we need a production transition in food, materials, nutrition, pharmaceuticals, and personal care that allows us to decouple our existence from the abuse of nature." },
      { type: "p", text: "A valuation correction can, and perhaps should, happen, but there is still a future for alternative proteins, and we remain firm believers. Some markets are showing more positive signals than others, but the market itself has not disappeared; it has only vanished in the eyes of consultants or funds that were overexposed during the hype when money poured in only to leave for the next trend." },
      { type: "p", text: "On the brighter side, those who found a way to survive these tough times — when almost no new money is flowing — are showing real resilience. This is a time when we should be talking about resilience and sovereignty regarding food, materials, and energy." },
      { type: "h2", text: "Structural Shifts in Northern Europe" },
      { type: "p", text: "Our conviction is further bolstered by the structural shifts occurring across the Nordics and the Netherlands. Helsinki is currently pioneering a landmark 'Meat and Dairy-Free' food policy for 2030, signalling a clear political mandate to decouple municipal procurement from high-emission animal agriculture. This is not just a lifestyle choice; it is a strategic sovereign decision to build a resilient, localised food system." },
      { type: "p", text: "The Netherlands provides an equally compelling blueprint for the future of retail and governance. Dutch supermarkets are now leading the world by transparently reporting their 'protein split,' with many committed to reaching a 60/40 plant-to-animal ratio by 2030. While the 'hype' investors fled, the Precision Fermentation market has surged to an estimated $5.5 billion in 2026, growing at a staggering 48% CAGR." },
      { type: "h2", text: "From Hype to Habit" },
      { type: "p", text: "Ultimately, we are doubling down because the 'hype' has been replaced by 'habit' and 'industrial scale.' We aren't interested in the quick TVPI fix of a hype cycle; we are interested in the compounding returns of a world that has no choice but to reinvent how it feeds and heals itself. We remain patient, we remain committed, and we remain convinced that the most resilient companies — the ones that will bring systemic change — are being forged in this exact moment of market fear." },
    ],
  },
  {
    slug: "untapped-climate-opportunity",
    title: "The Untapped Climate Opportunity",
    author: "Beyond Impact VC",
    date: "April 5, 2024",
    category: "Climate",
    excerpt:
      "Why alternative proteins represent the single largest under-funded climate financing opportunity in the global economy.",
    body: [
      { type: "p", text: "Climate change is one of the biggest threats facing our planet today. With greenhouse gas emissions continuing to rise, we must find innovative solutions to reduce emissions and mitigate the impacts of climate change. One promising solution is the development of alternative proteins, which could offer a significant and untapped opportunity for climate financing." },
      { type: "p", text: "Alternative proteins, which include plant-based proteins and cultured meat, have the potential to reduce greenhouse gas emissions from animal agriculture drastically. Animal agriculture is responsible for a significant portion of global greenhouse gas emissions, with estimates ranging from 14.5% to 51% of all emissions." },
      { type: "p", text: "According to a report from RethinkX, alternative proteins could capture up to 10% of the global meat market by 2035. This shift would result in a reduction of up to 2.4 gigatons of greenhouse gas emissions annually, equivalent to taking 527 million cars off the road. Furthermore, the report suggests that this shift could save up to $1.4 trillion in environmental costs by 2050." },
      { type: "h2", text: "Biggest Emissions Cuts Per Dollar" },
      { type: "p", text: "According to Boston Consulting Group, investment in plant-based meat delivers the biggest emissions cuts of all sectors, at roughly 4.3 billion tonnes of CO2-equivalent saved per $1 trillion invested — far ahead of cement, iron and steel, chemicals, buildings, cars, shipping, electricity, aviation, and trucks." },
      { type: "ul", items: [
        "The shift to alternative beef, pork, chicken, and egg alternatives will save more than one gigaton of CO2e by 2035.",
        "Producing animal alternatives emits 30% to 90% fewer GHGs than conventional meat, fish, dairy, and egg production.",
        "Cultivated meat requires up to 78% less water than beef, and plant-based meat requires 99% less water than conventional meat.",
      ]},
      { type: "h2", text: "Capital Requirements" },
      { type: "p", text: "According to BCG's report Food for Thought: The Protein Transformation, almost 30 million tons of bioreactor capacity for microorganisms and animal cells will be needed in the base case, requiring up to $30 billion in investment capital. The extrusion capacity needed for plant-based proteins will require up to $28 billion in investment. In APAC alone, PwC, Rabobank, and Temasek estimate $750 billion in additional funding is needed by 2030 to meet rising protein demand." },
      { type: "p", text: "Alternative proteins offer a significant and untapped climate financing opportunity. By investing in the development and scaling of these technologies, we can reduce greenhouse gas emissions, create economic opportunities, and contribute to sustainable development." },
    ],
  },
  {
    slug: "role-of-ai-in-alternative-proteins",
    title: "Role of AI in Alternative Proteins",
    author: "Beyond Impact VC",
    date: "May 2, 2024",
    category: "Technology",
    excerpt:
      "AI is an enabler, not a thesis. How it is accelerating recombinant proteins, cultivated meat, and bioprocess design.",
    body: [
      { type: "p", text: "AI advancements have propelled the alternative protein field forward, revolutionising how researchers design, optimise, and scale up recombinant protein production, plant-based protein production, and cultivated meat production processes." },
      { type: "h2", text: "Design, Optimise, and Scale Recombinant Protein Production" },
      { type: "p", text: "Central to the shift to alternative proteins is recombinant protein production, a biotechnological process that harnesses the power of microorganisms to produce proteins with diverse applications." },
      { type: "ul", items: [
        "Protein engineering and design: AI algorithms analyse complex protein structures, predict functionalities, and modify genetic sequences to optimise properties — resulting in proteins with improved nutritional profiles, enhanced functionalities, and reduced allergenicity.",
        "Discovery of the right strain: AI-driven high-throughput screening expedites the identification of the most promising microbial strains capable of producing target proteins.",
        "Reducing trial & error: AI-powered predictive analytics enable researchers to anticipate the behaviour of biological systems, saving valuable time and resources.",
      ]},
      { type: "p", text: "While AlphaFold itself is not directly involved in producing alternative proteins, its accurate predictions of protein structures can revolutionise the field of protein engineering and design." },
      { type: "h2", text: "Cultivated Meat: Efficiency, Scalability, Cost" },
      { type: "ul", items: [
        "Cell-line identification & development: AI algorithms aid in selecting and engineering the most productive and stable cell lines for meat production and can predict sensory profile and taste based on cell lines and cultivation conditions.",
        "Bioprocess optimisation: AI-driven automation and data analytics monitor and control nutrient supply, temperature, and pH levels in bioreactors.",
        "Nutrient and media optimisation: AI optimises cell-culture media by predicting the ideal combination of nutrients and growth factors required for efficient cell growth, reducing reliance on costly and scarce ingredients.",
      ]},
      { type: "p", text: "We don't think, as investors and entrepreneurs, we should be obsessed with AI. Instead, we should be obsessed with the end outcome we want to achieve in alternative proteins — mimicking animal-derived meats, seafood, and dairy in a kinder, cleaner, and healthier way. AI is an enabler. We are not going to put money in a company because it is 'AI', but rather because it is leveraging AI to help scale biomanufacturing and overall product formulation, making it more cost-effective and efficient." },
    ],
  },
  {
    slug: "animal-free-for-biodiversity",
    title: "Animal-Free for Biodiversity",
    author: "Sagar Tandon",
    date: "March 21, 2025",
    category: "Biodiversity",
    excerpt:
      "Beyond Impact for decarbonisation, biodiversity, climate impact, blue ocean and health & wellness.",
    body: [
      { type: "p", text: "Our current production practices for food, materials, ingredients, pharmaceuticals, and personal care exponentially lead to species extinction and make biodiversity vulnerable. The world is facing a biodiversity crisis, with the 2022 Living Planet Report showing an average 69% decline in wildlife populations between 1970 and 2018. According to the IUCN, over 28% of species assessed are threatened with extinction." },
      { type: "p", text: "We firmly position Beyond Impact VC to help reduce carbon emissions, accelerate decarbonisation, provide healthier, kinder, cleaner alternatives, and make biodiversity resilient — by relieving the land (avoiding deforestation and abuse of the blue ocean), reducing water consumption, and avoiding zoonotic diseases altogether." },
      { type: "p", text: "To my knowledge, little capital has moved to preserve biodiversity by investing in animal-free solutions. We believe we are spearheading the movement and educating our peers, LPs, scientists, and innovators." },
      { type: "h2", text: "The Numbers" },
      { type: "ul", items: [
        "Livestock farming occupies 77% of global agricultural land while providing only 18% of global calories (FAO).",
        "Deforestation for grazing and feed crops is a leading cause of habitat destruction. Pasture expansion for cattle production has been linked to 80% of Amazon clearing.",
        "FAO fishery stocks within biologically sustainable levels decreased to 62.3% in 2021.",
        "Livestock contributes approximately 14.5% of global greenhouse gas emissions, with cattle accounting for around 62% of the livestock sector's emissions.",
        "The majority of emerging infectious diseases have come from wild or farmed animals.",
      ]},
      { type: "h2", text: "The Case for Animal-Free Solutions" },
      { type: "ul", items: [
        "With supportive policy, a shift toward alternative proteins can enable 44% of land across 10 evaluated European countries to transition to agroecological farming, domestic food production, and nature restoration.",
        "If 50% of leading animal products (pork, chicken, beef, milk) are substituted with animal-free products globally, the net reduction of forest and natural land will almost entirely halt.",
        "Eliminating livestock could save up to 1.6 billion hectares of wild habitats, protecting critical ecosystems.",
      ]},
      { type: "p", text: "We see biodiversity impact as vital as a focus on decarbonisation and GHG reduction because healthy ecosystems are the foundation of life on Earth, providing essential services like clean air, water, pollination, and climate regulation. Addressing biodiversity loss and climate change creates a virtuous cycle: protecting species and ecosystems enhances carbon sequestration and resilience, ensuring a healthier, more sustainable planet for all." },
      { type: "p", text: "We are investing in nature-positive solutions so humanity can live in harmony with nature. Let us make our biodiversity resilient and help all species breathe and live in accordance with nature." },
    ],
  },
  {
    slug: "biomaterials-untapped-climate-opportunity",
    title: "Biomaterials: An Untapped Climate Opportunity",
    author: "Beyond Impact VC",
    date: "July 8, 2025",
    category: "Materials",
    excerpt:
      "From plastics to textiles to building materials — why next-gen biomaterials are the climate story no one is telling.",
    body: [
      { type: "p", text: "Many of the technology stacks we see in next-gen food and biopharmaceuticals are the same ones in the materials space. Although the application of these technologies to materials is relatively new, they have widespread impact on the climate and the lives of animals and humans." },
      { type: "p", text: "I don't hear much about biomaterials' potential role in curbing climate change. It is not just plastics but textiles, building materials, pharmaceuticals, and more. The most interesting argument I left to ponder is durability versus degradability — providing functional durability while the material is in use, and degradability when it no longer is. Easier said than done." },
      { type: "h2", text: "The Markets" },
      { type: "ul", items: [
        "Bioplastics currently represent roughly 0.5% of the over 400 million tonnes of plastic produced annually. Global bioplastics production capacity is set to increase from around 2.18 million tonnes in 2023 to approximately 7.43 million tonnes in 2028.",
        "The global synthetic fibres market was valued at $66.11 billion in 2022 and is expected to grow at 7.4% CAGR through 2030.",
        "The animal leather market is worth nearly $100 billion annually (UNIDO).",
        "The wool market is estimated at $38.97 billion in 2024, expected to reach $45.61 billion by 2029.",
        "The global silk market is valued at $17.2 billion in 2022 and projected to grow to $28.5 billion by 2030.",
        "The fashion industry was responsible for 2.1 billion tonnes of GHG emissions in 2018 — about 4% of the global total.",
      ]},
      { type: "h2", text: "Why It Matters" },
      { type: "p", text: "Our dependence on animals and petroleum-based products is causing substantial environmental degradation, damage to local ecosystems, biodiversity loss, polluted water sources, and rising emissions. We need to think beyond energy transition if we are serious about decarbonisation, and press on solutions that help us transition consumption in materials, food, medicines, and skincare." },
      { type: "quote", text: "In aquatic invertebrates, microplastics cause a decline in feeding behaviour and fertility, slow down larval growth, increase oxygen consumption, and stimulate reactive oxygen species. In fish, microplastics may cause structural damage to the intestine, liver, gills, and brain.", cite: "Zolotova et al., Harmful effects of microplastic pollution on animal health" },
      { type: "p", text: "We can't continue hampering nature for our consumption; we need to find creative ways to decouple our dependence on animals and, in turn, alleviate their suffering and prevent biodiversity loss. We are excited about biomaterials — not only because they don't have microplastics but also because many of them, such as seaweed-based materials, can significantly help improve aquatic life and ocean pH balance." },
    ],
  },
  {
    slug: "the-nordic-edge",
    title: "The Nordic Edge",
    author: "Sagar Tandon",
    date: "October 2, 2025",
    category: "Regional",
    excerpt:
      "Why the New Nordics (Nordics + Baltics) are an undercapitalised innovation powerhouse — and our edge as a global investor.",
    body: [
      { type: "p", text: "The New Nordics (Nordics + Baltics) region is often celebrated for its high quality of life, progressive policies, and leadership in sustainability. But beyond the postcard-perfect imagery lies something even more compelling: an undercapitalised innovation powerhouse with the right ingredients to solve some of the world's toughest challenges in climate, health, and industrial sustainability." },
      { type: "h2", text: "1. An Undervalued Innovation Powerhouse" },
      { type: "p", text: "Nordic countries rank among the highest in economic complexity — on par with the US and UK — yet receive far less venture capital relative to their innovation output. Finland has the most PhDs per capita in Europe. Sweden and Denmark are biotech leaders, home to Novo Nordisk, the world's largest biotech company. The region excels in industrial biotech, green chemistry, and alternative proteins; however, early-stage funding remains scarce, creating a pricing advantage for investors who can navigate technical risk." },
      { type: "h2", text: "2. Strong Science, Weak Global Capitalisation = Asymmetric Opportunity" },
      { type: "p", text: "Most Nordic startups are funded locally, meaning few international investors compete at Series A and beyond, especially in hard-science sectors. This allows us to shape rounds, cap tables, and governance early with a focus on long-term scaling, and to bridge Nordic science with global markets — particularly in Asia, where we have strong networks for R&D partnerships, biomanufacturing, and commercialisation." },
      { type: "h2", text: "3. Cost-Competitive, Green Biomanufacturing" },
      { type: "p", text: "Finland's nuclear- and renewable-powered grid offers some of the cheapest, lowest-carbon bioprocessing capacity in Europe. With fermentation and scale-up infrastructure expanding fast, the Nordics are becoming a hub for sustainable production — critical as global supply chains prioritise resilience and decarbonisation." },
      { type: "h2", text: "4. Decentralisation = Resilience & Capital Efficiency" },
      { type: "p", text: "Since the 1970s, Nordic giants like Atlas Copco, Handelsbanken, and Indutrade have thrived under decentralised models, emphasising autonomy, local accountability, and long-term thinking. Flatter organisations mean faster pivots; capital efficiency is baked into company-building culture; and long-term alignment with stakeholders reduces friction." },
      { type: "h2", text: "5. Trust as Economic Infrastructure" },
      { type: "p", text: "Nordic societies consistently top global trust surveys, leading to lower fraud and governance risks, stronger ESG outcomes — often without heavy-handed mandates — and easier collaboration between academia, startups, and corporations." },
      { type: "h2", text: "Why Beyond Impact Is Betting on the Nordics" },
      { type: "p", text: "Our thesis is simple: the best science, paired with the right capital and governance, can solve global problems faster. The Nordics offer elite research talent without Silicon Valley salary inflation, undervalued deal flow in climate tech, biotech, and industrial innovation, and a culture built for long-term impact, not just short-term hype." },
    ],
  },
  {
    slug: "ingredients-for-a-sustainable-future",
    title: "Ingredients for a Sustainable Future",
    author: "Claire Smith",
    date: "2025",
    category: "White Paper",
    excerpt:
      "Redefining the food system through science, innovation, and investment — the Beyond Impact white paper.",
    body: [
      { type: "h2", text: "A Turning Point for Food" },
      { type: "p", text: "The way we produce, process, and consume food is the single greatest determinant of our planet's future. It touches everything: climate, biodiversity, water, health, and equity. Yet, for decades, food has been overlooked in global sustainability strategies — overshadowed by energy, mobility, or infrastructure. That era is ending." },
      { type: "p", text: "The global food system is now recognised as the most powerful lever for achieving climate stability and social resilience. It contributes up to one-third of global greenhouse gas emissions, uses 70% of freshwater, and drives 90% of deforestation. But, if transformed, it could become a restorative force — regenerating ecosystems, improving nutrition, and creating economic opportunity." },
      { type: "h2", text: "Why Food Is the Lever for Change" },
      { type: "ul", items: [
        "Food generates 26–34% of all greenhouse gas emissions.",
        "It uses 90% of freshwater withdrawals.",
        "It occupies 43% of the planet's ice- and desert-free land surface.",
        "80% of agricultural land is dedicated to livestock and feed, yet provides less than 20% of human calories.",
        "800 million people go hungry, while 2 billion are overweight, and one-third of all food is wasted.",
      ]},
      { type: "p", text: "By shifting from animal-dependent systems to plant- and micro-organism-based ones, we can cut emissions by over 80%, free up three-quarters of agricultural land for rewilding or carbon capture, reduce water use by 90%, and restore ecosystems and biodiversity at scale. If we fix food, we fix the future." },
      { type: "h2", text: "The Planetary Boundary Crisis" },
      { type: "p", text: "The Stockholm Resilience Centre identifies nine planetary boundaries within which humanity can safely operate. We have already crossed six of them: climate change, biosphere integrity, land-system change, freshwater use, nitrogen and phosphorus flows, and novel entities. Agriculture and food production are major drivers of nearly all these breaches." },
      { type: "h2", text: "Rethinking Ingredients" },
      { type: "p", text: "We are entering the age of biofabricated ingredients — the next great leap after the first agricultural and industrial revolutions. Precision fermentation acts as nature's smallest factories. Cellular agriculture delivers real meat without slaughter. Molecular farming turns plants into biofactories. Together with circular and digital tools, these technologies enable a data-driven food system that reduces waste, accelerates discovery, and aligns nutrition with planetary boundaries." },
      { type: "h2", text: "Market Opportunity" },
      { type: "p", text: "Investing in food innovation is no longer philanthropy — it's future-proof capitalism. The capital flowing today will determine who leads the trillion-dollar food economy of tomorrow." },
      { type: "h2", text: "Beyond Impact's Thesis" },
      { type: "p", text: "We invest early in companies redefining the building blocks of the food system — ingredient platforms and sustainable protein systems alike. These companies demonstrate that decarbonising protein is not a theoretical exercise — it is a commercial and regulatory reality unfolding now." },
      { type: "quote", text: "The future of food will not be built brand by brand, but system by system." },
      { type: "p", text: "The future of food will be built on science, ethics, and circularity — not extraction. The tools exist. The capital is mobilising. The time is now." },
    ],
  },
  {
    slug: "beyond-energy-consumption-transition",
    title: "Beyond Energy: Why We Need a Consumption Transition to Decarbonise",
    author: "Sagar Tandon",
    date: "2024",
    category: "Climate",
    excerpt:
      "Sequestering carbon, sparing animals — the dual climate opportunity of animal-free biotech.",
    body: [
      { type: "p", text: "Our objective is to clearly outline the importance of going beyond just energy transition and, therefore, also focusing on transitioning how we consume and manufacture products. While energy transition is a big talking point at many climate conferences, we need to shed light on the potential for decarbonisation with biotech and bioeconomy solutions that ultimately shift how we manufacture and produce what we eat, wear, and take as medicines." },
      { type: "p", text: "The global decarbonisation market is expected to grow at 11.5% CAGR from 2023 to 2032, reaching $2.54 trillion by 2032. Is there a better manufacturing method that's less extractive, cleaner, and kinder to Mother Nature? We don't just need energy transition; we need consumption transition." },
      { type: "h2", text: "Reliance on Animals" },
      { type: "p", text: "The global economy's reliance on animals significantly contributes to greenhouse gas emissions and climate change. Livestock farming alone accounts for around 14.5% of global human-induced emissions. Removing our reliance on animals and transitioning to animal-free alternatives can drastically reduce our carbon footprint and accelerate economic decarbonisation." },
      { type: "p", text: "Animal-free food, materials, and ingredients have substantially lower carbon, land, and water footprints than animal-derived counterparts. For example, animal-free meat and dairy products can reduce emissions by 30–90%. Similarly, animal-free ingredients in cosmetics have a much smaller environmental impact." },
      { type: "h2", text: "The Dual Climate Opportunity" },
      { type: "p", text: "Investing in solutions like Yeastup (upcycled protein from spent brewer's yeast), Algama (ingredients from microalgae, which act as excellent carbon sinks), and Ingrediome (precision fermentation using cyanobacteria) can supercharge decarbonisation. These circular solutions leverage organisms that actively remove carbon, creating a double climate benefit." },
      { type: "ul", items: [
        "Plant-based and lab-grown meat alternatives can partially replace traditional livestock farming, which accounts for approximately 7.1 gigatonnes of CO2-equivalent per year (14.5% of total anthropogenic GHG emissions).",
        "Enhancing current forestry and agricultural practices could increase carbon sequestration by approximately 25%.",
        "Sugarcane genetically modified for biodiesel could yield around 6,700 litres per hectare — significantly higher than soybeans at approximately 500 litres per hectare.",
      ]},
      { type: "p", text: "Decoupling from animals opens up opportunities to utilise more sustainable agricultural practices that sequester carbon, improve soil health, and support biodiversity. This shift from industrial animal agriculture is crucial in meeting global climate targets and building a more sustainable, low-carbon future." },
      { type: "p", text: "At Beyond Impact, we believe offering an alternative to climate financing is vital. As a race, we can decarbonise by changing our consumption patterns. The animal-free economy provides a great alternative. We truly believe we are on the cusp of a generational shift to decarbonise every aspect of our existence — cleaner, healthier, and kinder to people, planet, and animals." },
    ],
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
