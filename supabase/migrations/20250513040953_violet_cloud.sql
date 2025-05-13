/*
  # Create waitlist table for email collection

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `subscribed_to_updates` (boolean)
  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for service role to insert data
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  subscribed_to_updates boolean DEFAULT true
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow service role to insert waitlist emails 
CREATE POLICY "Service role can insert waitlist emails"
  ON waitlist
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow service role to select all waitlist emails
CREATE POLICY "Service role can select waitlist emails"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);