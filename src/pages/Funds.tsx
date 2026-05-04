import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { funds } from "@/content/site";

const Funds = () => {
  return (
    <Layout navVariant="dark">
      <PageHero
        eyebrow={funds.hero.eyebrow}
        title={<>An impact fund <span className="script text-coral">platform</span> — not a single fund.</>}
        sub={funds.hero.sub}
        image={funds.hero.image}
      />

      {/* FUND PLATFORM */}
      <section className="bg-clay py-24 md:py-32">
        <div className="container-x">
          <div className="eyebrow text-green">The Platform</div>
          <h2 className="display mt-4 max-w-3xl text-4xl text-navy md:text-5xl">
            Two products. One disciplined platform.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {funds.vehicles.map((f, i) => (
              <motion.article
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative flex flex-col bg-card p-8 shadow-soft hover:shadow-elevated transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="display text-2xl text-navy md:text-3xl">{f.name}</h3>
                  <span className="shrink-0 rounded-full border border-coral/40 bg-coral/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-coral">
                    {f.status}
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 border-y border-navy/10 py-5">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-navy/50">Vintage</div>
                    <div className="display mt-1 text-lg text-navy">{f.vintage}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-navy/50">Size</div>
                    <div className="display mt-1 text-lg text-navy">{f.size}</div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-navy/50">TVPI</div>
                    <div className="display mt-1 text-lg text-coral">{f.tvpi}</div>
                  </div>
                </div>

                <p className="mt-6 text-navy/70 leading-relaxed">{f.focus}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {f.highlights.map((h) => (
                    <li key={h} className="rounded-full bg-green/10 px-3 py-1 text-xs font-medium text-green">
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          {/* SISTER ENTITY */}
          <motion.a
            href={funds.sister.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group mt-10 grid gap-6 bg-navy p-8 text-clay shadow-soft hover:shadow-elevated transition-shadow md:grid-cols-12 md:items-center md:p-12"
          >
            <div className="md:col-span-3">
              <div className="text-[11px] uppercase tracking-wider text-coral">{funds.sister.tag}</div>
              <div className="display mt-2 text-3xl text-clay md:text-4xl">{funds.sister.name}</div>
            </div>
            <p className="text-clay/75 leading-relaxed md:col-span-7">{funds.sister.desc}</p>
            <div className="md:col-span-2 md:text-right">
              <span className="inline-flex items-center gap-2 rounded-full border border-clay/30 px-5 py-3 text-sm font-medium text-clay transition-colors group-hover:bg-coral group-hover:border-coral">
                Visit site →
              </span>
            </div>
          </motion.a>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-gradient-navy py-24 text-clay md:py-32">
        <div className="container-x text-center">
          <div className="eyebrow text-coral justify-center">Philosophy</div>
          <h2 className="display mx-auto mt-6 max-w-4xl text-4xl leading-tight text-clay md:text-6xl">
            {funds.philosophy.title}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-clay/80 leading-relaxed">
            {funds.philosophy.body}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Funds;
