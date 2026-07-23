
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'unknown',
  page TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT newsletter_subscribers_email_format CHECK (
    email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND length(email) <= 254
  ),
  CONSTRAINT newsletter_subscribers_source_len CHECK (length(source) <= 50),
  CONSTRAINT newsletter_subscribers_page_len CHECK (page IS NULL OR length(page) <= 500),
  CONSTRAINT newsletter_subscribers_ua_len CHECK (user_agent IS NULL OR length(user_agent) <= 500)
);

CREATE UNIQUE INDEX newsletter_subscribers_email_key
  ON public.newsletter_subscribers (lower(email));

GRANT INSERT ON public.newsletter_subscribers TO anon, authenticated;
GRANT ALL ON public.newsletter_subscribers TO service_role;

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe"
  ON public.newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
