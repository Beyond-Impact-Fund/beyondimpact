import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { getInsight, insights } from "@/content/insights";

const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const insight = slug ? getInsight(slug) : undefined;

  if (!insight) return <Navigate to="/insights" replace />;

  const idx = insights.findIndex((i) => i.slug === insight.slug);
  const next = insights[(idx + 1) % insights.length];

  return (
    <Layout navVariant="dark">
      <article>
        {/* Hero */}
        <section className="relative isolate bg-navy text-clay pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-x max-w-4xl">
            <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-coral hover:opacity-80">
              <ArrowLeft className="h-4 w-4" /> All insights
            </Link>
            <div className="eyebrow mt-8 text-coral">{insight.category}</div>
            <h1 className="display mt-5 text-4xl text-clay md:text-6xl leading-[1.05]">
              {insight.title}
            </h1>
            <p className="mt-6 text-lg text-clay/75">{insight.excerpt}</p>
            <div className="mt-8 flex items-center gap-3 text-sm text-clay/65 uppercase tracking-wider">
              <span>{insight.author}</span>
              <span className="h-1 w-1 rounded-full bg-clay/40" />
              <span>{insight.date}</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="bg-clay py-16 md:py-24">
          <div className="container-x max-w-3xl">
            <div className="space-y-6">
              {insight.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="display mt-10 text-2xl text-navy md:text-3xl">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="list-disc space-y-3 pl-6 text-navy/80 leading-relaxed">
                      {block.items.map((it, j) => (
                        <li key={j}>{it}</li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={i}
                      className="border-l-4 border-coral bg-white/60 px-6 py-5 text-lg italic text-navy/85"
                    >
                      "{block.text}"
                      {block.cite && (
                        <footer className="mt-3 text-sm not-italic text-navy/70">— {block.cite}</footer>
                      )}
                    </blockquote>
                  );
                }
                return (
                  <p key={i} className="text-[1.05rem] leading-relaxed text-navy/80">
                    {block.text}
                  </p>
                );
              })}
            </div>
          </div>
        </section>

        {/* Next */}
        <section className="border-t border-navy/10 bg-clay py-12">
          <div className="container-x max-w-3xl">
            <Link
              to={`/insights/${next.slug}`}
              className="group flex flex-col gap-2 rounded-2xl border border-navy/10 bg-white p-6 transition-all hover:border-coral hover:shadow-lg"
            >
              <span className="eyebrow text-coral">Read next · {next.category}</span>
              <div className="flex items-center justify-between gap-4">
                <h3 className="display text-xl text-navy md:text-2xl">{next.title}</h3>
                <ArrowRight className="h-5 w-5 shrink-0 text-coral transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default InsightDetail;
