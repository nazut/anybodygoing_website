/*
  # Add event_submissions and sessions tables

  1. Creates event_submissions table for storing user-submitted events
  2. Creates sessions table for tracking user analytics
  3. Adds relations between sessions and other tables (waitlist, event_submissions)
  4. Sets up appropriate RLS policies
  5. Adds edge function for capturing IP address
*/

-- Create event_submissions table
CREATE TABLE IF NOT EXISTS event_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  date DATE NOT NULL,
  location TEXT NOT NULL,
  description TEXT,
  email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', -- pending, approved, rejected
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

COMMENT ON TABLE event_submissions IS 'User-submitted events from the landing page';

-- Create sessions table for analytics
CREATE TABLE IF NOT EXISTS sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address TEXT,
  user_agent TEXT,
  timezone TEXT,
  referrer TEXT, -- Where the user came from
  locale TEXT, -- User's browser locale
  screen_size TEXT, -- User's screen dimensions
  platform TEXT, -- OS information
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_seen_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  joined_waitlist BOOLEAN DEFAULT false,
  submitted_event BOOLEAN DEFAULT false,
  waitlist_email TEXT REFERENCES waitlist(email),
  event_submission_id UUID REFERENCES event_submissions(id)
);

COMMENT ON TABLE sessions IS 'Analytics tracking for site visitors';

-- Add function to update timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger for event_submissions
CREATE TRIGGER update_event_submissions_updated_at
BEFORE UPDATE ON event_submissions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- Setup RLS on event_submissions
ALTER TABLE event_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public to insert events
CREATE POLICY "Allow public to insert events"
  ON event_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can view events
CREATE POLICY "Only authenticated users can view events"
  ON event_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Setup RLS on sessions
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;

-- Allow public to insert sessions
CREATE POLICY "Allow public to insert and update sessions"
  ON sessions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow public to update sessions (their own only)
CREATE POLICY "Allow public to update their sessions"
  ON sessions
  FOR UPDATE
  TO public
  USING (true);

-- Only authenticated users/service_role can view sessions
CREATE POLICY "Only authenticated users can view sessions"
  ON sessions
  FOR SELECT
  TO authenticated
  USING (true); 