-- Create waitlist table for storing email signups
CREATE TABLE public.waitlist (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public waitlist signup)
CREATE POLICY "Anyone can join the waitlist"
ON public.waitlist
FOR INSERT
WITH CHECK (true);

-- Only allow reading own entries (for potential future use)
CREATE POLICY "Users can view waitlist entries"
ON public.waitlist
FOR SELECT
USING (true);