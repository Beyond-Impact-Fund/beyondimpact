import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { insights } from "@/content/insights";
import { ArrowRight } from "lucide-react";

const parseDate = (d: string) => {
  const t = Date.parse(d);
  return isNaN(t) ? 0 : t;
};

const Insights = () => {
  const [author, setAuthor] = useState<string>("All");
  const [category, setCategory] = useState<string>("All");

  const sorted = useMemo(
    () => [...insights].sort((a, b) => parseDate(b.date) - parseDate(a.date)),
    []
  );

  const authors = useMemo(
    () => ["All", ...Array.from(new Set(insights.map((i) => i.author)))],
    []
  );
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(insights.map((i) => i.category)))],
    []
  );

  const filtered = useMemo(
    () =>
      sorted.filter(
        (i) =>
          (author === "All" || i.author === author) &&
          (category === "All" || i.category === category)
      ),
    [sorted, author, category]
  );

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: sorted.map((i, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://beyondimpact.lovable.app/insights/${i.slug}`,
      name: i.title,
    })),
  };

  return (
    <Layout navVariant="dark">
      <SEO
        title="Insights — Impact VC field notes on climate, bioeconomy & alternative protein | Beyond Impact"
        description="Long-form essays and research from Beyond Impact on impact investing, climate VC, biodiversity, blue economy, alternative protein, precision fermentation and the bioeconomy."
        path="/insights"
        keywords="impact investing insights, climate VC essays, bioeconomy research, alternative protein analysis, biodiversity fund, blue economy, precision fermentation, biomaterials, Article 9 SFDR"
        jsonLd={itemListJsonLd}
      />
      <PageHero
        eyebrow="Insights"
        title={<>Field notes from the <span className="script text-coral">transition</span>.</>}
        sub="Long-form essays, opinion pieces and white papers from the Beyond Impact team — on capital, climate, biodiversity, biomanufacturing and the future of food."
      />
      <section className="bg-clay py-20 md:py-28">
        <div className="container-x">
          {/* Filters */}
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
              <div>
                <div className="mb-2 text-[11px] uppercase tracking-wider text-navy/70">Filter by author</div>
                <div className="flex flex-wrap gap-2">
                  {authors.map((a) => (
                    <button
                      key={a}
                      onClick={() => setAuthor(a)}
                      className={`rounded-full border px-4 py-1.5 text-xs transition-all ${
                        author === a
                          ? "border-navy bg-navy text-clay"
                          : "border-navy/20 text-navy hover:border-navy/50"
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 text-[11px] uppercase tracking-wider text-navy/70">Filter by tag</div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCategory(c)}
                      className={`rounded-full border px-4 py-1.5 text-xs transition-all ${
                        category === c
                          ? "border-coral bg-coral text-clay"
                          : "border-navy/20 text-navy hover:border-coral/60"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-sm text-navy/70">
              {filtered.length} {filtered.length === 1 ? "article" : "articles"} · newest first
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((i, idx) => (
              <motion.div
                key={i.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                <Link
                  to={`/insights/${i.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-navy/10 bg-white p-7 transition-all hover:border-coral hover:shadow-xl"
                >
                  <div>
                    <span className="eyebrow text-coral">{i.category}</span>
                    <h2 className="display mt-3 text-2xl text-navy md:text-[1.65rem] leading-tight">
                      {i.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-navy/70">{i.excerpt}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-4 text-xs uppercase tracking-wider text-navy/70">
                    <span>{i.author} · {i.date}</span>
                    <ArrowRight className="h-4 w-4 text-coral transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-16 rounded-2xl border border-navy/10 bg-white p-10 text-center text-navy/70">
              No insights match this combination. Try clearing a filter.
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
