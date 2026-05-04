import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { about } from "@/content/site";

const About = () => {
  return (
    <Layout navVariant="dark">
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={<>Pioneer impact <span className="script text-coral">VC</span>, built on conviction.</>}
        sub={about.hero.sub}
        image={about.hero.image}
      />

      {/* VALUES */}
      <section className="bg-clay py-24 md:py-32">
        <div className="container-x">
          <div className="eyebrow text-green">Our Values</div>
          <h2 className="display mt-4 max-w-3xl text-4xl text-navy md:text-5xl">
            Three forces shaping the next economy.
          </h2>
          <div className="mt-16 grid gap-px bg-navy/10 md:grid-cols-3">
            {about.values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-clay p-10"
              >
                <div className="display text-sm tracking-wider text-coral">{v.tag}</div>
                <h3 className="display mt-6 text-2xl text-navy">{v.title}</h3>
                <p className="mt-4 leading-relaxed text-navy/70">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE LEADERSHIP */}
      <section className="bg-navy py-24 text-clay md:py-32">
        <div className="container-x">
          <div className="eyebrow text-coral">Core Leadership</div>
          <h2 className="display mt-4 max-w-3xl text-4xl text-clay md:text-5xl">
            A team with <span className="script text-coral">80+</span> years of direct experience.
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {about.leadership.map((p) => (
              <div key={p.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-navy-deep to-navy">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="display text-[12rem] leading-none text-coral/20 group-hover:text-coral/40 transition-colors">
                      {p.initials}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent" />
                </div>
                <div className="mt-6">
                  <h3 className="display text-2xl text-clay">{p.name}</h3>
                  <div className="mt-1 text-sm text-coral">{p.role}</div>
                  <p className="mt-4 text-sm leading-relaxed text-clay/70">{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT TEAM */}
      <section className="bg-clay py-24 md:py-32">
        <div className="container-x">
          <div className="eyebrow text-green">The Investment Team</div>
          <h2 className="display mt-4 max-w-3xl text-4xl text-navy md:text-5xl">
            Advisors and analysts across four continents.
          </h2>
          <div className="mt-12 divide-y divide-navy/10 border-y border-navy/10">
            {about.investmentTeam.map((p) => (
              <div key={p.name} className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:items-baseline">
                <div className="md:col-span-3 display text-2xl text-navy">{p.name}</div>
                <div className="md:col-span-3 text-sm font-medium text-coral">{p.role}</div>
                <div className="md:col-span-6 text-navy/70">{p.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
