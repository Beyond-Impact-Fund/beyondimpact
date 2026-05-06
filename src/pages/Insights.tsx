import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { insights } from "@/content/site";
import { toast } from "sonner";

const Insights = () => {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Subscribed.", { description: "Welcome to the Trailblazers." });
    setEmail("");
  };

  return (
    <Layout navVariant="dark">
      <PageHero
        eyebrow={insights.hero.eyebrow}
        title={<>Strategy, signal and the long arc of the <span className="script text-coral">transition</span>.</>}
        sub={insights.hero.sub}
      />

      {/* ARTICLES */}
      <section className="bg-clay py-24 md:py-32">
        <div className="container-x">
          <div className="eyebrow text-green">Latest Perspectives</div>
          <div className="mt-12 divide-y divide-navy/15 border-y border-navy/15">
            {insights.articles.map((a, i) => (
              <motion.a
                key={a.title}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group grid grid-cols-1 gap-4 py-10 transition-colors md:grid-cols-12 md:items-baseline md:gap-8 hover:bg-navy/[0.03]"
              >
                <div className="md:col-span-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-coral">{a.tag}</span>
                </div>
                <div className="md:col-span-7">
                  <h3 className="display text-2xl text-navy md:text-3xl group-hover:text-coral transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-navy/70 leading-relaxed">{a.excerpt}</p>
                </div>
                <div className="md:col-span-2 text-sm text-navy/55">
                  {a.date} · {a.readTime}
                </div>
                <div className="md:col-span-1 md:text-right">
                  <ArrowUpRight className="ml-auto h-5 w-5 text-navy group-hover:text-coral transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="relative overflow-hidden bg-navy py-24 text-clay md:py-32">
        <div aria-hidden className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-green/20 blur-3xl" />
        <div className="container-x relative grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="eyebrow text-coral">Trailblazers Subscription</div>
            <h2 className="display mt-6 text-5xl text-clay md:text-6xl">
              {insights.newsletter.title}
            </h2>
            <p className="mt-6 max-w-md text-lg text-clay/75 leading-relaxed">
              {insights.newsletter.body}
            </p>
          </div>
          <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-clay/30 bg-transparent px-6 py-4 text-clay placeholder:text-clay/50 focus:border-coral focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-7 py-4 text-sm font-medium text-clay shadow-coral transition-all hover:bg-coral/90"
            >
              Subscribe <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
