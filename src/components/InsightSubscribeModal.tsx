import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const STORAGE_KEY = "bi_insights_subscribed";

const InsightSubscribeModal = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const close = () => setOpen(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || value.length > 254) {
      toast({ title: "Please enter a valid email address." });
      return;
    }
    localStorage.setItem(STORAGE_KEY, value);
    toast({
      title: "You're on the list",
      description: "We'll send Beyond Impact insights straight to your inbox.",
    });
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="insight-subscribe-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/70 p-4 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-clay p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute right-4 top-4 rounded-full p-1 text-navy/60 hover:bg-navy/5 hover:text-navy"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="eyebrow text-coral">Beyond Impact Insights</div>
        <h2 id="insight-subscribe-title" className="display mt-3 text-2xl text-navy md:text-3xl">
          Stay ahead of the impact curve
        </h2>
        <p className="mt-3 text-sm text-navy/75">
          Get new essays, portfolio dispatches and market notes from our team — straight to your inbox.
        </p>
        <form onSubmit={submit} className="mt-5 space-y-3">
          <input
            type="email"
            required
            maxLength={254}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-full border border-navy/20 bg-white px-5 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-coral focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-coral px-6 py-3 text-sm font-medium text-clay transition-colors hover:bg-coral/90"
          >
            Subscribe
          </button>
          <button
            type="button"
            onClick={close}
            className="w-full text-center text-xs text-navy/55 hover:text-navy"
          >
            No thanks, keep reading
          </button>
        </form>
      </div>
    </div>
  );
};

export default InsightSubscribeModal;
