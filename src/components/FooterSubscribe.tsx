import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const FooterSubscribe = () => {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || value.length > 254) {
      toast({ title: "Please enter a valid email address." });
      return;
    }
    try {
      localStorage.setItem("bi_insights_subscribed", value);
    } catch {
      // ignore storage errors
    }
    toast({
      title: "Subscribed",
      description: "You'll receive Beyond Impact insights in your inbox.",
    });
    setEmail("");
  };

  return (
    <div className="mt-16 grid gap-4 border-t border-clay/15 pt-8 md:grid-cols-12 md:items-center">
      <div className="md:col-span-6">
        <div className="eyebrow text-coral">Newsletter</div>
        <p className="mt-3 font-display text-2xl leading-tight text-clay">
          Stay updated with Beyond Impact insights
        </p>
        <p className="mt-2 text-sm text-clay/70">
          Essays, portfolio dispatches and market notes — occasional, no spam.
        </p>
      </div>
      <form onSubmit={submit} className="md:col-span-6">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            maxLength={254}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            aria-label="Email address"
            className="flex-1 rounded-full border border-clay/25 bg-transparent px-5 py-3 text-sm text-clay placeholder:text-clay/50 focus:border-coral focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-medium text-clay transition-colors hover:bg-coral/90"
          >
            Subscribe
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FooterSubscribe;
