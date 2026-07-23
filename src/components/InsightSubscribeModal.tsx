import { useEffect, useState } from "react";
import { X, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const STORAGE_KEY = "bi_insights_subscribed";

const InsightSubscribeModal = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    if (submitting) return;
    setOpen(false);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim().toLowerCase();
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || value.length > 254) {
      toast({ title: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("newsletter_subscribers").insert({
      email: value,
      source: "insights_modal",
      page: typeof window !== "undefined" ? window.location.pathname : null,
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 500) : null,
    });
    setSubmitting(false);

    // 23505 = unique_violation → email already subscribed
    if (error && error.code !== "23505") {
      toast({
        title: "Something went wrong",
        description: "We couldn't save your email. Please try again in a moment.",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem(STORAGE_KEY, value);
    toast({
      title: error?.code === "23505" ? "You're already subscribed" : "You're on the list",
      description:
        error?.code === "23505"
          ? "This email is already receiving Beyond Impact insights."
          : "We'll send Beyond Impact insights straight to your inbox.",
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
            disabled={submitting}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-full border border-navy/20 bg-white px-5 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-coral focus:outline-none disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-medium text-clay transition-colors hover:bg-coral/90 disabled:opacity-70"
          >
            {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
            {submitting ? "Subscribing…" : "Subscribe"}
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
