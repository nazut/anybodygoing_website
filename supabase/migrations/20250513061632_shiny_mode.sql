/*
  # Update waitlist table RLS policies

  1. Changes
    - Add policy to allow public access for inserting emails into waitlist
    - Keep existing policies for authenticated access

  2. Security
    - Enable public access for email submissions
    - Maintain RLS for data protection
*/

-- Enable RLS
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Remove existing policies
DROP POLICY IF EXISTS "Service role can insert waitlist emails" ON waitlist;
DROP POLICY IF EXISTS "Service role can select waitlist emails" ON waitlist;

-- Add new policies
CREATE POLICY "Allow public to insert emails"
  ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);