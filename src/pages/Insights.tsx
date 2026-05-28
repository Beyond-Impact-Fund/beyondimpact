import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { insights } from "@/content/insights";
import { ArrowRight } from "lucide-react";

const Insights = () => {
  return (
    <Layout navVariant="dark">
      <PageHero
        eyebrow="Insights"
        title={<>Field notes from the <span className="script text-coral">transition</span>.</>}
        sub="Long-form essays, opinion pieces and white papers from the Beyond Impact team — on capital, climate, biodiversity, biomanufacturing and the future of food."
      />
      <section className="bg-clay py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((i, idx) => (
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
                  <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-4 text-xs uppercase tracking-wider text-navy/55">
                    <span>{i.author} · {i.date}</span>
                    <ArrowRight className="h-4 w-4 text-coral transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
