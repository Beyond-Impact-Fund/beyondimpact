import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const Insights = () => {
  return (
    <Layout navVariant="dark">
      <PageHero
        eyebrow="Insights"
        title={<>Coming <span className="script text-coral">soon</span>.</>}
        sub="Strategy, signal and the long arc of the transition. Field notes from the team are on the way — check back shortly."
      />
      <section className="bg-clay py-24 md:py-32">
        <div className="container-x text-center">
          <p className="display text-3xl text-navy md:text-4xl">Coming soon.</p>
          <p className="mt-4 text-navy/65">Quarterly perspectives from the front of the transition economy.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
